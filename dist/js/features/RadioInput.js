'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioInput = _react2.default.createClass({
  displayName: 'RadioInput',


  getInitialState: function getInitialState() {
    return { 'checked': this.props.option.default };
  },

  onChange: function onChange(e) {
    this.props.onChange(e);
    console.info(!this.state.checked);
    this.setState({ 'checked': !this.state.checked });
  },

  render: function render() {
    return _react2.default.createElement('input', {
      type: 'radio',
      name: this.props.option.name,
      value: this.props.option.value,
      onChange: this.onChange,
      defaultChecked: this.props.option.default });
  }

});

module.exports = RadioInput;