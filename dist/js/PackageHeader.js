'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PackageHeader = _react2.default.createClass({
  displayName: 'PackageHeader',

  getInitialState: function getInitialState() {

    return {
      pkgLength: this.props.packages.length,
      packageHeaderText: this.props.packageHeaderText
    };
  },
  render: function render() {

    var colspan = this.state.pkgLength + 1;

    return _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          { colSpan: colspan },
          this.state.packageHeaderText
        )
      )
    );
  }
});

exports.default = PackageHeader;