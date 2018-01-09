import React, { Component } from "react";
import "./HeaderProfile.css";
import { connect } from 'react-redux'
import * as actions from '../../action'
import { server } from '../../../services/Config'
class HeaderProfile extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       dropdownToggle: false,
       wrapperDropdown: null,
       wrapperLogout: null
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClose);
    document.addEventListener("mousedown", this.handleLogout);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClose);
    document.removeEventListener("mousedown", this.handleLogout);
  }
  
  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextState.dropdownToggle !== this.state.dropdownToggled || nextProps.login !== this.props.login) {
      return true
    } else {
      return false
    }
  }
  
  render() {
    const { dropdownToggle } = this.state
    const { firstname, lastname, userId } = this.props.login;
    let name = `คุณ ${firstname} ${lastname}`
    let avatar = userId ? `${server}/image/${userId}.png` : "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-256.png"
    return (
      <div className="header-profile">
      <img
        className="avatar"
        src={ avatar? avatar: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-256.png" }
        alt="avatar"
      />
      <p>{firstname ? name : "คุณ ไข่เจียว ทองหยอด"}</p>
      {/* dropdown */}
      <div className='dropdown is-right'>
        <div className="dropdown-trigger">
          <button ref={this.setWarpDropdown} aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.setState(prevState => ({dropdownToggle: !prevState.dropdownToggle}))} >
            <img
              className="dropdown-blue"
              src={this.props.path === '/' || this.props.path === '/createConference' ? require("../../../assets/icon/dropdown_arrow_blue.png") : require('../../../assets/icon/dropdown_arrow_write.png')}
              alt="dropdown"
            />
          </button>
          <div
        className={ dropdownToggle? "dropdown-menu active-dropdown" : 'dropdown-menu' }
        id="dropdown-menu"
        role="menu"
      >
        <div className="dropdown-content">
          <a ref={this.setWarpLogout} className="dropdown-item">
            ออกจากระบบ
          </a>
        </div>
      </div>
        </div>
      </div>
    </div>
    )
  }

  handleClose = (event) => {
    if (this.state.wrapperDropdown && !this.state.wrapperDropdown.contains(event.target)) {
      this.setState({ dropdownToggle : false })
    }
    
  }

  setWarpDropdown = (node) => {
    this.setState({wrapperDropdown: node})
  }

  setWarpLogout = node => {
    this.setState({wrapperLogout: node})
  }

  handleLogout = async (event) => {
    try {
      if (this.state.wrapperLogout && this.state.wrapperLogout.contains(event.target)) {
        this.props.logout()
        window.location.reload()
      } 
    } catch (err) {
      
    }

  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  path: state.path
})

const mapDispatchToProps = dispath => ({
  logout: () => dispath(actions.setLoginSuccess(false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfile)
