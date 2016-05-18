"use strict";

var React = require('react');

var TextFeature = React.createClass({
  displayName: "TextFeature",


  render: function render() {
    // console.info('TextFeature', this.props);

    return React.createElement(
      "div",
      { className: "text-feature" },
      this.props.title,
      " >> ",
      this.props.value
    );
  }

});

module.exports = TextFeature;