import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const style = {
      backgroundColor : '#97ca73',
        height: '10px !important'
    };
    return (
      <footer className="footer" style={style}>
        <div className="container">
          <div className="content has-text-centered">
            <b><i>Feed Me</i></b>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
