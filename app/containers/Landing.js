const React = require('react')
const Dashboard = require('./Dashboard')
import SearchBar from '../components/SearchBar'
import 'react-select/dist/react-select.css';

const Landing = React.createClass({
  render(){
    return (
      <div>
        <Dashboard />
        <SearchBar />
      </div>
    )
  }
})

module.exports = Landing
