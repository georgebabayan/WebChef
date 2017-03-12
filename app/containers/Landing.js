const React = require('react')
const Dashboard = require('./Dashboard')
import SearchBar from '../components/SearchBar'
import 'react-select/dist/react-select.css';

const Landing = React.createClass({
  render(){
    return (
      <div>
        <Dashboard />
        <h1 className='main-title'>Food.Rx</h1>
        <SearchBar />
      </div>
    )
  }
})

module.exports = Landing
