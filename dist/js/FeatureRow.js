'use strict';

var _BooleanFeatureRow = require('./features/BooleanFeatureRow');

var _BooleanFeatureRow2 = _interopRequireDefault(_BooleanFeatureRow);

var _TextFeatureRow = require('./features/TextFeatureRow');

var _TextFeatureRow2 = _interopRequireDefault(_TextFeatureRow);

var _InputFeatureRow = require('./features/InputFeatureRow');

var _InputFeatureRow2 = _interopRequireDefault(_InputFeatureRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var FeatureRow = React.createClass({
  displayName: 'FeatureRow',


  getFeatureItems: function getFeatureItems(features) {
    var _this = this;

    return features.map(function (feature, index) {
      var type = feature.type;

      if (type === 'boolean') {
        return React.createElement(_BooleanFeatureRow2.default, {
          key: index,
          label: feature.label,
          value: feature.value });
      } else if (type === 'text') {
        return React.createElement(_TextFeatureRow2.default, {
          key: index,
          label: feature.label,
          value: feature.value });
      } else {
        return React.createElement(_InputFeatureRow2.default, {
          key: index,
          index: index,
          label: feature.label,
          options: feature.options,
          currencySymbol: _this.props.currencySymbol,
          setPrice: _this.props.setPrice });
      }
    });
  },

  render: function render() {

    var features = this.getFeatureItems(this.props.features);

    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        { className: 'package-heading' },
        this.props.features[0].label
      ),
      features
    );
  }

});

module.exports = FeatureRow;