import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../action'
import "./ConferenceBox.css";

class ConferenceBox extends Component {
  render() {
    let { title, content, date, readStatus, conferenceId } =  this.props;
    return (
      <div className="conference-box">
        <div className="conference-box-left">
          <span className="conference-title">{title ? title : "หัวข้อ"}</span>
          <p className="conference-content">{content ? content : "เนื้อหา"}</p>
          <span className="conference-date">
            {" "}
            {date ? date : "01/01/2018"}{" "}
            <button
              className={
                readStatus ? "conference-status-read" : "conference-status"
              }
              disabled
            >
              {" "}
              {readStatus ? "อ่านแล้ว" : "ยังไม่อ่าน"}
            </button>
          </span>
        </div>
        <div className="conference-box-right">
          <button
            className="conference-detail-btn"
            onClick={() => 
              {
                this.props.setCurrentConference(conferenceId)
                this.props.setConferenceTitle(title)
                this.props.setConferenceDetail(content)
                this.props.globalRouter.push("/conference")
              }
            }
          >
            รายละเอียด
          </button>
        </div>
      </div>
    );
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(this.props.readStatus !== nextProps.readStatus) {
      return true
    } else {
      return false
    }
    
  }
  
}

const mapStateToProps = (state) => ({
  globalRouter: state.globalRouter,
  currentConference: state.currentConference,
})

const mapDispathToProps = dispath => ({
  setCurrentConference : cfId => dispath(actions.setCurrentConference(cfId)),
  setConferenceTitle: cfTitle => dispath(actions.setConferenceTitle(cfTitle)),
  setConferenceDetail: cfDetail => dispath(actions.setConferenceDetail(cfDetail))
  
})


export default connect(mapStateToProps, mapDispathToProps)(ConferenceBox)