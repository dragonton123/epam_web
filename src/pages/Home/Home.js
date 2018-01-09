import React, { Component } from "react";
import { connect } from "react-redux";
import Search from '../../components/Search/Search'
import ConferenceHomeContent from '../../components/ConferenceHomeContent/ConferenceHomeContent'
import * as actions from '../../components/action'
import AddConferenceBtn from '../../components/AdminAddConference/AdminAddConference'
import CreateConferenceHome from '../../components/CreateConferenceHome/CreateConferenceHome'
import "./Home.css";


class Home extends Component {

  componentWillMount = () => {
    this.props.setBtnSelected(0)
    this.props.setGlobalRouter(this.props.router)
    if (!this.props.login.success) this.props.router.push("/login");
  };

  // componentDidMount () {
  //   window.scrollTo(0, 0)
  // }

  render() {
    const { login } = this.props
    return (
      <div className='home-container'>
        <div className="banner">
          <img
            src={require('../../assets/image/logo_home.png')}
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
                <p id='title'>{'การประชุม' }  </p>
              </div>
              <div className='search-level-right' >
                <Search />
              </div>
            </div>
            <div>
             <ConferenceHomeContent />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  globalRouter: state.globalRouter,
  conferenceSelectedBtn: state.conferenceSelectedBtn,
});

const mapDispathToProps = dispath => ({
  setGlobalRouter: router => dispath(actions.setRouter(router)),
  setBtnSelected : selected => dispath(actions.setSelectedConferenceBtn(selected))
})

export default connect(mapStateToProps, mapDispathToProps)(Home);
