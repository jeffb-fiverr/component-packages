import React from 'react';

const PackageHeader = React.createClass({
  render: function() {
    return (
      <header>
        {this.props.packageHeaderText}
      </header>
    );
  }
});

export default PackageHeader;