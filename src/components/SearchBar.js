import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Link } from 'react-router'
import $ from 'jquery'

var SearchBar = React.createClass({
  displayName: 'Search Bar',
  propTypes: {
    label: React.PropTypes.string
  },
  getInitialState () {
    return {
      options: [],
      value: null
    };
  },
  componentWillMount () {
    $.ajax({
      url: 'https://0kh51eeh8l.execute-api.us-east-1.amazonaws.com/dev/opentable/list',
      dataType: 'json',
      success: function(data) {
        console.log(data)
        this.setState({options: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    });
  },
  onChange(value) {
    this.setState({ value });
    console.log('Select value changed to', value);
  },
  findRestaurantId() {
    if (this.state.options && this.state.value) {
      var val = this.state.value;
      var restaurant = this.state.options.filter(function(obj) {
        return obj.value === val;
      });
      return restaurant[0].rid;
    }
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
          <Link to={'/dashboard/'+this.findRestaurantId()}>
            <button className='btn btn-primary' id='go'>Go</button>
          </Link>
      </div>
    );
  }
});

export default SearchBar;
