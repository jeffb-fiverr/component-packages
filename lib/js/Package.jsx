import React from 'react';
import BooleanFeature from './features/BooleanFeature';
import InputFeature from './features/InputFeature';
import TextFeature from './features/TextFeature';

const Package = React.createClass({
  getInitialState: function() {
    return this.props;
  },
  getFeature: function(feature, key) {
    const type = feature.type;

    if (type === 'boolean') {
      return (
        <BooleanFeature
          key={key}
          title={feature.title}
          value={feature.value} />
      );
    } else if (type === 'text') {
      return (
        <TextFeature
          key={key}
          title={feature.title}
          value={feature.value} />
      );
    } else {
      return (
        <InputFeature
          key={key}
          title={feature.title}
          options={feature.options}
          setPrice={this.setPrice} />
      );
    }
  },
  setPrice: function(addition) {
    this.setState({ 'price' : (parseInt(this.props.price) + addition) });
  },
  render: function() {

    const features = this.props.features.map((feature, index) => {

      return this.getFeature(feature, index);

    });

    return (
      <div>
        <h2>{this.props.title} {this.props.currencySymbol}{this.state.price}</h2>
        <h4>{this.props.description.descriptionTitle}</h4>
        <p>{this.props.description.descriptionText}</p>

        <div className="feature-list">
          {features}
        </div>

        <button>{this.props.selectButtonText} {this.props.currencySymbol}{this.state.price}</button>
      </div>
    );
  }
});

export default Package;