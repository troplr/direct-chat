import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { observer } from 'mobx-react-lite';
import messageStore from 'stores/MessageStore';
import TextField from '@material-ui/core/TextField';
import inputPaneStyle from 'assets/jss/chatPage/chatView/inputPane';
import tool from 'utils/tool';
import { FaGrinWink, FaImage, FaFileUpload, FaVideo } from 'react-icons/fa';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Popover from '@material-ui/core/Popover';
import EmojiPicker from './EmojiPicker';

function InputPane(props) {
  const { classes } = props;
  const [textValue, setTextValue] = useState('');
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [emojiAnchorEl, setEmojiAnchorEl] = useState(null);

  let emojiButtonRef = React.createRef();

  const handleChange = name => event => {
    event.persist();
    const textValue = event.target.value;
    if (name === 'onKeyPress') {
      if (!event.shiftKey && event.key === 'Enter') {
        if (textValue === '') {
          return;
        }
        messageStore.sendMessage(tool.replaceLineToBr(tool.escape(textValue)));
        setTextValue('');
        event.preventDefault();
        return;
      }
    }
    setTextValue(textValue);
  };

  const handleToolClick = (event, tool) => {
    console.log(tool);
    if (tool === 'emoji') {
      setEmojiPickerOpen(true);
    }
  };

  const handleEmojiPaneClose = () => {
    setEmojiPickerOpen(false);
  };

  const handleEmojiClick = emoji => {
    setTextValue(textValue + '<img src="emoji">');
  };

  useEffect(() => {
    setEmojiAnchorEl(emojiButtonRef.current);
  });

  return (
    <div>
      <Popover
        id="simple-popper"
        open={emojiPickerOpen}
        anchorEl={emojiAnchorEl}
        onClose={handleEmojiPaneClose}
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
        <ToggleButton value="emoji" buttonRef={emojiButtonRef}>
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
      <div className={classes.inputPane}>
        <TextField
          fullWidth
          autoFocus
          value={textValue}
          multiline
          onChange={handleChange('textArea')}
          onKeyPress={handleChange('onKeyPress')}
          className={classes.textArea}
          margin="none"
          variant="filled"
          rowsMax="5"
          rows="5"
          InputProps={{
            className: classes.input
          }}
        />
      </div>
    </div>
  );
}

export default withStyles(inputPaneStyle)(observer(InputPane));
