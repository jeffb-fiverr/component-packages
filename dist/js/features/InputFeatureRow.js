'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputFeatureRow = _react2.default.createClass({
  displayName: 'InputFeatureRow',


  radioChanged: function radioChanged(e) {
    var packageChangedIndex = this.props.index,
        packagePriceChange = parseInt(e.currentTarget.dataset.val);

    this.props.setPrice(packageChangedIndex, packagePriceChange);
  },

  getAdditionalCharge: function getAdditionalCharge(option) {
    return _react2.default.createElement(
      'span',
      { className: 'additional-charge' },
      '(+',
      this.props.currencySymbol,
      option.value,
      ')'
    );
  },

  getInput: function getInput(option, index) {

    var additionalCharge = parseInt(option.value) ? this.getAdditionalCharge(option) : '';

    return _react2.default.createElement(
      'label',
      { key: index, className: 'fake-radio-green radio-text m-b-10' },
      _react2.default.createElement('span', { className: 'radio-img' }),
      _react2.default.createElement('input', {
        type: 'radio',
        name: option.name,
        'data-val': option.value,
        defaultChecked: option.default,
        onClick: this.radioChanged }),
      option.text,
      ' ',
      additionalCharge
    );
  },

  render: function render() {
    var _this = this;

    var inputs = this.props.options.map(function (option, index) {
      return _this.getInput(option, index);
    });

    return _react2.default.createElement(
      'td',
      { className: 'input' },
      _react2.default.createElement(
        'form',
        { action: '#!' },
        inputs
      )
    );
  }

});

exports.default = InputFeatureRow;