import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../action'
import moment from 'moment'
import "./ConferenceDetailView.css";

class ConferenceDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0
    };
  }

  shouldComponentUpdate = ( nextProps, nextState ) => {
    if (nextProps.conference !== this.props.conference || nextProps.currentConference !== this.props.currentConference || nextState.currentTab !== this.state.currentTab) {
      return true
    } else {
      return false
    }
  }
  

  render() {
    const { currentTab } = this.state;
    const { router, conference, currentConference } = this.props
    
    return (
      <div className="conference-detail-container">
        <button className="back-btn" onClick={() => router.goBack()}>
          <img
            src={require("../../assets/icon/arrow_blue.png")}
            alt="arrow-blue"
          />
          กลับไปยังหน้าหลัก
        </button>
        <p> { currentConference.conferenceTitle } </p>
        <Info
          currentTab={this.state.currentTab}
          onChangeTab={this._handleChangeTab}
        />
        {currentTab === 0 ? <BasicInfo detail={currentConference.conferenceDetail} /> : <ConferenceTopic data={conference.data} />}
      </div>
    );
  }

  _handleChangeTab = tab => {
    this.setState({ currentTab: tab });
  };
}

const Info = props => {
  const { currentTab, onChangeTab } = props;
  return (
    <div className="info-container">
      <div className="tabs is-small">
        <ul>
          <li className={currentTab === 0 ? "is-active" : null}>
            <a onClick={() => onChangeTab(0)}>ข้อมูลการประชุมเบื้องต้น</a>
          </li>
          <li className={currentTab === 1 ? "is-active" : null}>
            <a onClick={() => onChangeTab(1)}>หัวข้อการประชุม</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const BasicInfo = props => {
  const {detail} = props
  return (
    <div className="basic-info">
      <p>
        { detail }
      </p>
    </div>
  );
};

const ConferenceTopic = props => {
  const { data } = props
  console.log(data)
  return (
    <div className="basic-info">
      {Array.isArray (data) && data.length > 0? data.map((el,i) => {
        const currentData = moment()
        const meetingDate = moment(el.meeting_time).format("DD/MM/YYYY");
        const status = currentData.isBefore(el.meeting_time)
        console.log(currentData)
        return (
          <MediaObject key={i} title={el.title} date={meetingDate} isEven={ i%2 === 0? false:true} status={!status}/>
        )

      }) : <MediaObject />}
    </div>
  );
};

const MediaObject = props => {
  const { title, date, status, isEven } = props
  return (
    <div className={isEven? "media-object even" : "media-object"}>
      <p className="media-title">{ title? title : 'การเตรียมรับมือน้ำท่วม'}</p>
      <span>
        วันที่ประชุม {date} <span className={status? "media-status convened" : 'media-status' }>{status? 'ประชุมแล้ว': 'ยังไม่ประชุม'}</span>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  conference: state.conference,
  currentConference : state.currentConference
})

const mapDispatchToProps = dispath => ({
  
})


export default connect(mapStateToProps, mapDispatchToProps)(ConferenceDetailView)
