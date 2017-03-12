import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Link } from 'react-router'

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
        <div id='search-bar-text'>
          <p>Enter your restaurant's name</p>
        </div>
        <Select
          onChange={this.onChange}
          placeholder="Restaurant"
          options={this.state.options}
          simpleValue
          value={this.state.value}
          />
          <Link to='/'>
            <button className='btn btn-primary'>Go</button>
          </Link>
      </div>
    );
  }
});

export default SearchBar;
