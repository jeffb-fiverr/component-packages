const React = require('react');

import BooleanFeatureRow from './features/BooleanFeatureRow';
import TextFeatureRow from './features/TextFeatureRow';
import InputFeatureRow from './features/InputFeatureRow';

const FeatureRow = React.createClass({

  getFeatureItems: function(features) {

    return features.map((feature, index) => {
      const type = feature.type;

      if (type === 'boolean') {
        return (
          <BooleanFeatureRow
            key={index}
            label={feature.label}
            value={feature.value} />
        );
      } else if (type === 'text') {
        return (
          <TextFeatureRow
            key={index}
            label={feature.label}
            value={feature.value} />
        );
      } else {
        return (
          <InputFeatureRow
            key={index}
            index={index}
            label={feature.label}
            options={feature.options}
            currencySymbol={this.props.currencySymbol}
            setPrice={this.props.setPrice} />
        );
      }
    });
  },

  render: function() {

    const features = this.getFeatureItems(this.props.features);

    return (
      <tr>
        <td className="package-heading">{this.props.features[0].label}</td>
        {features}
      </tr>
    );
  }

});

module.exports = FeatureRow;