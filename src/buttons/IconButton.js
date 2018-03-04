import React from 'react'

export default class IconButton extends React.Component {
  render () {
    const props = this.props
    return (
      <div className='icon_button ripple default' style={props.style}>{props.icon}</div>
    )
  }
}
