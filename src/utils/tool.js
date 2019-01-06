class Tool {
  constructor() {
    this.tagsToReplace = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    };
    this.replaceTag = this.replaceTag.bind(this);
    this.escape = this.escape.bind(this);
    this.replaceLineToBr = this.replaceLineToBr.bind(this);
  }

  replaceTag(tag) {
    return this.tagsToReplace[tag] || tag;
  }

  escape(str) {
    return str.replace(/[&<>]/g, this.replaceTag);
  }

  replaceLineToBr(text) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }

  getCaretPosition(editableDiv) {
    let caretPos = 0,
      sel,
      range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        if (range.commonAncestorContainer.parentNode === editableDiv) {
          caretPos = range.endOffset;
        }
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      if (range.parentElement() === editableDiv) {
        let tempEl = document.createElement('span');
        editableDiv.insertBefore(tempEl, editableDiv.firstChild);
        let tempRange = range.duplicate();
        tempRange.moveToElementText(tempEl);
        tempRange.setEndPoint('EndToEnd', range);
        caretPos = tempRange.text.length;
      }
    }
    return caretPos;
  }

  isChildOf(node, parentNode) {
    while (node !== null) {
      if (node === parentNode) {
        return true;
      }
      node = node.parentNode;
    }

    return false;
  }

  getCurrentCursorPosition(parentNode) {
    let selection = window.getSelection(),
      charCount = -1,
      node;

    if (selection.focusNode) {
      if (this.isChildOf(selection.focusNode, parentNode)) {
        node = selection.focusNode;
        charCount = selection.focusOffset;

        while (node) {
          if (node === parentNode) {
            break;
          }

          if (node.previousSibling) {
            node = node.previousSibling;
            charCount += node.textContent.length;
          } else {
            node = node.parentNode;
            if (node === null) {
              break;
            }
          }
        }
      }
    }

    return charCount;
  }

  createRange(node, chars, range) {
    if (!range) {
      range = document.createRange();
      range.selectNode(node);
      range.setStart(node, 0);
    }

    if (chars.count === 0) {
      range.setEnd(node, chars.count);
    } else if (node && chars.count > 0) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.length < chars.count) {
          chars.count -= node.textContent.length;
        } else {
          range.setEnd(node, chars.count);
          chars.count = 0;
        }
      } else {
        for (var lp = 0; lp < node.childNodes.length; lp++) {
          range = this.createRange(node.childNodes[lp], chars, range);

          if (chars.count === 0) {
            break;
          }
        }
      }
    }

    return range;
  }

  setCurrentCursorPosition(chars, node) {
    if (chars >= 0) {
      const selection = window.getSelection();
      const range = this.createRange(node.parentNode, {
        count: chars
      });

      if (range) {
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }

  setEndOfContenteditable(contentEditableElement) {
    let range, selection;
    if (document.createRange) {
      //Firefox, Chrome, Opera, Safari, IE 9+
      range = document.createRange(); //Create a range (a range is a like the selection but invisible)
      range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      selection = window.getSelection(); //get the selection object (allows you to change selection)
      selection.removeAllRanges(); //remove any selections already made
      selection.addRange(range); //make the range you have just created the visible selection
    } else if (document.selection) {
      //IE 8 and lower
      range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
      range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      range.select(); //Select the range (make it the visible selection
    }
  }
}

export default new Tool();
