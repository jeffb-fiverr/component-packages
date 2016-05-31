import React from 'react';

const BooleanFeatureRow = React.createClass({

  render: function() {

    const valueLabel = (() => {
      return this.props.value ? (<span className="green fa fa-check"></span>) : (<span>&ndash;</span>);
    })();

    return (
        <td>{valueLabel}</td>
    );
  }

});

export default BooleanFeatureRow;