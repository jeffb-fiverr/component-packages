"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputFeature = _react2.default.createClass({
  displayName: "InputFeature",


  radioChanged: function radioChanged(e) {
    this.props.setPrice(parseInt(e.currentTarget.dataset.val));
  },

  getInput: function getInput(option, index) {
    return _react2.default.createElement(
      "label",
      { key: index },
      option.text,
      _react2.default.createElement("input", {
        type: "radio",
        name: option.name,
        "data-val": option.value,
        defaultChecked: option.default,
        onClick: this.radioChanged })
    );
  },

  render: function render() {
    var _this = this;

    // const inputs = this.getInputs(this.props.options);
    var inputs = this.props.options.map(function (option, index) {
      return _this.getInput(option, index);
    });

    return _react2.default.createElement(
      "form",
      { className: "input-feature" },
      this.props.title,
      ":",
      inputs
    );
  }

});

exports.default = InputFeature;