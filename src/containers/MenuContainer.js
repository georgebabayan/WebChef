const React = require('react')
const MenuItem = require('../components/MenuItem')
const NewItem = require('../components/NewItem')

const MenuContainer = React.createClass({
  getInitialState(){
    return {
      menu: this.props.menu,
      newItem: false
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
  handleNewButtonClick(){
    this.setState({ newItem: true })
  },
  handleNewItemSubmit(e, vals){
    e.preventDefault()
    var menu = Object.assign([], this.state.menu)
    menu.push(vals)
    this.props.handleMenuChange(menu)
    this.setState({ newItem: false })
  },
  componentWillReceiveProps(p){
    this.setState({ menu: p.menu })
  },
  render(){
    var { menu, newItem } = this.state

    if(menu) {
      var menuItems = menu.map((item) => {
        return <MenuItem key={item.name} data={item} updateData={this.updateData} handleRemove={this.handleRemove} />
      })
    }

    return (
      <div>
        <h2>Update Your Menu</h2>
        <table>
          {menuItems}
        </table>
        {!newItem &&
          <button onClick={this.handleNewButtonClick}>New Item</button>
        }
        {newItem &&
          <NewItem handleNewItemSubmit={this.handleNewItemSubmit}/>
        }
      </div>
    )
  }
})

module.exports = MenuContainer
