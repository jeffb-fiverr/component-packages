"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PackageDescription = _react2.default.createClass({
  displayName: "PackageDescription",


  getPackageDescriptions: function getPackageDescriptions(packages) {
    return packages.map(function (pkg, index) {
      return _react2.default.createElement(
        "td",
        { key: index, className: "description" },
        _react2.default.createElement(
          "h3",
          null,
          pkg.description.descriptionTitle
        ),
        _react2.default.createElement(
          "p",
          null,
          pkg.description.descriptionText
        )
      );
    });
  },

  render: function render() {

    var packageDescriptions = this.getPackageDescriptions(this.props.packages),
        descriptionLabel = this.props.packages[0].description.descriptionLabel;

    return _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement(
        "td",
        { className: "package-heading" },
        descriptionLabel
      ),
      packageDescriptions
    );
  }

});

exports.default = PackageDescription;