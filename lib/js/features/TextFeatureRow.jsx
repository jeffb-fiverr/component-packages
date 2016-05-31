import React from 'react';

const TextFeatureRow = React.createClass({

  render: function() {
    return (
      <td>{this.props.value}</td>
    );
  }

});

export default TextFeatureRow;