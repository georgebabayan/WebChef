const React = require('react')

const MenuItem = React.createClass({
  getInitialState(){
    return {
      data: this.props.data,
      edit: false,
      property: '',
      newVal: ''
    }
  },
  handleClick(k){
    this.setState({ edit: !this.state.edit})
    this.setState({ property: k})
  },
  handleValChange(e){
    this.setState({ newVal: e.target.value})
  },
  handleSubmit(){
    var { property, newVal } = this.state
    var data = Object.assign({}, this.props.data, {[property]: newVal})
    this.setState({ data, newVal: '', property: '', edit: false})
    this.props.updateData(data)
  },
  render(){
    var { handleRemove } = this.props
    var { data, edit, newVal } = this.state

    var info = Object.keys(data).map((k, i) => {
      return <td onClick={()=> this.handleClick(k)} key={i}>{data[k]}</td>
    })
    return (
      <tbody>
        <tr>
          {info}
          <td>
          <button onClick={() => handleRemove(data)}>Remove Item</button>
          </td>
        </tr>
        {edit &&
          <tr>
            <td>
              <input type='text' value={newVal} onChange={(e) => this.handleValChange(e)} />
              <button onClick={this.handleSubmit}>Update</button>
            </td>
          </tr>
        }
      </tbody>
    )
  }
})

module.exports = MenuItem