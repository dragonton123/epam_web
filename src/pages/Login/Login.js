import React, { Component } from 'react'
import LoginForm from '../../components/Login/Login'
import { connect } from 'react-redux'
import './Login.css'

class Login extends Component {

  componentWillMount = () => {
    if(this.props.login.success)
      this.props.router.push('/')
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextProps.login !== this.props.login) {
      return true
    } else {
      return false
    }
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    if(this.props.login.success)
      this.props.router.push('/')
    if(this.props.login.failure)
      alert('รหัสผู้ใช้ผิดพลาด ไม่สามารถเชื่อมต่อกับเซิฟเวอร์ได้')
  }

  render() {
    return (
      <div className='login-page-container'>
          <div className='left'>
          </div>
          <div className='right'>
            <LoginForm />
          </div>
        
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  login: state.login,
})

export default connect(mapStateToProps)(Login)
