import { server } from "./Config";

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

export const loginApi = data =>
  new Promise((resolve, reject) => {
    fetch(server + "/user/login", {
      ...initPost,
      body: JSON.stringify(data)
    })
      .then(result => result.json())
      .then(resultJson => {
        if (resultJson.success) {
          resolve(resultJson);
        } else {
          reject(resultJson.error_message);
        }
      });
  });

export const logoutApi = () => new Promise((resolve, reject) => {
  fetch(server + '/user/login', {
    ...initGet,
  }).then(result => result.json())
  .then(resultJson => {
    if(resultJson.success) {
      resolve(resultJson.success)
    } else {
      reject(false)
    }
  }).catch(err => reject(err))
})

export const departmentApi = () =>
  new Promise((resolve, reject) => {
    fetch(server + "/department", {
      ...initGet
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          resolve(responseJson.result);
        } else {
          reject(responseJson.message.error_message);
        }
      })
      .catch(err => {
        reject(err);
      });
  });

export const getConferenceApi = () =>
  new Promise((resolve, reject) => {
    fetch(server + "/get_conference", {
      ...initGet
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          resolve(responseJson.result);
        } else {
          reject(responseJson.message.error_message);
        }
      })
      .catch(err => reject(err));
  });

export const getSubConferenceApi = data => 
  new Promise((resolve, reject) => {
    fetch(server + '/get_sub_conference', {
      ...initPost,
      body: JSON.stringify(data)
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

export const saveReadConference = data => new Promise((resolve, reject) => {
  fetch(server + '/save_read_conference', {
    ...initPost,
    body: JSON.stringify(data)
  }).then(result => result.json())
  .then(resultJson => {
    if(resultJson.success) {
      resolve(true)
    } else {
      reject(false)
    }
  }).catch(err => reject(false))
})