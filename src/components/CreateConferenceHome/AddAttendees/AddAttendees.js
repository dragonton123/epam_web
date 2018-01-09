import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../action"
import "./AddAttendess.css";

class AddAttendees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownToggle: false,
      wrapperDropdown: null,
      wrapperLogout: null,
      department: []
    };
  }


  componentWillMount = () => {
   // window.scrollTo(0, 0);
     this.handleAddUser()
     //setInterval(()=>{this.handleAddUser()},1000);
  };


  render() {
    const { dropdownToggle } = this.state;
      let content ;


      content = this.props.conferenceSelectPerson.resault.map((data,index) => {
          return (
              <div className="user-table-container">{this.tableUserObj(false, 1,index,data.name,data.last_name,data.phone_num,data.id)}</div>
          );
      });


      // let content = this.props.conferenceSelectPersonState.map((anObjectMapped, index) => {
    //       return (
    //           <div className="user-table-container">{this.tableUserObj(false, 0, 1)}</div>
    //       );
    //   })
    return (
      <div className="columns">
        <div className="column">
          <p className="sub-title">ข้อมูลการประชุม</p>

          <div className="field">
            <div className="control">
              <label>ชื่อการประชุม</label>
              <input
                className="input"
                type="text"
                placeholder="ชื่อการประชุม"
              />
            </div>
          </div>

          <div className="title-user-table">
            <p className="sub-title second" >ผู้เข้าร่วมประชุม</p>
            <a className="delete-all-user">ลบทั้งหมด</a>
          </div>

          {this.renderUserTable()}
        </div>
        <div className="column">
          <p className="sub-title">เลือกผู้เข้าร่วมประชุม</p>
          <div>
              <div>เลือกหน่วยงาน</div>
              <div className="dropdown is-right">
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    ref={this.setWarpDropdown}
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    onClick={() =>
                      this.setState(prevState => ({
                        dropdownToggle: !prevState.dropdownToggle
                      }))
                    }
                  >
                    <span>เลือกหน่วยงาน</span>
                    <span className="icon is-small">
                      <i className="fa fa-angle-down" aria-hidden="true" />
                    </span>
                  </button>
                  <div
                    className={
                      dropdownToggle
                        ? "dropdown-menu active-dropdown"
                        : "dropdown-menu"
                    }
                    id="dropdown-menu"
                    role="menu"
                  >
                    <div className="dropdown-content">
                      <a ref={this.setWarpLogout} className="dropdown-item">
                        ประปา
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>

          <div className="title-user-table">
            <a className="delete-all-user">เลือกทั้งหมด</a>
          </div>

          { this.renderUserAddTable() }
            {content}
        </div>
      </div>
    );
  }

  renderUserTable = () => {
    return <div className="user-table-container">{this.tableUserObj(false, 0, 1)}</div>;
  };

  renderUserAddTable = () => {
    return <div className='user-table-container'> {this.tableUserObj(true, 1, 2)} </div>
  }

  handleAddUser = () => {
      this.props.setuser([
          {
              "name": "test",
              "last_name": "001",
              "id": 1,
              "phone_num": "0823782341",
              "position": "Developer"
          },
          {
              "name": "test",
              "last_name": "002",
              "id": 2,
              "phone_num": "0865421045",
              "position": "Security Man"
          }])
      console.log(this.props.conferenceSelectPerson)
  }


  

  handleRemoveUser = () => {

  }

  tableUserObj = (isOdd, mode, key, firstname, lastname, phone , img_id) => {
    return (
      <div className={isOdd ? "user-obj odd" : "user-obj"} key={key}>
        <img
          className="user-avatar"
          src={
            "https://epam.projectsoft.co.th/api/v1/image/"+img_id+".png"
          }
          alt="avatar"
        />
        <div className="name-phone-container">
          { firstname + ' ' + lastname }
          <p className="user-phone">{ phone }</p>
        </div>
        {mode === 0 ? (
          <img
            className="delete-user-row"
            src={require("../../../assets/icon/cancel.png")}
            alt="cancel"
            onClick={ this.handleRemoveUser }
          />
        ) : mode === 1 ? (
          <img
            className="select-user-row-add"
            src={require("../../../assets/icon/add.png")}
            alt="cancel"
            onClick={ this.handleAddUser }
          />
        ) : (
          <img
            className="select-user-row"
            src={ require("../../../assets/icon/correct.png") }
            alt="cancel"
          />
        )}
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
    conferenceSelectPerson : state.conferenceSelectPerson
})

const mapDispatchToProps = dispath => ({
    setuser : (data)=>dispath(actions.UserConference(data))
  
})


export default connect(mapStateToProps, mapDispatchToProps)(AddAttendees)