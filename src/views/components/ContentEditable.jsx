import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import style from 'assets/jss/components/contentEditable';
import classNames from 'classnames';
class ContentEditable extends React.Component {
  constructor() {
    super();
    this.onInput = this.onInput.bind(this);
    this.el = React.createRef();
  }

  render() {
    const { html, inputRef, className, classes, ...props } = this.props;
    this.el = inputRef;
    return (
      <div
        className={classNames({ [classes.self]: true, [className]: true })}
        ref={this.el}
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: html || '' }}
        {...props}
      />
    );
  }

  componentDidMount() {
    this.el.current.focus();
  }

  onInput(evt) {
    if (!this.el) return;
    var html = this.el.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      evt.target = { value: html };
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }
}

export default withStyles(style)(ContentEditable);
