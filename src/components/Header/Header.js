import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import HeaderProfile from './HeaderProfile/HeaderProfile'
import './Header.css'

class Header extends Component {

  render() {
    const { path } = this.props
    return (
      <nav className='navbar' id='header'>
      <div className='container'>
        <div className='navbar-brand' onClick={() => path === '/'? window.location.reload() : true} >
          <Link to='/' ><img src={ path === '/' || path === '/createConference'? require('../../assets/image/logo2.png') : require('../../assets/image/logo_home.png')} alt='logo'/></Link>
        </div>
        <div className='navbar-menu' >
          <div className='navbar-end'>
            <HeaderProfile/>
          </div>
        </div>
      </div>
    </nav>
    )
  }

}

const mapStateToProps = (state) => ({
  path: state.path
})

export default connect(mapStateToProps)(Header)
