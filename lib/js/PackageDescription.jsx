import React from 'react';

const PackageDescription = React.createClass({

  getPackageDescriptions: function(packages) {
    return packages.map((pkg, index) => {
      return (
        <td key={index} className="description">
          <h3>{pkg.description.descriptionTitle}</h3>
          <p>
            {pkg.description.descriptionText}
          </p>
        </td>
      );
    });
  },

  render: function() {

    const packageDescriptions = this.getPackageDescriptions(this.props.packages),
          descriptionLabel = this.props.packages[0].description.descriptionLabel;

    return (
      <tr>
        <td className="package-heading">{descriptionLabel}</td>
        {packageDescriptions}
      </tr>
    );
  }

});

export default PackageDescription;