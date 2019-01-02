import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { observer } from 'mobx-react-lite';
import messageStore from 'stores/MessageStore';
import TextField from '@material-ui/core/TextField';
import inputPaneStyle from 'assets/jss/chatPage/chatView/inputPane';
import tool from 'utils/tool';

function InputPane(props) {
  const { classes } = props;
  const [textValue, setTextValue] = useState('');
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
        return;
      }
    }
    setTextValue(textValue);
  };
  return (
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
        rowsMax="4"
        rows="4"
        InputProps={{
          className: classes.input
        }}
      />
    </div>
  );
}

export default withStyles(inputPaneStyle)(observer(InputPane));
