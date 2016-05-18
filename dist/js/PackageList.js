'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Package = require('./Package');

var _Package2 = _interopRequireDefault(_Package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PackageList = _react2.default.createClass({
  displayName: 'PackageList',


  getInitialState: function getInitialState() {
    return this.props.model;
  },

  render: function render() {
    var packageNodes = this.state.packages.map(function (pkg, index) {

      return _react2.default.createElement(_Package2.default, {
        key: index,
        title: pkg.title,
        currencySymbol: pkg.currencySymbol,
        price: pkg.price,
        description: pkg.description,
        features: pkg.features,
        selectButtonText: pkg.selectButtonText });
    });

    return _react2.default.createElement(
      'div',
      { className: 'packageList' },
      packageNodes
    );
  }

});

exports.default = PackageList;