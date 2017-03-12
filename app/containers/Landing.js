const React = require('react')
const Dashboard = require('./Dashboard')

const Landing = React.createClass({
  render(){
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
})

module.exports = Landing