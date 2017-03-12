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

  render(){

    var images = pics.map((p) => <img key={p} src={p}/>)

    return (
      <div id='imagesScrollDiv'>
        {images}
      </div>
    )
  }
})

module.exports = Images