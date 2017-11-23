import React, { Component } from 'react';
import logo from '../images/logo.png';

class Footer extends Component {
  render() {
    const style = {
      backgroundColor : '#97ca73',
      height: '10px !important',
      fontSize: '3em',
        padding: '0'
    };
      const logoStyle = {height: '100px'
      };
    return (
      <footer className="footer" style={style}>
        <div className="container">
          <div className="content has-text-centered">
              <img src={logo} alt="Description" style = {logoStyle}/>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
