import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Registration extends Component {
  render() {
    return (
      <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-4">
            <h1 className="title">
              Register an Account
            </h1>
            <div className="box">
              <label className="label">Name</label>
              <p className="control">
                <input className="input" type="text" placeholder="John Smith"/>
              </p>
              <label className="label">Username</label>
              <p className="control">
                <input className="input" type="text" placeholder="jsmith"/>
              </p>
              <label className="label">Email</label>
              <p className="control">
                <input className="input" type="text" placeholder="jsmith@example.org"/>
              </p>
              <hr/>
              <label className="label">Password</label>
              <p className="control">
                <input className="input" type="password" placeholder="●●●●●●●"/>
              </p>
              <label className="label">Confirm Password</label>
              <p className="control">
                <input className="input" type="password" placeholder="●●●●●●●"/>
              </p>
              <hr/>
              <p className="control">
                <button className="button is-primary">Register</button>
                <button className="button is-default">Cancel</button>
              </p>
            </div>
            <p className="has-text-centered">
              <Link to='/login'>Login</Link>
            </p>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default Registration;
