import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin() {
    const { dispatch } = this.props;
    dispatch(actions.startLogin());
  }
  render() {
    return (
      <div className="chat-app-container">
        <button className="button login-button" onClick={this.onLogin}>Login with GitHub</button>
      </div>
    );
  }
};


export default Redux.connect()(Login);
