import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

class FabButton extends React.Component {
  state = {
    buttonClass: 'radial'
  }

  handleClick = () => {
    this.state.buttonClass === 'radial' ? this.setState({buttonClass: 'radial open'}) : this.setState({buttonClass: 'radial'})
  }

  render () {
    return (
      <div className={this.state.buttonClass} onClick={this.handleClick} style={props.style}>
        <button id="fa-1"><FontAwesomeIcon icon={faPaperPlane} size='3x' /></button>
        <button id="fa-2"><FontAwesomeIcon icon={faHome} size='3x' /></button>
        <button id="fa-3"><FontAwesomeIcon icon={faSearch} size='3x' /></button>
        <button className="fab">
          <div id="plus"><FontAwesomeIcon icon={faPlus} size='3x' /></div>
        </button>
      </div>
    )
  }
}

export default FabButton
