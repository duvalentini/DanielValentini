import React, { Component, Link } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { styles } from './styles/hamburger';

class Header extends Component {
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

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        styles={styles}
      >
        <a id="education" className="menu-item" href="/#education" onClick={() => {this.closeMenu()}}>Education</a>
      </Menu>
    );
  }
}

export default Header;
