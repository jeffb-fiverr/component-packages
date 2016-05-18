const React = require('react');

const TextFeature = React.createClass({

  render: function() {
    // console.info('TextFeature', this.props);

    return (
      <div className="text-feature">{this.props.title} >> {this.props.value}</div>
    );
  }

});

module.exports = TextFeature;