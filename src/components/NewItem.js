const React = require('react')

const NewItem = React.createClass({
  getInitialState(){
    return {
      name: '',
      description: '',
      price: ''
    }
  },
  handleChange(e, prop){
    this.setState({ [prop]: e.target.value })
  },
  sendVals(){
    var { name, description, price } = this.state
    return { name, description, price }
  },
  render(){
    var { handleNewItemSubmit } = this.props

    var fields = ['name', 'description', 'price'].map((prop) => {
      return <label key={prop}>{prop}
              <input onChange={(e) => this.handleChange(e, prop)} type='text' name={prop} />
              <br /></label>
    })
    return (
      <form onSubmit={(e) => handleNewItemSubmit(e, this.sendVals())}>
        {fields}
        <input type='submit' value='Add Item' />
      </form>
    )
  }
})

module.exports = NewItem
