import React from 'react'

class Breadcrumb extends React.Component {
  render () {
    const { crumbs, active, activeStyle, crumbStyle, sepColor } = this.props
    const crumbLen = crumbs ? crumbs.length : null
    const crumbCss = crumbStyle || {}
    if (activeStyle) {
      Object.assign(crumbCss, {activeCrumb: activeStyle})
    } else {
      Object.assign(crumbCss, {activeCrumb: {color: 'blue'}})
    }
    const crumbIcon = {color: sepColor || '#000'}
    return (
      <div className='breadcrumb'>
        <ul>
          {crumbs && crumbs.map((crumb, i) =>
            <li key={i} style={crumbCss} className='crumb'>
              <span className='crumb_item' style={active && active === crumb ? crumbCss.activeCrumb : null}>
                {crumb}
              </span>
              {i + 1 !== crumbLen ? <span style={crumbIcon}>{'>'}</span> : ''}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Breadcrumb
