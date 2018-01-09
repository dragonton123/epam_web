import React, { Component } from "react";
import { connect } from 'react-redux'
import Item from "./Item/Item";
import * as actions from '../action'

import Slider from 'react-slick'
import "./ConferenceLeftThumnail.css";


class ConferenceRightThumnail extends Component {

  next = () => {
    this.slider.slickNext()

  }
  previous = () => {
    this.slider.slickPrev()

  }

  componentDidMount = () => {

  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.conference.data !== this.props.conference.data) {
      if (nextProps.conference.data.length > 0) {
        this.props.setCurrentDoc(nextProps.conference.data[0].doc_id)
      } 
    }
  }
  
  

  render() {
    const { data, currentSub } = this.props.conference

    var settings = {
      className: 'slider',
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      vertical: true,
      arrows: false,
      focusOnSelect: false,
    };

    return (
      <div className="conference-thumnail">
        <button onClick={ this.previous } >
          <img
        src={require("../../assets/icon/arrow.png")}
          alt="arrow-up"
       className="thumnail-arrow"
        />
        </button>
        <Slider ref={c => this.slider = c } {...settings} slidesToScroll={ data.length - currentSub > 4 ? 4 : currentSub }>
          { data.length > 0 ? data.map((el, i) => {
            return (
              <div key={i}><Item selected={ currentSub === i ? true : false } pdfStatus={el.read} pdfName={el.document_name} setCurrentItem={this.handleCurrentItem} id={i} docId={el.doc_id} /></div>
            )
          }) : 
              <div><Item selected={false} pdfStatus={false} pdfName="test.pdf" /></div>
          }
        </Slider>
        <button className="arrow-down-btn"  onClick={ this.next }>
            <img
              src={require("../../assets/icon/arrow.png")}
              alt="arrow-up"
              className="thumnail-arrow-down"
            />
          </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  conference: state.conference
})

const mapDispathToProps = dispath => ({
  setCurrentDoc: docId => dispath(actions.setCurrentDoc(docId))
})

export default connect(mapStateToProps, mapDispathToProps)(ConferenceRightThumnail)