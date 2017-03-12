const React = require('react')
const ReactDOM = require('react-dom')
import SearchBar from './components/SearchBar'

const App = React.createClass({
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
