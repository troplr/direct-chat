import recentChatStyle from './recentChatStyle';

const contactItemStyle = {
  ...recentChatStyle,
  search: {
    width: '100%',
    margin: '0.3rem 0',
    flexGrow: 0,
    '& label[data-shrink=false]': {
      top: '-0.5rem'
    }
  }
};

export default contactItemStyle;
