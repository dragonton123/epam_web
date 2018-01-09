import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../action'
import * as adminService from '../../../services/AdminService'
import './CreateConference.css'

class CreateConference extends Component {

  render() {
    const { isSuccess, conferenceName, conferenceDetail} = this.props.createConference
    return (
      <div className={ !isSuccess ? 'create-conference' : 'disabled-create-con'} >
        <p className='sub-title'> ข้อมูลการประชุม</p>
        <div className='form'>
          <div className="field">
            <div className="control">
              <label >ชื่อการประชุม</label>
              <input className="input" type="text" placeholder="ชื่อการประชุม" onChange={ this.onNameChange }  value={conferenceName}/>
            </div>
          </div>

          <div className='field'>
            <div className='control'>
              <label > รายละเอียดการประชุม</label>
              <textarea className='textarea' type='text' rows='18' placeholder='รายละเอียดการประชุม' onChange={this.onDetailChage} value={conferenceDetail} />
            </div>
          </div>

          <div className="create-conference-btn-container">
            <button onClick={ this.onCreateConference} >
              เพิ่มหัวข้อการประชุม
            </button>
          </div>
        </div>
      </div>
    )
  }

  onNameChange = (e) => {
    this.props.setConferenceName(e.target.value)

    
  }

  onDetailChage = (e) => {
    this.props.setConferenceDetail(e.target.value)

  }

  onCreateConference = async () => {
    const { conferenceName, conferenceDetail } = this.props.createConference
      let data = {
          title:conferenceName,
          detail:conferenceDetail
      }
    try {
      this.props.setCreateConferenceSuccess(false)
        console.log(conferenceName, conferenceDetail)
        //let cfId = await adminService.createConferenceApi({ conferenceName, conferenceDetail })
        let cfId = await adminService.createConferenceApi(data)
      this.props.setCreateConferenceSuccess(true)
      this.props.setConferenceId(cfId)
    } catch (error) {
      alert(error)
    }

  }

}

const mapStateToProps = (state) => ({
  createConference: state.createConference
})

const mapDispatchToProps = dispath => ({
  setCreateConferenceSuccess: success => dispath(actions.setCreateConferenceSuccess(success)),
  setConferenceName: name => dispath(actions.setCreateConferenceName(name)),
  setConferenceDetail: detail => dispath(actions.setCreateConferenceDetail(detail)),
  setConferenceId: id => dispath(actions.setCreateConferenceId(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateConference)
