import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../../components/Search/Search'
import * as actions from '../../components/action'
import AddConferenceBtn from '../../components/AdminAddConference/AdminAddConference'
import CreateConferenceHome from '../../components/CreateConferenceHome/CreateConferenceHome'
import '../Home/Home.css'

class CreateConferencePage extends Component {

  componentWillMount = () => {
    this.props.setBtnSelected(1)
    this.props.setGlobalRouter(this.props.router)
    if (!this.props.login.success) this.props.router.push("/login");
    if (this.props.login.userRole === 'Normal User') {
      this.props.router.push('/')
    }
  };

  render() {
    const { login } = this.props
    return (
      <div className='home-container'>
        <div className="banner">
          <img
            src={ require('../../assets/image/logo_home.png') }
            alt="epam-icon"
          />
          <p>Electronic Provincial Administration Meeting</p>
          {login.userRole === 'Normal User' ? false : <AddConferenceBtn />}
          
        </div>
        <div className="container">
          <div className="content">
            {/* Search */}
            <div className="search-level">
              <div className='search-level-left' >
                <p id='title'>{'สร้างการประชุม' }  </p>
              </div>
              <div className='search-level-right' >
                <Search />
              </div>
            </div>
            <div>
            <CreateConferenceHome />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  login: state.login,
  conferenceSelectedBtn: state.conferenceSelectedBtn,
})

const mapDispatchToProps = dispath => ({
  setGlobalRouter: router => dispath(actions.setRouter(router)),
  setBtnSelected : selected => dispath(actions.setSelectedConferenceBtn(selected))
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateConferencePage)