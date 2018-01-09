import React, { Component } from "react";
import { connect } from "react-redux";
import Datetime from 'react-datetime'
import * as actions from '../../action'
import "./CreateSubConference.css";
import moment from 'moment'

class CreateSubConference extends Component {

  constructor(props) {
    super(props)
    this.state = {
      subName: '',
      meeting_time: '',
      file: '', 
      emptyTable: 8,
    }
  }

  render() {
    const { isSuccess } = this.props.createConference
    const { meeting_time } = this.state
    return (
      <div className={ isSuccess ? 'normal-create-sub' : 'disabled-create-sub' }>
        <p className="sub-title">เพิ่มหัวข้อการประชุม</p>
        <div className="columns is-desktop">
          <div className="column is-8">
            <div className="field">
              <div className="control">
                <label>ชื่อหัวข้อการประชุม</label>
                <input
                  className="input"
                  type="text"
                  placeholder="ชื่อหัวข้อการประชุม"
                  value={this.state.subName}
                  onChange={ this.handleSubConferenceName }
                  // disabled={ !isSuccess }
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="control">
                <label>วันที่ประชุม</label>
                <Datetime renderInput={ this.renderInput } onChange={this.handleDate} inputProps={{value: meeting_time}}  />
                {/* <input
                  className="input"
                  type="text"
                  placeholder="เลือกวันที่"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-four-fifths">{this.renderUpload()}</div>
          <div className="column">
            <button className='add-title-btn' onClick={this.handleAddSubConference} >+ เพิ่มหัวข้อ</button>
          </div>
        </div>
        <div className="columns">
          <div className="column" id='table-column'>
            <p className='sub-title second'>หัวข้อการประชุม</p>
            {this.renderConferenceTable()}
          </div>
        </div>
      </div>
    );
  }


  renderInput (props) {

    const clear = () => {
      props.onChange({target: {value: ''}})
    }

    return (
      <div>
        <div className="field">
          <div className="control has-icons-right">
            <input className='input' type="text" placeholder="เลือกวันที่"  {...props} />
            <span className="icon is-right">
              <i className="fa fa-calendar"></i>
            </span>
          </div>
        </div>
        {/* <button onClick={openCalendar}>Open Calendar</button>
        <button onClick={clear}>Clear</button> */}
      </div>
    )
  }

  renderUpload = () => {
    return (
        <div className="file has-name is-right">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" onChange={this.handleFile} disabled={ !this.props.createConference.isSuccess }/>
            <span className="file-cta">
              <span className="file-icon">
                <img src={require('../../../assets/icon/upload.png')} alt='upload' />
              </span>
              <span className="file-label">อัพโหลดเอกสาร</span>
            </span>
            <span className="file-name">
              { this.state.file.name }
              
            </span>
          </label>
        </div>
    );
  };

  renderConferenceTable = () => {
    return (        
        <div className='table-container' >
          <div className='table-title-container' >
            <div><p>หัวข้อการประชุม</p></div>
            <div><p>วันที่ประชุม</p></div>
            <div><p>ไฟล์เอกสาร</p></div>
          </div>
          { this.renderConferenceRow()}
          { this.state.emptyTable > 0 ? this.renderEmptyRow(this.state.emptyTable) : null}
        </div>
    );
  };

  renderConferenceRow = () => {
    const { createSubConference: subCF } = this.props
    console.log( subCF )
    return (
      subCF.length > 0 ? subCF.map((el, i) => {
        return (
          <div key={i} className={i % 2 === 0 ? 'table-content' : 'table-content even'}>
            <div className='table-file-name' >{el.title}</div>
            <div className='table-date'>{el.meeting_time}</div>
            <div className='table-file-name' >{el.pdf}</div>
          </div>
        )
      }) : false
    )
  }

  renderEmptyRow = (numberOfEmpty) => {
    return (
      Array.from(new Array(numberOfEmpty), (el, i) => (
        numberOfEmpty % 2 === 0 ? 
        <div key={i} className={i % 2 === 1 ? 'table-content' : 'table-content even'} />:
        <div key={i} className={i % 2 === 0 ? 'table-content' : 'table-content even'} />
      ))
    )
  }

  handleSubConferenceName = e => {
    this.setState({subName: e.target.value})
  }

  handleFile = (e) => {
    this.setState({ file : e.target.files[0]})
  }

  handleDate = e => {
    // console.log('date = ', e._d)
    let meeting_time = moment(e._d).format('YYYY-MM-DD hh:mm:ss')
    this.setState({ meeting_time })
  }

  handleAddSubConference = () => {
    const { file, subName, meeting_time, emptyTable } = this.state
    if(file && subName && meeting_time) {
      this.props.addSub(file.name, subName, meeting_time)
      const { createSubConference } = this.props
      const dataLength = createSubConference.length
      console.log(emptyTable)
      this.setState(prevState => ({file: '', subName: '', meeting_time: '', emptyTable: prevState.emptyTable - dataLength}))
      console.log(emptyTable)
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }
   
  }

}

const mapStateToProps = state => ({
  createSubConference: state.createSubConference,
  createConference: state.createConference
});

const mapDispatchToProps = dispath => ({
  addSub: (pdf, title, meeting_time) => dispath(actions.addSubConference(pdf, title, meeting_time)),
  removeSub: index => dispath(actions.removeSubConference(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateSubConference
);
