import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import * as actions from '../components/action'
import './App.css';

class App extends Component {
  
  componentWillMount = () => {
    this.props.setPath(this.props.location.pathname)

  }
  

  componentWillUpdate = (nextProps, nextState) => {
    if(nextProps.location.pathname !== this.props.location.pathname) {
      this.props.setPath(nextProps.location.pathname)
      
      if(nextProps.location.pathname !== '/conference') {
        this.props.setCurrentConference(-1)
        this.props.setConferenceTitle('หัวข้อการประชุม')
        this.props.setConferenceDetail('แจ้งการจัดประชุมเตรียมรับมือน้ำท่วม โครงการศึกษาความเหมาะสมและผลการะทบสิ่งแวดล้อม...')
      } 
    }

  }
  
  render() {
    const { pathname } = this.props.location
    return (
      <div className="App">
        { pathname === '/login' ? null:  <Header /> }
        {this.props.children}
        { pathname === '/login' ? null: <Footer /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  path: state.path,
  currentConference: state.currentConference

})

const mapDispatchToProps = dispatch => ({
  setPath: path => dispatch(actions.setCurrentPath(path)),
  setCurrentConference: cfId => dispatch(actions.setCurrentConference(cfId)),
  setConferenceTitle: cfTitle => dispatch(actions.setConferenceTitle(cfTitle)),
  setConferenceDetail: cfDetail => dispatch(actions.setConferenceDetail(cfDetail))
  
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
