import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../action";
import CreateConference from "./CreateConference/CreateConference";
import CreateSubConference from "./CreateSubConference/CreateSubConference";
import AddAttendees from "./AddAttendees/AddAttendees";
//import * as adminService from '../../services/AdminService'
import "./CreateConferenceHome.css";

class CreateConferenceHome extends Component {

  componentWillMount = () => {
    this.props.setCreateConferencePage(0);
  };

  render() {

    const { conferencePage } = this.props.createConference  
     console.log('conf page', conferencePage)

    
    return (
      <div className='create-confernect-container'>
        { conferencePage === 0 ? (
          <div className="columns is-desktop">
            <div className="column">
              <CreateConference />
            </div>
            <div className="column is-three-fifths">
              <CreateSubConference />
            </div>
          </div>
        ) : (
          <AddAttendees />
        )}
        <div className="create-conference-btn-container">
          {
            conferencePage === 1 ? <div className="back-container">
            <a className="button is-large" onClick={this.handleBack}>
              <span className="icon is-medium">
                <i className="fa fa-angle-left" />
              </span>
              <span>กลับ</span>
            </a>
          </div> : null

          }
          <div className="continue-container">
            <button
              onClick={
                conferencePage === 0
                  ? this.handleContinue
                  : this.handleAddConference
              }
            >
             { conferencePage === 0 ? 'ดำเนินการต่อ' : '+ เพิ่มการประชุม' }
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleContinue = () => {
    const { conferencePage } = this.props.createConference;
    this.props.setCreateConferencePage(1);
  };

  handleBack = () => {
    const { conferencePage } = this.props.createConference
    this.props.setCreateConferencePage(0)
  }

  handleAddConference = async () => {
    try {

    } catch (error) {

    }
    console.log("create conference");
  };
}

const mapStateToProps = state => ({
  createConference: state.createConference,
});

const mapDispatchToProps = dispath => ({
  setCreateConferencePage: page => dispath(actions.setCreateConferencePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateConferenceHome
);
