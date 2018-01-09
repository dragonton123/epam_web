import * as actions from './action'
import { combineReducers } from 'redux'

const loginState = (state = { 
  success: false, 
  failure: false, 
  userId: -1, 
  firstname: '', 
  lastname: '', 
  department: '', 
  departmentId: -1,
  userRole: 'Normal User'
}, action) => {
  switch (action.type) {
    case actions.SET_LOGIN_SUCCESS:
      return {...state, success : action.isLoginSuccess }
    case actions.SET_LOGIN_FAILURE:
      return {...state, failure : action.isLoginFailure }
    case actions.SET_USER_ID:
      return { ...state, userId : action.payload }
    case actions.SET_FIRSTNAME: 
      return { ...state, firstname: action.payload }
    case actions.SET_LASTNAME:
      return { ...state, lastname: action.payload }
    case actions.SET_DEPARTMENT:
      return { ...state, department: action.payload }
    case actions.SET_DEPARTMENT_ID:
      return { ...state, departmentId: action.payload }
    case actions.SET_USER_ROLE:
      return { ...state, userRole: action.payload }
    default:
      return state;
  }
}

const routerState = (state = null ,action) => {
  switch (action.type) {
    case actions.SET_ROUTER:
      return state = action.router
    default:
      return state
  }
}

const pathState = (state = '', action) => {
  switch (action.type) {
    case actions.SET_CURRENT_PATH:
      return state = action.path
    default:
      return state
  }
}

const keywordSearchState = (state = {
  isSearch: false,
  keyword: ''
}, action) => {
  switch (action.type) {
    case actions.SET_KEYWORD_SEARCH:
      return {...state, keyword: action.keyword }
    default:
      return state;
  }
}

const conferenceHomeContentState = (state = {
  active: 0,
  page: 0,
  getDataFailure: true,
  data: [],
}, action) => {
  switch (action.type) {
    case actions.SET_CONFERENCE_HOME_CURRENT_PAGE:
      return { ...state, page: action.page }
    case actions.SET_CONFERENCE_HOME_CURRENT_ACTIVE:
      return { ...state, active: action.active }
    case actions.SET_GET_CONFERENCE_DATA_FAILURE:
      return { ...state, getDataFailure: action.payload }
    case actions.SET_CONFERENCE_DATA:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}

const currentConferenceState = (state = {
  conferenceId: -1,
  conferenceTitle: 'หัวข้อการประชุม',
  conferenceDetail: 'แจ้งการจัดประชุมเตรียมรับมือน้ำท่วม โครงการศึกษาความเหมาะสมและผลการะทบสิ่งแวดล้อม...'
}, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_CONFERENCE:
      return { ...state , conferenceId:action.payload }
    case actions.SET_CONFERENCE_TITLE:
      return { ...state, conferenceTitle: action.payload}
    case actions.SET_CONFERENCE_DETAIL:
      return { ...state, conferenceDetail: action.payload }
    default:
      return state
  }
}

const conferenceState = (state = {
  loading: false,
  failure: false,
  data: [],
  currentSub: 0,
  pdfLoading: false,
  currentDoc: -1
}, action) => {
  switch (action.type) {
    case actions.SET_CONFERENCE_TITLE:
      return { ...state, conferenceTitle: action.payload }
    case actions.SET_SUB_CONFERENCE_LOADING:
      return { ...state, loading: action.payload }
    case actions.SET_SUB_CONFERENCE_FAILURE:
      return { ...state, failure: action.payload }
    case actions.SET_SUB_CONFERENCE_DATA:
      return { ...state, data: action.payload }
    case actions.SET_CURRENT_SUB_CONFERENCE:
      return { ...state, currentSub: action.payload }
    case actions.SET_CURRENT_DOC:
      return { ...state, currentDoc: action.payload }
    case actions.SET_READ_CONFERENCE:
      let data = state.data 
      let newData = [...data.slice(0, action.payload), { ...data[action.payload], read: true }, ...data.slice(action.payload + 1)]
      return { ...state, data: newData}
    default:
      return state
  }
}

const createConferenceState = (state = {
  isSuccess: false,
  conferencePage: 0,
  conferenceName: '',
  conferenceDetail: '',
  conferenceId: -1,
  conferenceState: 0
}, action) => {
  switch (action.type) {
    case actions.SET_CREATE_CONFERENCE_SUCCESS:
      return { ...state  ,isSuccess :action.isCreateConferenceSuccess }
    case actions.SET_CREATE_CONFERENCE_PAGE: 
      return { ...state, conferencePage: action.page }
    case actions.SET_CREATE_CONFERENCE_NAME:
      return { ...state, conferenceName: action.name }
    case actions.SET_CREATE_CONFERENCE_DETAIL:
      return { ...state, conferenceDetail: action.detail}
    case actions.SET_CREATE_CONFERENCE_ID:
      return { ...state, conferenceId: action.id}
    case actions.SET_CREATE_CONFERENCE_STATE:
      return { ...state, conferenceState: action.state}
    default:
      return state;
  }
}

const createSubConferenceState = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_SUB_CONFERENCE:
      return [ ...state, { 
        pdf: action.pdf,
        title: action.title,
        meeting_time: action.meeting_time
      }, ]
    case actions.REMOVE_SUB_CONFERENCE:
      const { index } = action
      return [ ...state.slice(0, index), ...state.slice(index + 1)]
    default:
      return state;
  }
}


const conferenceSelectedBtnState = (state = 0, action) => {
  switch (action.type) {
    case actions.SET_SELECTED_CONFERENCE_BUTTON:
      return state = action.btnSelected 
    default:
      return state;
  }
}

const conferenceSelectPersonState = (state = {
    resault : []
}, action) => {
    switch (action.type) {
        case "SELECTED_CONFERENCE_PERSON" :

            return state={
                 ...state,
                  resault : action.payload
                } ;
            break;
        default:
            return state;
            break;
    }
}

const reducer = combineReducers({
  login: loginState,
  createConference: createConferenceState,
  keywordSearch: keywordSearchState,
  globalRouter: routerState,
  path: pathState,
  conferenceHomeContent: conferenceHomeContentState,
  conference: conferenceState,
  currentConference: currentConferenceState,
  conferenceSelectedBtn: conferenceSelectedBtnState,
  createSubConference: createSubConferenceState,
  conferenceSelectPerson:conferenceSelectPersonState
})

export default reducer