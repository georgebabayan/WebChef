const React = require('react')

const Layout = React.createClass({
  render(){
    return (
      <div>{this.props.children}</div>
    )
  }
})

module.exports = Layout