import React, { Component } from 'react';
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
        <a id="me" className="menu-item" href="/#me" onClick={() => {this.closeMenu()}}>Me</a>
        <a id="education" className="menu-item" href="/#education" onClick={() => {this.closeMenu()}}>Education</a>
        {/*<a id="chefd" className="menu-item" href="/#chefd" onClick={() => {this.closeMenu()}}>Chef D</a>*/}
      </Menu>
    );
  }
}

export default Header;
