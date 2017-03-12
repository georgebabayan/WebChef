const React = require('react')

const Menu = React.createClass({
  getInitialState(){
    return {
      show: 'hideDiv'
    }
  },
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  },
  handleScroll(){
    var div = document.getElementById('menuContainerDiv')
    div = div.getBoundingClientRect().top
    if ( window.scrollY > 350){
      this.setState({ show: 'showDiv' })
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  render(){
  var { data } = this.props
  var { show } = this.state

  var menuItems = data.menu.map((item) => {
    return (
      <div className='menuItemDiv' key={item.name}>
        <h3>{item.name}</h3>
        <hr />
        <p>{item.description}</p>
        <p className='item-price'>{item.price}</p>
      </div>
    )
  })

    return (
      <div id='menuContainerDiv' className={show}>
        <ul>
          {menuItems}
        </ul>
        <p id='cf'></p>
      </div>
    )
  }
})

module.exports = Menu