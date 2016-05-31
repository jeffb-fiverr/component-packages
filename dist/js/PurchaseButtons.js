"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PurchaseButtons = _react2.default.createClass({
  displayName: "PurchaseButtons",


  getPurchaseButtons: function getPurchaseButtons(packages) {
    return packages.map(function (pkg, index) {
      return _react2.default.createElement(
        "td",
        { key: index },
        _react2.default.createElement(
          "a",
          { className: "btn-standard btn-large btn-green-grad" },
          pkg.selectButtonText,
          " ",
          pkg.currencySymbol,
          pkg.price
        )
      );
    });
  },

  render: function render() {

    var purchaseButtons = this.getPurchaseButtons(this.props.packages);

    return _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement("td", { className: "package-heading" }),
      purchaseButtons
    );
  }

});

exports.default = PurchaseButtons;