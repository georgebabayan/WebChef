const React = require('react')

const Contact = React.createClass({
  render(){
    var { data } = this.props

    var contactInfo = ['phone', 'email', 'facebook', 'twitter'].map((contact) => {
      return (
        <tr key={contact}>
          <td>{contact}:</td>
          {data[contact].indexOf('@') > -1 &&
            <td><a href={data[contact]} target='_blank'>{data[contact]}</a></td>
          }
          {data[contact].indexOf('@') < 0 &&
            <td>{data[contact]}</td>
          }
        </tr>
      )
    })

    return (
      <div>
        <h2>Contact</h2>
        <table className='table table-condensed'>
          <tbody>
            {contactInfo}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Contact