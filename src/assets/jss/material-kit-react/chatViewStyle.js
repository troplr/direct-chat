import glassBox from './components/glassbox';

const chatView = {
  container: {
    ...glassBox,
    display: 'flex',
    flexGrow: 1,
    flexBasis: '52%',
    minWidth: '36rem',
    minHeight: '25rem'
  }
};

export default chatView;
