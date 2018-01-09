import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../action'
import './Search.css'

class Search extends Component {

  render() {
    return (
      <div className="search">
        <div className="control has-icons-left">
          <input
            className="input"
            id='search-box'
            type="text"
            name="search"
            onChange={e => this.props.setKeyword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <img src={require('../../assets/icon/search.png')} alt='search' className='search-icon' />
          </span>
        </div>
          <button className='search-btn' onClick={() => console.log('search')} >SEARCH</button>
      </div>
    );
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextProps.keyword !== this.props.keyword) {
      return true
    } else {
      return false
    }
  }
  

}

const mapStateToProps = (state) => ({
  keyword: state.keywordSearch
})

const mapDispatchToProps = dispath =>({
  setKeyword: keyword => dispath(actions.setKeywordSearch(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)