const React = require('react')

const MenuItem = React.createClass({
  getInitialState(){
    return {
      data: this.props.data,
      edit: false,
      property: '',
      currentEl: '',
      newVal: ''
    }
  },
  handleClick(k, e){
    this.setState({ edit: !this.state.edit})
    this.setState({ property: k})
    e.currentTarget.style.backgroundColor = 'whitesmoke'
    this.setState({ currentEl: e.currentTarget})
  },
  handleValChange(e){
    this.setState({ newVal: e.target.value})
  },
  handleSubmit(){
    var { property, newVal } = this.state
    var data = Object.assign({}, this.props.data, {[property]: newVal})
    this.state.currentEl.style.backgroundColor = 'white'
    this.setState({ data, newVal: '', currentEl: '', property: '', edit: false})
    this.props.updateData(data)
  },
  render(){
    var { handleRemove } = this.props
    var { data, edit, newVal } = this.state

    var info = Object.keys(data).map((k, i) => {
      return <td onClick={(e)=> this.handleClick(k, e)} key={i}>{data[k]}</td>
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
            <td colSpan='4'>
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