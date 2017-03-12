const React = require('react')
const ReactDOM = require('react-dom')
const { Route, Router, IndexRoute, hashHistory } = require('react-router')
const Layout = require('./containers/Layout')
const Landing = require('./containers/Landing')
const Dashboard = require('./containers/Dashboard')
const Static = require('./containers/Static')
import './styles.css'
import './static.css'
require('dotenv').config()

const App = React.createClass({
  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Landing} />
          <Route path='/restaurant/:id' component={Static} />
          <Route path='/dashboard/:id' component={Dashboard} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
