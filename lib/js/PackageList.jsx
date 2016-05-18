import React from 'react';
import Package from './Package';

const PackageList = React.createClass({

  getInitialState: function() {
    return this.props.model;
  },

  render: function() {
    const packageNodes = this.state.packages.map((pkg, index) => {

      return (
        <Package
          key={index}
          title={pkg.title}
          currencySymbol={pkg.currencySymbol}
          price={pkg.price}
          description={pkg.description}
          features={pkg.features}
          selectButtonText={pkg.selectButtonText} />
      )
    });

    return (
      <div className="packageList">
        {packageNodes}
      </div>
    );
  }

});

export default PackageList;