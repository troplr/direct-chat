import React from 'react';
import PropTypes from 'prop-types';

export default class EditableLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: this.props.isEditing || false,
      text: this.props.text || ''
    };
    this.className = props.className;
    this._handleFocus = this._handleFocus.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleFocus() {
    if (this.state.isEditing) {
      if (typeof this.props.onFocusOut === 'function') {
        this.props.onFocusOut(this.state.text);
      }
    } else {
      if (typeof this.props.onFocus === 'function') {
        this.props.onFocus(this.state.text);
      }
    }

    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  _handleChange() {
    this.setState({
      text: this.textInput.value
    });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <input
            type="text"
            className={this.className}
            ref={input => {
              this.textInput = input;
            }}
            value={this.state.text}
            onChange={this._handleChange}
            onBlur={this._handleFocus}
            maxLength={this.props.inputMaxLength || 20}
            placeholder={this.props.inputPlaceHolder}
            tabIndex={this.props.inputTabIndex}
            autoFocus
          />
        </div>
      );
    }

    return (
      <div>
        <label
          style={{ display: 'inline-block' }}
          className={this.className}
          onClick={this._handleFocus}
        >
          {this.state.text}
        </label>
      </div>
    );
  }
}

EditableLabel.propTypes = {
  text: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,

  labelClassName: PropTypes.string,
  labelFontSize: PropTypes.string,
  labelFontWeight: PropTypes.string,

  inputMaxLength: PropTypes.number,
  inputPlaceHolder: PropTypes.string,
  inputTabIndex: PropTypes.number,
  inputWidth: PropTypes.string,
  inputHeight: PropTypes.string,
  inputFontSize: PropTypes.string,
  inputFontWeight: PropTypes.string,
  inputClassName: PropTypes.string,
  inputBorderWidth: PropTypes.string,

  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func
};
