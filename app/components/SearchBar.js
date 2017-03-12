import React from 'react';
import Select from 'react-select';

var SearchBar = React.createClass({
  displayName: 'Search Bar',
  propTypes: {
    label: React.PropTypes.string
  },
  getInitialState () {
    return {
      options: [
        { value: 'mcdonalds', label: 'McDonalds' },
        { value: 'burger king', label: 'Burger King' },
        { value: "bob's burgers", label: "Bob's Burgers" },
      ],
      value: null
    };
  },
  onChange(value) {
    this.setState({ value });
    console.log('Select value changed to', value);
  },
  render () {
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select
          onChange={this.onChange}
          options={this.state.options}
          simpleValue
          value={this.state.value}
          />
        <div>Enter your restaurant's name</div>
      </div>
    );
  }
});

export default SearchBar;
