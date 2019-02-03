const label = {
  display: 'unset',
  fontWeight: 'bold',
  color: 'rgba(4, 1, 19, 0.87)',
  userSelect: 'none'
};
const settingPaneStyle = {
  container: {
    padding: '1rem'
  },
  label,
  lableInactive: {
    ...label,
    color: 'grey'
  },
  settingItem: {
    margin: '0'
    // '&:hover span:nth-child(2)': {
    //   color: '#3f51b5'
    // }
  }
};
export default settingPaneStyle;
