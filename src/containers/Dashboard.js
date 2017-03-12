const React = require('react')
const MenuContainer = require('./MenuContainer')

var database = 
{
  name: 'mcDonalds',
  address: '12 1st st',
  address2: 'san francisco CA',
  phone: '617-365-1234',
  price: '1',
  menu: [
    {
      name: 'steak',
      description: 'its steak',
      price: '$25'
    },
    {
      name: 'eggs',
      description: 'its some eggs',
      price: '$4'
    },
    {
      name: 'salad',
      description: 'eww',
      price: 'free'
    }
  ]
}

const Dashboard = React.createClass({
  getInitialState(){
    return {
      database: database
    }
  },
  handleMenuChange(menu){
    var database = Object.assign({}, this.state.database, {menu: menu})
    this.setState({ database })
  },
  render(){
    var { database } = this.state

    return (
      <div>
        <MenuContainer handleMenuChange={this.handleMenuChange} menu={database.menu} />
      </div>
    )
  }
})

module.exports = Dashboard