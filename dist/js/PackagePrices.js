"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PackagePrices = _react2.default.createClass({
  displayName: "PackagePrices",


  getPackagePrices: function getPackagePrices(packages) {
    return packages.map(function (pkg, index) {
      return _react2.default.createElement(
        "td",
        { key: index, className: "price" },
        _react2.default.createElement(
          "h2",
          { className: "green" },
          pkg.currencySymbol,
          pkg.price
        ),
        _react2.default.createElement(
          "h2",
          null,
          pkg.title
        )
      );
    });
  },

  render: function render() {

    var packagePrices = this.getPackagePrices(this.props.packages);

    return _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement("td", { className: "package-heading" }),
      packagePrices
    );
  }

});

exports.default = PackagePrices;