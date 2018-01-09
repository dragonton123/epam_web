import React, { Component } from "react";
import ConferenceBox from "./ConferenceBox/ConferenceBox";
import { connect } from "react-redux";
import moment from "moment";
import * as actions from "../action";
import "./ConferenceHomeContent.css";

class ConferenceContent extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.homeContent !== this.props.homeContent) {
      return true;
    } else {
      return false;
    }
  };

  componentDidMount = () => {
    this.props.getData();
  };

  render() {
    const { active, data } = this.props.homeContent;
    const { setActive } = this.props;
    return (
      <div>
        <nav className="breadcrumber-content">
          <ul>
            <li />
            <li>
              <a
                className={active === 0 ? "active" : "not-active"}
                onClick={() => setActive(0)}
              >
                ทั้งหมด
              </a>
            </li>
            <li>
              <a
                className={active === 1 ? "active" : "not-active"}
                onClick={() => setActive(1)}
              >
                ยังไม่อ่าน
              </a>
            </li>
            <li>
              <a
                className={active === 2 ? "active" : "not-active"}
                onClick={() => setActive(2)}
              >
                อ่านแล้ว
              </a>
            </li>
          </ul>
        </nav>

        {active === 0 && data
          ? this.renderAll(data)
          : active === 1 && data
            ? this.renderNotRead(data)
            : data ? this.renderReaded(data) : null}

        {this.renderPagination(this.props.homeContent.active)}
      </div>
    );
  }

  renderAll = data => {
    return (
      <div className="conference-content">
        {data.map(el => {
          const date = moment(el.meeting_time).format("DD/MM/YYYY");
          return (
            <ConferenceBox
              key={el.conference_id}
              title={el.title}
              content={el.detail}
              readStatus={el.read}
              date={date}
              conferenceId={el.conference_id}
            />
          );
        })}

      </div>
    );
  };

  renderNotRead = (data) => {
    return (
      <div className="conference-content">
        {data.map(el => {
          const date = moment(el.meeting_time).format("DD/MM/YYYY");
          return !el.read ? (
            <ConferenceBox
            key={el.conference_id}
            title={el.title}
            content={el.detail}
            readStatus={el.read}
            date={date}
            conferenceId={el.conference_id}
          />
          ) : null
        })}
      </div>
    );
  };

  renderReaded = (data) => {
    return (
      <div className="conference-content">
        {data.map(el => {
          const date = moment(el.meeting_time).format("DD/MM/YYYY");
          return el.read ? (
            <ConferenceBox
            key={el.conference_id}
            title={el.title}
            content={el.detail}
            readStatus={el.read}
            date={date}
            conferenceId={el.conference_id}
          />
          ) : null
        })}
      </div>
    );
  };

  renderPagination = (active) => {
    const { page, data } = this.props.homeContent;
    const { setPage } = this.props;
    let paginationItem = 0
    
    switch (active) {
      case 0:
        paginationItem = data ? Math.ceil(data.length / 3) : 0;
        break;
      case 1:
        paginationItem = data ? Math.ceil(data.reduce((accum, cv, ci) => !cv.read? ++accum : accum , 0) / 3) : 0;
        break;
      case 2:
        paginationItem = data ? Math.ceil(data.reduce((accum, cv, ci) => cv.read? ++accum : accum , 0) / 3) : 0;
        break;
      default:
        break;
    }

    return (
      <nav className="pagination-content" aria-label="pagination">
        <ul className="pagination-list">
          <li />
          <li>
            <a className="pagination-link" onClick={() => page > 0 ? setPage(page - 1): false}>
              <img
                id="first-arrow"
                src={require("../../assets/icon/arrow.png")}
                alt="arrow"
              />
            </a>
          </li>

          {page > 0 ? (
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
          ) : null}

          {data
            ? Array.from(new Array(3), (el, i) => (
                <li key={i}>
                    <a
                      className={
                        i === 0 && paginationItem !== 0
                          ? "pagination-link is-current"
                          :  "pagination-link"
                      }
                      aria-label={page}
                      onClick={() =>
                        page + i < paginationItem ? setPage(page + i ): false
                      }
                      disabled={page + i > paginationItem - 1 ? true : false}
                    >
                      { page + i + 1}
                    </a>
                
                </li>
              ))
            : null}

          {paginationItem > 2 ? (
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
          ) : null}

          <li>
            <a className="pagination-link" onClick={() => page < paginationItem - 1 ? setPage(page + 1): false} >
              <img
                id="last-arrow"
                src={require("../../assets/icon/arrow.png")}
                alt="arrow"
              />{" "}
            </a>
          </li>
        </ul>
      </nav>
    );
  };
}

const mapStateToProps = state => ({
  homeContent: state.conferenceHomeContent
});

const mapDispatchToProps = dispatch => ({
  setActive: active => dispatch(actions.setConferenceHomeCurrentActive(active)),
  setPage: page => dispatch(actions.setConferenceHomeCurrentPage(page)),
  getData: () => dispatch(actions.tryToGetConferenceData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConferenceContent);
