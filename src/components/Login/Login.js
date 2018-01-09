import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../action'
import './Login.css'
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='container-login'>
        <div className='logo-container'>
          <img src={require('../../assets/image/logo_login.png')} alt='etam'/>
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input login"
              type="text"
              name="username"
              placeholder="ชื่อผู้ใช้"
              onChange={(e) => this.setState({username: e.target.value})}
            />
            <span className='icon is-small is-left'><img src={require('../../assets/icon/username.png')} alt='login-icon' className='login-icon'/></span>
          </div>
        </div>
        <div className="field"id='password'>
          <div className="control has-icons-left" >
            <input
              className="input login"
              type="password"
              name="password"
              placeholder="รหัสผ่าน"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <span className='icon is-small is-left'><img src={require('../../assets/icon/password.png')} className='login-icon' alt='login-icon'/></span>
          </div>
        </div>
        <div className='btn_container'>
          <button className='button login' type="submit" onClick={this._handleSubmit} >เข้าสู่ระบบ</button>
        </div>
      </div>
    );
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextState.username !== this.state.username) {
      return true
    } else if(nextState.password !== this.state.password) {
      return true
    } else {
      return false
    }
  }
  
  _handleSubmit = () => {
    let { username, password } = this.state
    if (username && password) {
      this.props.loginSuccess(username, password)
    } else {
      alert('please enter Username and Password')
    }
  }

}

const mapStateToProps = (state) => ({
  loginState: state.login
})

const mapDispathToProps = dispath => ({
  loginSuccess: (username, password) => dispath(actions.loginSuccess(username, password)),
})

export default connect(mapStateToProps, mapDispathToProps)(LoginForm)