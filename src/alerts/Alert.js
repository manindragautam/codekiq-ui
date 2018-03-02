import React from 'react'

class Alert extends React.Component {
  render () {
    const {children, action, handleClose, type} = this.props
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className={'alert ' + type}>
          {children}
          {action && <span className='alert_close' onClick={handleClose}>&#9932;</span>}
        </div>
      </div>
    )
  }
}

export default Alert
