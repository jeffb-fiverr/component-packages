import React from 'react';

const PackagePrices = React.createClass({

  getPackagePrices: function(packages) {
    return packages.map((pkg, index) => {
      return (
        <td key={index} className="price">
          <h2 className="green">{pkg.currencySymbol}{pkg.price}</h2>
          <h2>{pkg.title}</h2>
        </td>
      );
    });
  },

  render: function() {

    const packagePrices = this.getPackagePrices(this.props.packages);

    return (
      <tr>
        <td className="package-heading"></td>
        {packagePrices}
      </tr>
    );
  }

});

export default PackagePrices;