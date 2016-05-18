const React = require('react');

const BooleanFeature = React.createClass({

  render: function() {
    // console.info('BooleanFeature', this.props);

    return (
      <div className="boolean-feature">{this.props.title} >> {+this.props.value}</div>
    );
  }

});

module.exports = BooleanFeature;