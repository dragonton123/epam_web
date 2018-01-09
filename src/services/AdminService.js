import { server, testServer } from './Config'

const headers = new Headers()
headers.append('Accept','application/json')
headers.append('Content-Type','application/json')

const initPost = {
  method: "POST",
  headers,
  credentials: "include"
};

const initGet = {
  method: "GET",
  headers,
  credentials: "include"
};

export const createConferenceApi = data => new Promise((resolve, reject) => {
  fetch(server + '/create_conference', {
    ...initPost,
    body: JSON.stringify(data)
  }).then(result => result.json())
  .then(resultJson => {
    console.log(resultJson)
    if(resultJson.success)
      resolve(resultJson.conference_id)
    else
      reject(false)
  }).catch(err => {
    reject(err)
  })
})

export const admin_create_sub_conference = data => {
  for (var pair of data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  fetch(testServer + "/create_sub_conference", {
    ...initPost,
    body: data
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log("responseJson ", responseJson);
    })
    .catch(err => {
      console.log("err ", err);
    });
};

export const admin_create_department = (department) => new Promise((resolve, reject) => {
  fetch(server + '/create_department', {
    ...initPost,
    body: JSON.stringify(department)
  })
  .then(response => response.json())
  .then(responseJson => {
    if( responseJson.success ) {
      resolve(responseJson)
    } else {
      reject(responseJson.error_message)
    }
  })
})

// add user to conference
export const getDepartmentApi = () => new Promise((resolve, reject) => {
  fetch(server + '/department', {
    ...initGet,
  }).then(response => response.json())
  .then(responseJson => {
    if(responseJson.success) {
      resolve(responseJson.result)
    } else {
      reject(responseJson)
    }
  }).catch(err => {
    reject(err)
  })
})

export const getUserFromDepartmentApi = (department_id) => new Promise((resolve, reject) => {
  fetch(server + '/person_department', {
    ...initPost,
    data: JSON.stringify(department_id)
  }).then(response => response.json())
  .then(responseJson => {
    if(responseJson.success) {
      resolve(responseJson.result)
    } else {
      reject(responseJson)
    }
  }).catch(err => {
    reject(err)
  })
})