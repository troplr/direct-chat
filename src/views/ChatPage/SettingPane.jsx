import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import settingPaneStyle from 'assets/jss/material-kit-react/settingPaneStyle';

function SettingPane(props) {
  const { classes, className } = props;

  const [notificationSwitch, setNotificationSwitch] = useState(true);
  const [soundSwitch, setSoundSwitch] = useState(true);
  const [darkThemeSwitch, setDarkThemeSwitch] = useState(false);
  const [embededWebPageSwitch, setEmbededWebPageSwitch] = useState(true);

  const handleChange = name => event => {
    name === 'notification' && setNotificationSwitch(event.target.checked);
    name === 'sound' && setSoundSwitch(event.target.checked);
    name === 'dark-theme' && setDarkThemeSwitch(event.target.checked);
    name === 'embeded-webpage' && setEmbededWebPageSwitch(event.target.checked);

    console.log(`${name}:${event.target.checked}`);
  };

  return (
    <FormGroup
      className={classNames({ [classes.container]: true, [className]: true })}
    >
      <FormControlLabel
        control={
          <Switch
            checked={notificationSwitch}
            onChange={handleChange('notification')}
            value="notification"
            color="primary"
          />
        }
        label="Notification"
        classes={{
          label: classes.label
        }}
        className={classes.hoverUnderline}
      />
      <FormControlLabel
        control={
          <Switch
            checked={soundSwitch}
            onChange={handleChange('sound')}
            value="sound"
            color="primary"
          />
        }
        label="Sound"
        classes={{
          label: classes.label
        }}
        className={classes.hoverUnderline}
      />
      <FormControlLabel
        control={
          <Switch
            checked={darkThemeSwitch}
            onChange={handleChange('dark-theme')}
            value="dark-theme"
            color="primary"
          />
        }
        label="Dark Theme"
        classes={{
          label: classes.label
        }}
        className={classes.hoverUnderline}
      />
      <FormControlLabel
        control={
          <Switch
            checked={embededWebPageSwitch}
            onChange={handleChange('embeded-webpage')}
            value="embeded-webpage"
            color="primary"
          />
        }
        label="Embeded Webpage"
        classes={{
          label: classes.label
        }}
        className={classes.hoverUnderline}
      />
    </FormGroup>
  );
}

export default withStyles(settingPaneStyle)(SettingPane);
