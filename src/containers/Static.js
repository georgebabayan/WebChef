const React = require('react')
const Contact = require('../components/Contact')
const Images = require('../components/Images')
const RestaurantMap = require('../components/RestaurantMap')
const Menu = require('../components/Menu')
const $ = require('jquery')


const Static = React.createClass({
  getInitialState(){
    return {
      data: {}
    }
  },
  componentDidMount(){
    var rid = this.props.params.id
    $.ajax({
      url: 'https://x9b0njmkxe.execute-api.us-east-1.amazonaws.com/dev/restaurants/' + rid.toString()
    })
    .done((d) => {
      console.log('worked', d)
      this.handleData(d.mod_data)
    })
    .fail((f) => {
      console.log('failed', f)
    })
  },
  handleData(data){
    this.setState({ data })
  },
  render(){

    var { data } = this.state

    return (
      <div id='staticPage' style={data.styles}>
        <div id='staticLanding' style={{backgroundImage: 'url(' + 'https://static1.squarespace.com/static/51ab58f4e4b0361e5f3ed294/51ab58f4e4b0361e5f3ed29a/51ab80bee4b0058e26cfcb1f/1370194240299/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung.jpg' + ')'}}>
          <div style={{position: 'absolute', height: '100%', width: '100%', background: 'rgba(0,0,0,.4)'}}></div>
          <h1>{data.name}</h1>
        </div>

        <h2>Our Menu</h2>
        <Menu data={data} />
        
        <Images />

        <h2>About</h2>
        <p>{data.about}</p>

        <RestaurantMap data={data}/>

        <Contact data={data} />


      </div>
    )
  }
})

module.exports = Static