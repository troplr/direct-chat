import recentChatStyle from './recentChatStyle';

const contactItemStyle = {
  ...recentChatStyle,
  searchAndAddContact: { flexGrow: 0 },
  search: {
    width: '80%',
    margin: '0.3rem 0',
    '& label[data-shrink=false]': {
      top: '-0.5rem'
    }
  },
  addContactButton: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color: 'white',
    marginTop: '0.8rem',
    marginLeft: '0.8rem'
  }
};

export default contactItemStyle;
