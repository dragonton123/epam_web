import * as CommonService from '../services/CommonService'
import * as AdminService from '../services/AdminService'
/*
 * action types 
 */

export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS"
export const SET_LOGIN_FAILURE = 'SET_LOGIN_FAILURE'
export const SET_USER_ID = 'SET_USER_ID'
export const SET_FIRSTNAME = 'SET_FIRSTNAME'
export const SET_LASTNAME = 'SET_LASTNAME'
export const SET_DEPARTMENT = 'SET_DEPARTMENT'
export const SET_DEPARTMENT_ID = 'SET_DEPARTMNET_ID'
export const SET_USER_ROLE = 'SET_USER_ROLE'
export const SET_KEYWORD_SEARCH = 'SET_KEYWORD_SEARCH'
export const SET_SEARCHING = 'SET_SEARCHING'
export const SET_SEARCH_SUCCESS = 'SET_SEARCH_SUCCESS'
export const SET_ROUTER = 'SET_ROUTER'
export const SET_CURRENT_PATH = 'SET_CURRENT_PATH'

// ConferenceHomeContent

export const SET_CONFERENCE_HOME_CURRENT_ACTIVE = 'SET_CONFERENCE_HOME_CURRENT_ACTIVE'
export const SET_CONFERENCE_HOME_CURRENT_PAGE = 'SET_CONFERENCE_HOME_CURRENT_PAGE'
export const SET_GET_CONFERENCE_DATA_FAILURE = 'SET_GET_CONFERENCE_DATA_FAILURE'
export const SET_CONFERENCE_DATA = 'SET_CONFERENCE_DATA'

// // ConferenceBox
export const SET_CURRENT_CONFERENCE = 'SET_CURRENT_CONFERENCE'
export const SET_CONFERENCE_TITLE = 'SET_CONFERENCE_TITLE'
export const SET_CONFERENCE_DETAIL = 'SET_CONFERENCE_DETAIL'

// Conference

export const SET_SUB_CONFERENCE_LOADING = 'SET_SUB_CONFERENCE_LOADING'
export const SET_SUB_CONFERENCE_FAILURE = 'SET_SUB_CONFERENCE_FAILURE'
export const SET_SUB_CONFERENCE_DATA = 'SET_SUB_CONFERENCE_DATA'
export const SET_CURRENT_SUB_CONFERENCE = 'SET_CURRENT_SUB_CONFERENCE'
export const SET_CURRENT_DOC = 'SET_CURRENT_DOC'
export const SET_PDF_LOADING = 'SET_PDF_LOADING'
export const SET_READ_CONFERENCE = 'SET_READ_CONFERENCE'

// CreateConference

export const SET_CREATE_CONFERENCE_SUCCESS = 'SET_CREATE_CONFERENCE_SUCCESS'
export const SET_SELECTED_CONFERENCE_BUTTON = 'SET_SELECTED_CONFERENCE_BUTTON'
export const SET_CREATE_CONFERENCE_PAGE = 'SET_CREATE_CONFERENCE_PAGE'
export const SET_CREATE_CONFERENCE_STATE = 'SET_CREATE_CONFERENCE_STATE'

export const SET_CREATE_CONFERENCE_NAME = 'SET_CREATE_CONFERENCE_NAME'
export const SET_CREATE_CONFERENCE_DETAIL = 'SET_CREATE_CONFERENCE_DETAIL'
export const SET_CREATE_CONFERENCE_ID = 'SET_CONFERENCE_ID'

export const ADD_SUB_CONFERENCE = 'ADD_SUB_CONFERENCE'
export const REMOVE_SUB_CONFERENCE = 'REMOVE_SUB_CONFERENCE'

export const ADD_USER_CONFERENCE = 'ADD_USER_CONFERENCE'
export const REMOVE_USER_CONFERENCE = 'REMOVE_USER_CONFERENCE'
export const SELECTED_CONFERENCE_PERSON = 'SELECTED_CONFERENCE_PERSON'

// export const SET_CREATE_SUB_CONFERENCE = ''

/*
 * action creators
 */

export const setLoginSuccess = isLoginSuccess => ({
  type: SET_LOGIN_SUCCESS,
  isLoginSuccess
});

export const setLoginFailure = isLoginFailure => ({
  type: SET_LOGIN_FAILURE,
  isLoginFailure
})

export const setUserId = payload => ({
  type:SET_USER_ID,
  payload
})

export const setFirstname = payload => ({
  type:SET_FIRSTNAME,
  payload
})

export const setLastname = payload => ({
  type: SET_LASTNAME,
  payload
})

export const setDepartment = payload => ({
  type: SET_DEPARTMENT,
  payload
})

export const setDepartmentId = payload => ({
  type: SET_DEPARTMENT_ID,
  payload
})

export const setUserRole = payload => ({
  type: SET_USER_ROLE,
  payload
})

export const setKeywordSearch = keyword => ({
  type: SET_KEYWORD_SEARCH,
  keyword
})

export const setSearching = isSearching => ({
  type: SET_SEARCHING,
  isSearching
})

export const setSearchSuccess = isSearchSuccess => ({
  type: SET_SEARCHING,
  isSearchSuccess
})

export const setRouter = router => ({
  type: SET_ROUTER,
  router
})

export const setCurrentPath = path => ({
  type: SET_CURRENT_PATH,
  path
})


// ConferenceHomeContent

export const setConferenceHomeCurrentActive = active => ({
  type: SET_CONFERENCE_HOME_CURRENT_ACTIVE,
  active
})

export const setConferenceHomeCurrentPage = page => ({
  type: SET_CONFERENCE_HOME_CURRENT_PAGE,
  page
})

export const setConferenceData = payload => ({
  type: SET_CONFERENCE_DATA,
  payload
})

export const setGetConferenceDataFailure = payload => ({
  type: SET_GET_CONFERENCE_DATA_FAILURE,
  payload
})

// // ConferenceBox

export const setCurrentConference = payload => ({
  type: SET_CURRENT_CONFERENCE,
  payload
})

export const setConferenceTitle = payload => ({
  type: SET_CONFERENCE_TITLE,
  payload
})

export const setConferenceDetail = payload => ({
  type: SET_CONFERENCE_DETAIL,
  payload
})

// Conference

export const setSubConferenceLoading = payload => ({
  type: SET_SUB_CONFERENCE_LOADING,
  payload
})

export const setSubConferenceFailure = payload => ({
  type: SET_SUB_CONFERENCE_FAILURE,
  payload
})

export const setSubConferenceData = payload => ({
  type: SET_SUB_CONFERENCE_DATA,
  payload
})

export const setCurrentSubConference = payload => ({
  type: SET_CURRENT_SUB_CONFERENCE,
  payload
})

export const setCurrentDoc = payload => ({
  type: SET_CURRENT_DOC,
  payload
})

export const setPdfLoading = payload => ({
  type: SET_PDF_LOADING,
  payload
})

export const setReadConference = payload => ({
  type: SET_READ_CONFERENCE,
  payload
})

// CreateConference
export const setCreateConferenceSuccess = isCreateConferenceSuccess => ({
  type: SET_CREATE_CONFERENCE_SUCCESS,
  isCreateConferenceSuccess
})

export const setSelectedConferenceBtn = btnSelected => ({
  type: SET_SELECTED_CONFERENCE_BUTTON,
  btnSelected
})

export const setCreateConferencePage = page => ({
  type: SET_CREATE_CONFERENCE_PAGE,
  page
})

export const setCreateConferenceName = name => ({
  type: SET_CREATE_CONFERENCE_NAME,
  name
})

export const setCreateConferenceDetail = detail => ({
  type: SET_CREATE_CONFERENCE_DETAIL,
  detail
})

export const setCreateConferenceState = state => ({
  type: SET_CREATE_CONFERENCE_STATE,
  state
})

// affter send req to server
export const setCreateConferenceId = id => ({
  type: SET_CREATE_CONFERENCE_ID,
  id
})



export const addSubConference = (pdf, title, meeting_time, sub_id) => ({
  type: ADD_SUB_CONFERENCE, pdf, title, meeting_time, sub_id
})

export const removeSubConference = (index) => ({
  type: REMOVE_SUB_CONFERENCE,
  index
})


export const UserConference = (payload) => ({
    type: SELECTED_CONFERENCE_PERSON,
    payload: payload
})
export const addUserConference = ( user_id ) => ({

})




/*
 * map action creators
 */

export const loginSuccess = (username, password) => dispath => {
  dispath(setLoginSuccess(false))
  dispath(setLoginFailure(false))
  CommonService.loginApi({username, password}).then(result => {
    dispath(setLoginSuccess(true))
    dispath(setUserId(result.user_id))
    dispath(setFirstname(result.name))
    dispath(setLastname(result.lastname))
    dispath(setDepartment(result.department))
    dispath(setDepartmentId(result.department_id))
    dispath(setUserRole(result.role))
  }).catch(err => {
    dispath(setLoginSuccess(false))
    dispath(setLoginFailure(true))
  })
}

export const logoutSuccess = () => dispath => {
  dispath(setLoginFailure(false))
  CommonService.logoutApi().then(result => {
    dispath(setLoginSuccess(!result))
    dispath(setUserId(-1))
    dispath(setFirstname(''))
    dispath(setLastname(''))
    dispath(setDepartment(''))
    dispath(setDepartmentId(-1))
    dispath(setUserRole('Normal User'))
  }).catch(err => {
    console.log('logout err')
  })
}

export const tryToGetConferenceData = () => dispath => {
  dispath(setGetConferenceDataFailure(false))
  
  CommonService.getConferenceApi().then(result => {
    dispath(setConferenceData(result))
  }).catch(err => {
    dispath(setGetConferenceDataFailure(true))
  })

}

export const tryToGetSubConferenceData = (conference_id) => dispath => {
  dispath(setSubConferenceLoading(true))
  dispath(setSubConferenceFailure(false))
  CommonService.getSubConferenceApi({conference_id}).then(result => {
    dispath(setSubConferenceData(result))
    dispath(setSubConferenceLoading(false))
  }).catch(err => {
      dispath(setSubConferenceFailure(true))
      dispath(setSubConferenceLoading(false))
    })
}

export const tryToSaveReadConference = (doc_id, user, currentSub) => dispath => {
  
  CommonService.saveReadConference({doc_id, user}).then(result => {
    dispath(setReadConference(currentSub))
  }).catch(err => {
    console.log(err)
  })
  
}