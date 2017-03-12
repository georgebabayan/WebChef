const React = require('react')
const ReactDOM = require('react-dom')
import $ from 'jquery'

const SearchBar = React.createClass({
  getInitialState() {
    return {input: "", data: [{"rid":2,"name":"Thirsty Bear","address":"661 Howard St.","address2":"","city":"San Francisco","state":"CA","country":"US","latitude":"37.7856500","longitude":"-122.3997340","postal_code":"94105","phone_number":"4159740905","metro_name":"San Francisco Bay Area","reservation_url":"http://www.opentable.com/restaurant/profile/2","profile_url":"http://www.opentable.com/restaurant/profile/2","is_restaurant_in_group":false},{"rid":4,"name":"One Market Restaurant","address":"1 Market Street","address2":"","city":"San Francisco","state":"CA","country":"US","latitude":"37.7938190","longitude":"-122.3950890","postal_code":"94105","phone_number":"4157775577x","metro_name":"San Francisco Bay Area","reservation_url":"http://www.opentable.com/restaurant/profile/4","profile_url":"http://www.opentable.com/restaurant/profile/4","is_restaurant_in_group":false},{"rid":10,"name":"Harris'","address":"2100 Van Ness Avenue","address2":"","city":"San Francisco","state":"CA","country":"US","latitude":"37.7950860","longitude":"-122.4228740","postal_code":"94109","phone_number":"4156731888x","metro_name":"San Francisco Bay Area","reservation_url":"http://www.opentable.com/restaurant/profile/10","profile_url":"http://www.opentable.com/restaurant/profile/10","is_restaurant_in_group":false}]}
  },
  // componentWillMount() {
  //   $.ajax({
  //     url: 'https://platform.otqa.com/availability/334879?start_date_time=2017-03-29T18%3A00&party_size=2&forward_minutes=120&backward_minutes=30',
  //     contentType: 'application/json',
  //     beforeSend: function(xhr) {
  //       xhr.setRequestHeader('Authorization', 'Basic' + '27037c67-f394-4cfd-ab51-069ac71132fb')
  //     },
  //     success: function(data) {
  //       this.setState({data: data})
  //     },
  //     error: function(xhr, status, err) {
  //       console.error(this, status, err.toString())
  //     }
  //   })
  // },
  handleChange() {

  },
  render() {
    return (
      <div>
        <p>Search bar {JSON.stringify(this.state.data)}</p>
      </div>
      )
  }
});

export default SearchBar;
