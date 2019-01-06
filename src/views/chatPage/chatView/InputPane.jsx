import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import messageStore from 'stores/MessageStore';
import ContentEditable from 'views/components/ContentEditable';
import inputPaneStyle from 'assets/jss/chatPage/chatView/inputPane';
import { FaGrinWink, FaImage, FaFileUpload, FaVideo } from 'react-icons/fa';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Popover from '@material-ui/core/Popover';
import EmojiPicker from './EmojiPicker';
import tool from 'utils/tool';

function InputPane(props) {
  const { classes } = props;
  const [emojiAnchorEl, setEmojiAnchorEl] = useState(null);
  const emojiAnchorRef = React.createRef();
  const inputRef = React.createRef();
  const handleKeyPress = event => {
    const html = event.target.innerHTML;
    if (!event.shiftKey && event.key === 'Enter') {
      if (html === '') {
        event.preventDefault();
        return;
      }
      messageStore.sendMessage(html);
      event.target.innerHTML = '';
      event.preventDefault();
      return;
    }
    console.log(inputRef.current.caretPosition);
  };

  const handleMouseUp = event => {};

  const handleToolClick = (event, tool) => {
    console.log(tool);
    if (tool === 'emoji') {
      setEmojiAnchorEl(emojiAnchorRef.current);
    }
  };

  const handelEmojiExited = () => {
    tool.setEndOfContenteditable(inputRef.current);
    inputRef.current.focus();
  };

  const handleEmojiClose = () => {
    setEmojiAnchorEl(null);
  };

  const handleEmojiClick = emoji => {
    inputRef.current.innerHTML += `<img src=${emoji} type-data='emoji'/>`;
    setEmojiAnchorEl(null);
  };

  return (
    <div ref={emojiAnchorRef}>
      <Popover
        id="emoji-popper"
        open={Boolean(emojiAnchorEl)}
        onClose={handleEmojiClose}
        anchorEl={emojiAnchorEl}
        onExited={handelEmojiExited}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <EmojiPicker callBack={handleEmojiClick} />
      </Popover>
      <ToggleButtonGroup
        value="toolPane"
        exclusive
        className={classes.toolPane}
        onChange={handleToolClick}
      >
        <ToggleButton value="emoji">
          <FaGrinWink />
        </ToggleButton>
        <ToggleButton value="image">
          <FaImage />
        </ToggleButton>
        <ToggleButton value="file">
          <FaFileUpload />
        </ToggleButton>
        <ToggleButton value="video">
          <FaVideo />
        </ToggleButton>
      </ToggleButtonGroup>
      <ContentEditable
        className={classes.textArea}
        onKeyPress={handleKeyPress}
        onMouseUp={handleMouseUp}
        inputRef={inputRef}
      />
    </div>
  );
}

export default withStyles(inputPaneStyle)(InputPane);
