const contentEditable = {
  self: {
    overflow: 'auto',
    borderRadius: '3px',
    padding: '0.5rem',
    background: '#e4daec no-repeat',
    backgroundImage:
      'linear-gradient(to bottom, #1abc9c, #1abc9c), linear-gradient(to bottom, silver, silver)',
    backgroundSize: '0 2px, 100% 1px',
    backgroundPosition: '50% 100%, 50% 100%',
    transition: 'background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1)',
    '&:focus': {
      backgroundSize: '100% 2px, 100% 1px',
      outline: 'none'
    },
    '& img': {
      width: '2rem',
      margin: '0.3rem'
    }
  }
};

export default contentEditable;
