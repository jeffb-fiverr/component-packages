import React from 'react';
import $ from 'jquery';
import update from 'react-addons-update';

import PackageHeader from './PackageHeader';
import PackagePrices from './PackagePrices';
import PackageDescription from './PackageDescription';
import FeatureRow from './FeatureRow';
import PurchaseButtons from './PurchaseButtons';

const PackageContainer = React.createClass({

  getInitialState: function() {
    return this.props.model;
  },

  getFeatures: function(packages) {

    let featuresArr = [];

    packages.map((pkg) => {

      pkg.features.map((feature, i) => {

        if (!featuresArr[i]) {
          featuresArr.push([]);
        }

        featuresArr[i].push(feature);

      });
    });

    return featuresArr;
  },

  setPrice: function(packageIndex, priceChange) {

    const oldPrice = this.props.model.packages[packageIndex].price,
          newPrice = parseInt(oldPrice) + priceChange,
          updatedPrice = update(this.state.packages[packageIndex], { price: { $set: newPrice } }),
          newPackages = update(this.state.packages, {
            $splice: [[packageIndex, 1, updatedPrice]]
          });

    this.setState({ packages: newPackages });
  },

  renderFeatureRows: function(featureList) {

    return featureList.map((features, index) => {
      return (
          <FeatureRow
            key={index}
            features={features}
            setPrice={this.setPrice}
            currencySymbol={this.props.model.packages[0].currencySymbol} />
        );
    });

  },

  render: function() {

    const features = this.getFeatures(this.state.packages),
          renderedFeatureRows = this.renderFeatureRows(features);

    return (
      <table className="package-container" cellPadding="0" cellSpacing="0">
        <PackageHeader
          packageHeaderText={this.props.model.packageHeaderText}
          packages={this.props.model.packages} />

        <tbody>
          <PackagePrices packages={this.state.packages} />
          <PackageDescription packages={this.props.model.packages} />

          {renderedFeatureRows}

          <PurchaseButtons packages={this.state.packages} />
        </tbody>
      </table>
    );
  },

  componentDidMount: function() {
    this.props.events();
  }

});

export default PackageContainer;