const React = require('react')
const MenuContainer = require('./MenuContainer')
import RestaurantDetailsForm from '../components/RestaurantDetailsForm'
import { Link } from 'react-router'
import $ from 'jquery'

const Dashboard = React.createClass({
  getInitialState(){
    return {
      rid: "",
      database: [],
      success: false
    }
  },
  componentWillMount() {
    $.ajax({
      url: 'https://0kh51eeh8l.execute-api.us-east-1.amazonaws.com/dev/opentable/list',
      dataType: 'json',
      success: function(data) {
        var id = this.props.params.id
        var restaurant = data.filter(function(obj) {
          return obj.rid == id
        });
        this.setState({database: restaurant[0].info, rid: restaurant[0].rid})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    });
  },
  handleMenuChange(menu){
    var database = Object.assign({}, this.state.database, {menu: menu})
    this.setState({ database })
  },
  handleInfoChange(e, info) {
    e.preventDefault();
    var rid = this.state.rid.toString();
    var database = Object.assign({}, this.state.database, info);
    this.setState({ database});
    var mod_data = this.state.database;
    var jsondata = JSON.stringify({rid: rid, mod_data: mod_data})
    console.log(jsondata)
    $.ajax({
      url: 'https://x9b0njmkxe.execute-api.us-east-1.amazonaws.com/dev/restaurants',
      method: 'POST',
      contentType: 'application/json',
      data: jsondata,
      success: function(data) {
        console.log('sent data to server');
      },
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
        this.setState({success: true})
      }.bind(this)
    })
  },
  render(){
    var { database } = this.state

    return (
      <div id="dashboard">
        <MenuContainer handleMenuChange={this.handleMenuChange} menu={database.menu} />
        <RestaurantDetailsForm info={database} handleInfoChange={this.handleInfoChange} />
        {this.state.success &&
          <div id="success">
            <p>Successfully submitted!</p>
            <Link to = {'/restaurant/' + this.state.rid}>View page</Link>
          </div>
        }
      </div>
    )
  }
})

module.exports = Dashboard
