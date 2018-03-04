import React from 'react'
import ReactDOM from 'react-dom'

class RaisedButton extends React.Component {
  handleClick = (e) => {
    var parent = ReactDOM.findDOMNode(this)
    var ripple = ReactDOM.findDOMNode(this.ripple)
    parent.classList.remove('btn-animate')
    var d = Math.max(parent.offsetWidth, parent.offsetHeight)
    var x = e.pageX - parent.offsetLeft - d / 2
    var y = e.pageY - parent.offsetTop - d / 2
    ripple.style.height = d + 'px'
    ripple.style.width = d + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    parent.classList.add('btn-animate')
  }

  render () {
    const { title, type } = this.props
    return (
      <div className={type ? type + ' raised_button' : 'raised_button'} onClick={this.handleClick}>
        {title}
        <div ref={(div) => { this.ripple = div }} className={type && type !== 'light' ? 'ripple light' : 'ripple dark'} />
      </div>
    )
  }
}

export default RaisedButton
