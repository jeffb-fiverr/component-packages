import React from 'react';

const RadioInput = React.createClass({

  getInitialState: function() {
    return { 'checked' : this.props.option.default };
  },

  onChange: function(e) {
    this.props.onChange(e);
    console.info(!this.state.checked);
    this.setState({ 'checked' : !this.state.checked });
  },

  render: function() {
    return (
      <input
        type="radio"
        name={this.props.option.name}
        value={this.props.option.value}
        onChange={this.onChange}
        defaultChecked={this.props.option.default} />
    );
  }

});

module.exports = RadioInput;