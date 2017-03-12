const React = require('react')
import SearchBar from '../components/SearchBar'

const Landing = React.createClass({
  render(){
    return (
      <div>
        <h1 className='main-title'>Food.Rx</h1>
        <SearchBar />
      </div>
    )
  }
})

module.exports = Landing
