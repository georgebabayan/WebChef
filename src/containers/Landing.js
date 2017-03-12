const React = require('react')
import SearchBar from '../components/SearchBar'

const Landing = React.createClass({
  render(){
    return (
      <div id='landing'>
        <div id='landing-content'>
          <h1 className='main-title'>WebChef</h1>
          <SearchBar />
        </div>
      </div>
    )
  }
})

module.exports = Landing
