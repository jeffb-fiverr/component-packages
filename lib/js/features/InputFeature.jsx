import React from 'react';

const InputFeature = React.createClass({

  radioChanged: function(e) {
    this.props.setPrice(parseInt(e.currentTarget.dataset.val));
  },

  getInput: function(option, index) {
    return (
      <label key={index}>
        {option.text}
        <input
          type="radio"
          name={option.name}
          data-val={option.value}
          defaultChecked={option.default}
          onClick={this.radioChanged} />
      </label>
    );
  },

  render: function() {

    // const inputs = this.getInputs(this.props.options);
    const inputs = this.props.options.map((option, index) => {
      return this.getInput(option, index);
    });

    return (
      <form className="input-feature">
        {this.props.title}:
        {inputs}
      </form>
    );
  }

});

export default InputFeature;