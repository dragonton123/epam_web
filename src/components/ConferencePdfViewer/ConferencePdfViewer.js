import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Document, Page, setOptions } from 'react-pdf/build/entry.webpack';

import * as actions from '../action'
import { server } from '../../services/Config'
import './ConferencePdfViewer.css'

setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
})

class PdfViewer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       numPages:null
    }
  }
  
  componentWillMount = () => {
    this.props.setPdfLoading(true)
  }
  
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   if(nextProps.conference.currentSub !== this.props.conference.currentSub) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  

  render() {
    const { numPages } = this.state;
    const { data, currentSub } = this.props.conference
    return (
      <div className='Example__container__document' >
        <Document
          file={ data[currentSub] ? { url: `${server}/${data[currentSub].url}`, withCredentials:  true } : require('../../assets/pdf/mountain.pdf') }
          onLoadSuccess={this.onDocumentLoad}
          // onLoadError={ err => alert('err' + err) }
        >
          { Array.from(
            new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`}
                pageNumber={index + 1} 
                />
            )
          ) }
          
        </Document>
        <div className='level'>
          <div className='level-left' onClick={this.handleAccepted} >
            <a id='accept-term' > ข้าพเจ้าได้อ่านเอกสารการประชุมเรียบร้อยแล้ว </a>
          </div>
          <div className='level-right'>
            <div id='pdf-action' >
              <img src={require('../../assets/icon/printer.png')}  alt='printer' />
              <img src={require('../../assets/icon/download.png')} alt='download' />
              <img src={require('../../assets/icon/full-size.png')}  alt='full-size' />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onDocumentLoad = ({ numPages }) => {
    // this.props.setPdfLoading(false)
    this.setState({ numPages });

  }

  handleAccepted = () => {
    const { conference, loginState } = this.props
    this.props.saveReadConference(conference.currentDoc, loginState.userId, conference.currentSub)
  }

}

const mapStateToProps = (state) => ({
  conference: state.conference,
  loginState: state.login
})

const mapDispatchToProps = dispath => ({
  setPdfLoading: isLoading => dispath(actions.setPdfLoading(isLoading)),
  saveReadConference: (doc_id, user, currentSub) => dispath(actions.tryToSaveReadConference(doc_id, user, currentSub))
})


export default connect(mapStateToProps, mapDispatchToProps)(PdfViewer)