"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BooleanFeatureRow = _react2.default.createClass({
  displayName: "BooleanFeatureRow",


  render: function render() {
    var _this = this;

    var valueLabel = function () {
      return _this.props.value ? _react2.default.createElement("span", { className: "green fa fa-check" }) : _react2.default.createElement(
        "span",
        null,
        "–"
      );
    }();

    return _react2.default.createElement(
      "td",
      null,
      valueLabel
    );
  }

});

exports.default = BooleanFeatureRow;