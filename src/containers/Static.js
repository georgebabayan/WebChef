const React = require('react')

var data = { 
  "rid": 2,
  "label": "Thirsty Bear",
  "value": "thirsty bear",
  image: 'https://static1.squarespace.com/static/51ab58f4e4b0361e5f3ed294/51ab58f4e4b0361e5f3ed29a/51ab80bee4b0058e26cfcb1f/1370194240299/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung.jpg',
  about: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  phone: '617-365-1234',
  address: '21 1st st',
  email: 'here@there.com',
  facebook: 'ajsipdja@facebook.com',
  twitter: '@bananas',
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
  ],
  styles: {
    color: 'black',
    background: 'whitemoke'
  }
}

const Static = React.createClass({
  render(){
  var menuItems = data.menu.map((item) => {
    return <p key={item.name}>{item.price} {item.name}: {item.description}</p>
  })

    return (
      <div id='staticPage' style={data.styles}>
        <div id='staticLanding' style={{backgroundImage: 'url(' + data.image + ')'}}>
          <div style={{position: 'absolute', height: '100%', width: '100%', background: 'rgba(0,0,0,.4)'}}></div>
          <h1>{data.label}</h1>
        </div>
        
        <h2>Menu</h2>
        <ul>
          {menuItems}
        </ul>

        <h2>About</h2>
        {data.about}



      </div>
    )
  }
})

module.exports = Static