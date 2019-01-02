/*!
 * Hover.css (http://ianlunn.github.io/Hover/)
 * Version: 2.3.2
 * Author: Ian Lunn @IanLunn
 * Author URL: http://ianlunn.co.uk/
 * Github: https://github.com/IanLunn/Hover

 * Hover.css Copyright Ian Lunn 2017. Generated with Sass.
 */
const hoverUnderline = {
  display: 'inline-block',
  verticalAlign: 'middle',
  transform: 'perspective(1px) translateZ(0)',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0)',
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    left: '51%',
    right: '51%',
    bottom: 0,
    background: '#2098D1',
    height: '2px',
    transitionProperty: 'left, right',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-out'
  },
  '&:hover:before, &:focus:before, &:active:before': {
    left: '5%',
    right: '5%'
  }
};

export default hoverUnderline;
