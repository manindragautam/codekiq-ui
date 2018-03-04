import React from 'react'

class Divider extends React.Component {
  render () {
    const { borderWidth, borderStyle, borderColor } = this.props
    const style = {
      borderTopWidth: borderWidth || 1,
      borderTopStyle: borderStyle || 'solid',
      borderTopColor: borderColor || '#eee'
    }
    return (
      <div className='divider_container'>
        <hr style={style} className='divider' />
      </div>
    )
  }
}

export default Divider
