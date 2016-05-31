'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _PackageHeader = require('./PackageHeader');

var _PackageHeader2 = _interopRequireDefault(_PackageHeader);

var _PackagePrices = require('./PackagePrices');

var _PackagePrices2 = _interopRequireDefault(_PackagePrices);

var _PackageDescription = require('./PackageDescription');

var _PackageDescription2 = _interopRequireDefault(_PackageDescription);

var _FeatureRow = require('./FeatureRow');

var _FeatureRow2 = _interopRequireDefault(_FeatureRow);

var _PurchaseButtons = require('./PurchaseButtons');

var _PurchaseButtons2 = _interopRequireDefault(_PurchaseButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PackageContainer = _react2.default.createClass({
  displayName: 'PackageContainer',


  getInitialState: function getInitialState() {
    return this.props.model;
  },

  getFeatures: function getFeatures(packages) {

    var featuresArr = [];

    packages.map(function (pkg) {

      pkg.features.map(function (feature, i) {

        if (!featuresArr[i]) {
          featuresArr.push([]);
        }

        featuresArr[i].push(feature);
      });
    });

    return featuresArr;
  },

  setPrice: function setPrice(packageIndex, priceChange) {

    var oldPrice = this.props.model.packages[packageIndex].price,
        newPrice = parseInt(oldPrice) + priceChange,
        updatedPrice = (0, _reactAddonsUpdate2.default)(this.state.packages[packageIndex], { price: { $set: newPrice } }),
        newPackages = (0, _reactAddonsUpdate2.default)(this.state.packages, {
      $splice: [[packageIndex, 1, updatedPrice]]
    });

    this.setState({ packages: newPackages });
  },

  renderFeatureRows: function renderFeatureRows(featureList) {
    var _this = this;

    return featureList.map(function (features, index) {
      return _react2.default.createElement(_FeatureRow2.default, {
        key: index,
        features: features,
        setPrice: _this.setPrice,
        currencySymbol: _this.props.model.packages[0].currencySymbol });
    });
  },

  render: function render() {

    var features = this.getFeatures(this.state.packages),
        renderedFeatureRows = this.renderFeatureRows(features);

    return _react2.default.createElement(
      'table',
      { className: 'package-container', cellPadding: '0', cellSpacing: '0' },
      _react2.default.createElement(_PackageHeader2.default, {
        packageHeaderText: this.props.model.packageHeaderText,
        packages: this.props.model.packages }),
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(_PackagePrices2.default, { packages: this.state.packages }),
        _react2.default.createElement(_PackageDescription2.default, { packages: this.props.model.packages }),
        renderedFeatureRows,
        _react2.default.createElement(_PurchaseButtons2.default, { packages: this.state.packages })
      )
    );
  },

  componentDidMount: function componentDidMount() {
    this.props.events();
  }

});

exports.default = PackageContainer;