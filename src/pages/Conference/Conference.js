import React, { Component } from 'react'
import { connect} from 'react-redux'
import Thumnail from '../../components/ConferenceLeftThumnail/ConferenceLeftThumnail'
import PdfView from '../../components/ConferencePdfViewer/ConferencePdfViewer'
import Detail from '../../components/ConferenceDetailView/ConferenceDetailView'
import * as actions from '../../components/action'
import './Conference.css'
class Conference extends Component {

  componentWillMount = () => {
    if (!this.props.login.success) this.props.router.push("/login");

  };

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.getSubConferenceData(this.props.currentConference.conferenceId)
  }
  
  render() {
    return (
      <div>
        <div className='psudo-header'></div>
          <div className='container'>
            <div className='conference-container'>
              <Thumnail />
              <PdfView />
              <Detail router={ this.props.router } />
            </div>
          </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  login: state.login,
  currentConference: state.currentConference,
  conference: state.conference
});

const mapDispathToProps = dispath => ({
  getSubConferenceData: conferenceId => dispath(actions.tryToGetSubConferenceData(conferenceId))
})

export default connect(mapStateToProps, mapDispathToProps)(Conference)
