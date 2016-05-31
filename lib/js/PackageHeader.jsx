import React from 'react';

const PackageHeader = React.createClass({
  getInitialState: function() {

    return {
      pkgLength: this.props.packages.length,
      packageHeaderText: this.props.packageHeaderText
    }

  },
  render: function() {

    const colspan = this.state.pkgLength + 1;

    return (
      <thead>
        <tr>
          <th colSpan={colspan}>
            {this.state.packageHeaderText}
          </th>
        </tr>
      </thead>
    );
  }
});

export default PackageHeader;