import React, { Component } from 'react'

export class LoginUI extends Component {
    render() {
        return (
    <div className="login-wrapper">
      <form onSubmit={this.props.handleSubmit}>
        <div id="myModal">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Member Login</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                    onChange={(e) => this.props.setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                    onChange={(e) => this.props.setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block login-btn"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    
        )
    }
}

export default LoginUI
