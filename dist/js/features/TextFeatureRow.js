'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFeatureRow = _react2.default.createClass({
  displayName: 'TextFeatureRow',


  render: function render() {
    return _react2.default.createElement(
      'td',
      null,
      this.props.value
    );
  }

});

exports.default = TextFeatureRow;