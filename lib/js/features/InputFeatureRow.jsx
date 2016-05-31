import React from 'react';

const InputFeatureRow = React.createClass({

  radioChanged: function(e) {
    const packageChangedIndex = this.props.index,
          packagePriceChange = parseInt(e.currentTarget.dataset.val);

    this.props.setPrice(packageChangedIndex, packagePriceChange);
  },

  getAdditionalCharge: function(option) {
    return (
      <span className="additional-charge">
        (+{this.props.currencySymbol}{option.value})
      </span>
    );
  },

  getInput: function(option, index) {

    const additionalCharge = (parseInt(option.value)) ? this.getAdditionalCharge(option) : '';

    return (
      <label key={index} className="fake-radio-green radio-text m-b-10">
        <span className="radio-img"></span>
        <input
          type="radio"
          name={option.name}
          data-val={option.value}
          defaultChecked={option.default}
          onClick={this.radioChanged} />

        {option.text} {additionalCharge}
      </label>
    );
  },

  render: function() {

    const inputs = this.props.options.map((option, index) => {
      return this.getInput(option, index);
    });

    return (
      <td className="input">
        <form action="#!">
          {inputs}
        </form>
      </td>
    );
  }

});

export default InputFeatureRow;