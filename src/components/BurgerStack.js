import React, {Component} from 'react';
import { push as Menu } from 'react-burger-menu';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class BurgerStack extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <div id="outer-container">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          width={"100%"}
        >
          <span> <Link to="/" onClick={() => this.closeMenu()}>Home</Link> </span>
          <span> <Link to="/story" onClick={() => this.closeMenu()}>Our Story</Link> </span>
          <span> <Link to="/services" onClick={() => this.closeMenu()}>Our Services</Link> </span>
          <span> <Link to="/contact" onClick={() => this.closeMenu()}>Contact</Link> </span>
          <div class="U">
          <svg viewBox="0 0 29 100">
              <text x="0" y="40" fill="black" opacity="0.05">U</text>
          </svg>
          </div>
        </Menu>
      </div>

    )
  }
}

export default BurgerStack;
