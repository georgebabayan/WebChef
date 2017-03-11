const React = require('react')
const ReactDOM = require('react-dom')

const App = React.createClass({
  render(){
    return (
      <div>here is the app</div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)