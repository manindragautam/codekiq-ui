import React from 'react'

class Code extends React.Component {
  copyText (e) {
    console.log(e.target.parentNode.childNodes)
    var textField = document.createElement('textarea')
    textField.innerText = e.target.parentNode.childNodes[1].innerText
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  render () {
    const {children, copyText} = this.props
    return (
      <div>
        <div className='code_screen'>
          {copyText && <span className='clipboard' onClick={this.copyText}>Copy</span>}
          <pre>{children}</pre>
        </div>
      </div>
    )
  }
}

export default Code
