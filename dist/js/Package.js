'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BooleanFeature = require('./features/BooleanFeature');

var _BooleanFeature2 = _interopRequireDefault(_BooleanFeature);

var _InputFeature = require('./features/InputFeature');

var _InputFeature2 = _interopRequireDefault(_InputFeature);

var _TextFeature = require('./features/TextFeature');

var _TextFeature2 = _interopRequireDefault(_TextFeature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Package = _react2.default.createClass({
  displayName: 'Package',

  getInitialState: function getInitialState() {
    return this.props;
  },
  getFeature: function getFeature(feature, key) {
    var type = feature.type;

    if (type === 'boolean') {
      return _react2.default.createElement(_BooleanFeature2.default, {
        key: key,
        title: feature.title,
        value: feature.value });
    } else if (type === 'text') {
      return _react2.default.createElement(_TextFeature2.default, {
        key: key,
        title: feature.title,
        value: feature.value });
    } else {
      return _react2.default.createElement(_InputFeature2.default, {
        key: key,
        title: feature.title,
        options: feature.options,
        setPrice: this.setPrice });
    }
  },
  setPrice: function setPrice(addition) {
    this.setState({ 'price': parseInt(this.props.price) + addition });
  },
  render: function render() {
    var _this = this;

    var features = this.props.features.map(function (feature, index) {

      return _this.getFeature(feature, index);
    });

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        this.props.title,
        ' ',
        this.props.currencySymbol,
        this.state.price
      ),
      _react2.default.createElement(
        'h4',
        null,
        this.props.description.descriptionTitle
      ),
      _react2.default.createElement(
        'p',
        null,
        this.props.description.descriptionText
      ),
      _react2.default.createElement(
        'div',
        { className: 'feature-list' },
        features
      ),
      _react2.default.createElement(
        'button',
        null,
        this.props.selectButtonText,
        ' ',
        this.props.currencySymbol,
        this.state.price
      )
    );
  }
});

exports.default = Package;