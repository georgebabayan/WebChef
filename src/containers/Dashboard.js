const React = require('react')
const MenuContainer = require('./MenuContainer')
import RestaurantDetailsForm from '../components/RestaurantDetailsForm'
import $ from 'jquery'

const Dashboard = React.createClass({
  getInitialState(){
    return {
      database: []
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
        this.setState({database: restaurant[0].info})
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
  handleInfoChange(info) {
    var database = Object.assign({}, this.state.database, info)
    this.setState({ database})
    console.log(this.state.database)
  },
  render(){
    var { database } = this.state

    return (
      <div>
        <MenuContainer handleMenuChange={this.handleMenuChange} menu={database.menu} />
        <RestaurantDetailsForm info={database} handleInfoChange={this.handleInfoChange} />
      </div>
    )
  }
})

module.exports = Dashboard
