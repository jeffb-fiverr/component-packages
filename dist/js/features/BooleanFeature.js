"use strict";

var React = require('react');

var BooleanFeature = React.createClass({
  displayName: "BooleanFeature",


  render: function render() {
    // console.info('BooleanFeature', this.props);

    return React.createElement(
      "div",
      { className: "boolean-feature" },
      this.props.title,
      " >> ",
      +this.props.value
    );
  }

});

module.exports = BooleanFeature;