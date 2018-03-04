import React from 'react'

class Code extends React.Component {
  copyCode = (e) => {
    var textField = document.createElement('textarea')
    textField.innerText = e.target.parentNode.childNodes[1].innerText
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  render () {
    const {children, copyCode, containerStyle, codeStyle} = this.props
    const boxStyle = {backgroundColor: '#151515'}
    if (containerStyle) {
      Object.assign(boxStyle, containerStyle)
    }
    const preStyle = {color: '#9CD9F0'}
    if (codeStyle) {
      Object.assign(preStyle, codeStyle)
    }
    return (
      <div>
        <div className='code_screen' style={boxStyle}>
          {copyCode && <span className='clipboard' onClick={this.copyCode}>Copy</span>}
          <pre style={preStyle}>{children}</pre>
        </div>
      </div>
    )
  }
}

export default Code
