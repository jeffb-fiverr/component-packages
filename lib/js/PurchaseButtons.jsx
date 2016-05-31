import React from 'react';

const PurchaseButtons = React.createClass({

  getPurchaseButtons: function(packages) {
    return packages.map((pkg, index) => {
      return (
        <td key={index}>
          <a className="btn-standard btn-large btn-green-grad">{pkg.selectButtonText} {pkg.currencySymbol}{pkg.price}</a>
        </td>
      );
    });
  },

  render: function() {

    const purchaseButtons = this.getPurchaseButtons(this.props.packages);

    return (
      <tr>
        <td className="package-heading"></td>
        {purchaseButtons}
      </tr>
    );
  }

});

export default PurchaseButtons;