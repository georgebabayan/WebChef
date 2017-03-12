const React = require('react')

var pics = [
  'https://resizer.otstatic.com/v2/photos/large/23365892.jpg',
  'https://ot-foodspotting-production.s3.amazonaws.com/reviews/5306972/thumb_600.jpg',
  'https://ot-foodspotting-production.s3.amazonaws.com/reviews/5306975/thumb_600.jpg',
  'https://ot-foodspotting-production.s3.amazonaws.com/reviews/5306973/thumb_600.jpg',
  'https://ot-foodspotting-production.s3.amazonaws.com/reviews/5306971/thumb_600.jpg',
  'https://ot-foodspotting-production.s3.amazonaws.com/reviews/5306969/thumb_600.jpg'
]

const Images = React.createClass({
  getInitialState(){
    return {
      show: 'hideImages'
    }
  },
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  },
  handleScroll(){
    var div = document.getElementById('imagesScrollDiv')
    div = div.getBoundingClientRect().top
    if ( window.scrollY > 900 ){
      this.setState({ show: 'showImages' })
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  render(){
    var { show } = this.state

    var images = pics.map((p) => <img key={p} src={p}/>)

    return (
      <div id='imagesScrollDiv' className={show}>
        {images}
      </div>
    )
  }
})

module.exports = Images