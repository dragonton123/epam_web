import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../action";
import "./AdminAddConference.css";

class AdminAddConference extends Component {
  render() {
    const { conferenceSelectedBtn } = this.props
    return (
      <div className="add-conference-wrapper">
        <div className="add-conference-btn">
          <button
            className={ conferenceSelectedBtn === 0? "conference-btn selected" : 'conference-btn' }
            onClick={ this.handleConference }
          >
            การประชุม
          </button>
        </div>
        <div className="add-conference-btn">
          <button 
            className={ conferenceSelectedBtn === 1? "conference-btn selected" : 'conference-btn' }
            onClick={ this.handleAddConference }  
          >
          + สร้างการประชุม
          </button>
        </div>
      </div>
    );
  }

  handleConference = () => {
    this.props.setBtnSelected(0)
    if(this.props.path !== '/')
      this.props.globalRouter.push('/')
  };

  handleAddConference = () => {
    this.props.setBtnSelected(1)
    if(this.props.path !== 'createConference')
      this.props.globalRouter.push('/createConference')
  };
}

const mapStateToProps = state => ({
  conferenceSelectedBtn: state.conferenceSelectedBtn,
  globalRouter: state.globalRouter,
  path: state.path
});

const mapDispathToProps = dispath => ({
  setBtnSelected : selected => dispath(actions.setSelectedConferenceBtn(selected))
})

export default connect(mapStateToProps, mapDispathToProps)(AdminAddConference);
