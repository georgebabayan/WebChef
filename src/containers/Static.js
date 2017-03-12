const React = require('react')
const $ = require('jquery')

var data = { 
  "rid": 2,
  "label": "Thirsty Bear",
  "value": "thirsty bear",
  menu: [
    {
      name: 'steak',
      description: 'its steak',
      price: '$25'
    },
    {
      name: 'eggs',
      description: 'its some eggs',
      price: '$4'
    },
    {
      name: 'salad',
      description: 'eww',
      price: 'free'
    }
  ]
}

const Static = React.createClass({
  render(){

  var menuItems = data.menu.map((item) => {
    return <p key={item.name}>{item.price} {item.name}: {item.description}</p>
  })

    return (
      <div id='staticPage'>
        <h1>{data.label}</h1>
        <h2>Menu</h2>
        <ul>
          {menuItems}
        </ul>
      </div>
    )
  }
})

module.exports = Static