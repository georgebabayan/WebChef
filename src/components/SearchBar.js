import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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
      <div id="search-bar">
        <p>Enter your restaurant's name</p>
        <Select
          onChange={this.onChange}
          placeholder="Restaurant"
          options={this.state.options}
          simpleValue
          value={this.state.value}
          />
      </div>
    );
  }
});

export default SearchBar;
