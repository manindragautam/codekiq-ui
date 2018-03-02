import React from 'react'

class Table extends React.Component {
  render () {
    const {header, body, responsive} = this.props
    return (
      <div className={responsive ? 'table_responsive' : null}>
        <table className='table' style={{width: '100%'}}>
          <thead>
            <tr>
              {header && header.map((x, i) =>
                <th key={i}>{x}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {body && body.map((x, i) =>
              <tr key={i}>
                {x.map((c, j) =>
                  <td key={j}>{c}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
