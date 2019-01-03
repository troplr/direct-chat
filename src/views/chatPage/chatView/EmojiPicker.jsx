import React from 'react';
import Grid from '@material-ui/core/Grid';
import smileEmoji from 'assets/img/emoji/smile.gif';
import sunGlassEmoji from 'assets/img/emoji/sunglass.gif';
import faintEmoji from 'assets/img/emoji/faint.gif';
import smokeEmoji from 'assets/img/emoji/smoke.gif';
import cryEmoji from 'assets/img/emoji/cry.gif';
import spookedEmoji from 'assets/img/emoji/spooked.gif';
import bloodEmoji from 'assets/img/emoji/blood.gif';
import shyEmoji from 'assets/img/emoji/shy.gif';
import speechlessEmoji from 'assets/img/emoji/speechless.gif';
import tearCryEmoji from 'assets/img/emoji/tearCry.gif';
import grinEmoji from 'assets/img/emoji/grin.gif';
import angryEmoji from 'assets/img/emoji/angry.gif';
import freakoutEmoji from 'assets/img/emoji/freakout.gif';
import sleepyEmoji from 'assets/img/emoji/sleepy.gif';
import lovedEmoji from 'assets/img/emoji/loved.gif';
import happyEmoji from 'assets/img/emoji/happy.gif';

import withStyles from '@material-ui/core/styles/withStyles';
import emojiPickerStyle from 'assets/jss/chatPage/chatView/emojiPicker';

function EmojiPicker(props) {
  const { classes, callBack } = props;
  const handleClick = event => {
    callBack(event.target.src);
  };

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item>
          <img src={smileEmoji} alt="smile emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={sunGlassEmoji} alt="sunGlass emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={faintEmoji} alt="faint emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={smokeEmoji} alt="smoke emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={cryEmoji} alt="cry emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={spookedEmoji} alt="spooked emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={bloodEmoji} alt="blood emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={shyEmoji} alt="shy emoji" onClick={handleClick} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <img
            src={speechlessEmoji}
            alt="speechless emoji"
            onClick={handleClick}
          />
        </Grid>
        <Grid item>
          <img src={tearCryEmoji} alt="tearCry emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={grinEmoji} alt="grin emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={angryEmoji} alt="angry emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={freakoutEmoji} alt="freakout emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={sleepyEmoji} alt="sleepy emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={lovedEmoji} alt="loved emoji" onClick={handleClick} />
        </Grid>
        <Grid item>
          <img src={happyEmoji} alt="happy emoji" onClick={handleClick} />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(emojiPickerStyle)(EmojiPicker);
