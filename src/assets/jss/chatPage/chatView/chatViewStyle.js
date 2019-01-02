import glassBox from 'assets/jss/components/glassbox';
const avatarMarginTop = '5px';
const inputPaneHeight = '10rem';

const chatView = {
  container: {
    ...glassBox,
    display: 'flex',
    flexGrow: 1,
    flexBasis: '52%',
    minWidth: '36rem',
    minHeight: '25rem',
    flexDirection: 'column'
  },
  displayPane: {
    flexGrow: 1,
    overflow: 'auto',
    maxHeight: `calc(100% - ${inputPaneHeight})`
  },
  contactAvatar: {
    flexGrow: 0,
    width: '2.4rem',
    borderRadius: '3px',
    marginTop: avatarMarginTop
  },
  message: {
    padding: 'unset',
    alignItems: 'flex-start'
  },
  messageReverse: {
    flexDirection: 'row-reverse'
  },
  bubble: {
    maxWidth: 'calc(100% - 6rem)',
    wordWrap: 'break-word',
    borderRadius: '5px',
    boxShadow: '0 0 6px #B2B2B2',
    display: 'inline-block',
    padding: '10px 18px',
    position: 'relative',
    verticalAlign: 'top',
    '&::before': {
      content: '""',
      display: 'block',
      height: '16px',
      position: 'absolute',
      top: '11px',
      transform: 'rotate( 29deg ) skew( -35deg )',
      width: '20px'
    }
  },
  bubbleRight: {
    backgroundColor: '#8bcc69',
    float: 'right',
    margin: '5px 20px 5px 45px',
    '&::before': {
      backgroundColor: '#8bcc69',
      boxShadow: '2px -2px 2px 0 rgba( 178, 178, 178, .4 )',
      right: '-9px'
    }
  },
  bubbleLeft: {
    backgroundColor: '#F2F2F2',
    float: 'left',
    margin: `5px ${avatarMarginTop} 5px 20px`,
    '&::before': {
      backgroundColor: '#F2F2F2',
      boxShadow: '-2px 2px 2px 0 rgba( 178, 178, 178, .4 )',
      left: '-9px'
    }
  }
};

export default chatView;
export { inputPaneHeight };
