import React from 'react'

class CardNote extends React.Component {
  render () {
    console.log(this.props)
    const props = this.props
    return (
      <div>
        {props && <div className='card_note' style={props.style}>
          <div className='text_wrapper'>
            <div className='text_position'>
              {props.note}
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default CardNote
