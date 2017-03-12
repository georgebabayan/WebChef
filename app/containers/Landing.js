const React = require('react')
import SearchBar from '../components/SearchBar'
import 'react-select/dist/react-select.css';

const Landing = React.createClass({
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
})

module.exports = Landing
