import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../action'
import './Item.css'

class Item extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       clickSelect: false
    }
  }
  
  render() {
    const { pdfName, pdfStatus, selected, docId, id } = this.props

    return (
      <div className={selected ? 'thumnail-item selected' :'thumnail-item'} onClick={() => {
          setTimeout(() => {
            this.props.setCurrentSub(id)
            this.props.setCurrentDoc(docId)
          }, 100);
        }} >
      { pdfStatus ? <img src={require('../../../assets/icon/correct.png')} alt='currect' className='currect-icon'/> 
      : null }
      <img src={require('../../../assets/image/pdf.png')} alt='pdf' className='pdf-thumnail' />
      <p className='pdf-name'>{ pdfName? pdfName: 'pdf_name.pdf'}</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  conference: state.conference
})

const mapDispatchToProps = dispath => ({
  setCurrentSub: index => dispath(actions.setCurrentSubConference(index)),
  setCurrentDoc: docId => dispath(actions.setCurrentDoc(docId))
})


export default connect(mapStateToProps, mapDispatchToProps)(Item)