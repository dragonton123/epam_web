import React, { Component } from 'react'
import {admin_create_department} from '../../services/AdminService'


export default class CreateDepartment extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      department_name: ''
    }
  }

  _handleCreateDepartment = async () => {
    const { department_name } = this.state
    if( department_name ) {
      try {
        const createDeparment = await admin_create_department({department_name})
        
      } catch (err) {
        alert(err)
      }
    } else {
      alert('Please Enter department name')
    }
  }

  render() {
    return (
      <div>
        <input type='text' className="input is-primary" onChange={e => this.setState({ department_name: e.target.value })}/>
        <button className='button' onClick={this._handleCreateDepartment} >Create Department</button>
      </div>
    )
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextState.department_name !== this.state.department_name) {
      return true
    } else {
      return false
    }
  }
  
}
