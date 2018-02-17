import React from 'react'

class CardRect extends React.Component {
  render () {
    const props = this.props
    return (
      <div className='card_rect' style={props.style}>
        {props.image && props.content && <div className='wrapper'>
          <div className='card_media'>
            <img className='responsive' src={props.image} alt={props.image_alt} />
          </div>
          <div className='card_content'>
            <div>{props.content}</div>
          </div>
        </div>}
        {!props.image && props.content && <div className='card_content_only'>
          <div>{props.content}</div>
        </div>}
      </div>
    )
  }
}

export default CardRect
