import React from 'react'

class Badge extends React.Component {
  render () {
    const { children, badgeContent, bgColor, display, badgeStyle, contentStyle } = this.props
    const style = {display: display || 'inline'}
    if (badgeStyle) {
      Object.assign(style, badgeStyle)
    }
    const contentCss = {}
    if (contentStyle) {
      Object.assign(contentCss, contentStyle)
    }
    return (
      <div className='badge' style={style}>
        {children}
        <span style={contentCss} className={bgColor ? 'badge_content ' + bgColor : 'badge_content primary'}>{badgeContent}</span>
      </div>
    )
  }
}

export default Badge
