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
}

export default new Tool();
