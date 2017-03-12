const React = require('react')
const MenuItem = require('../components/MenuItem')

const MenuContainer = React.createClass({
  getInitialState(){
    return {
      menu: this.props.menu
    }
  },
  handleRemove(item){
    var index = this.state.menu.indexOf(item)
    var menu = Object.assign([], this.state.menu)
    menu.splice(index, 1)
    this.setState({ menu })
    this.props.handleMenuChange(menu)
  },
  updateData(data){
    var index = this.state.menu.indexOf(data)
    var menu = Object.assign([], this.state.menu)
    menu[index] = data
    this.props.handleMenuChange(menu)
  },
  render(){
    var { menu } = this.state

    var menuItems = menu.map((item) => {
      return <MenuItem key={item.name} data={item} updateData={this.updateData} handleRemove={this.handleRemove} />
    })

    return (
      <div>
        <h1>Update your menu</h1>
        <table>
          {menuItems}
        </table>
      </div>
    )
  }
})

module.exports = MenuContainer