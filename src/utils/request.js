import Axios from 'axios';

export const parseJSON = response => {
  return new Promise(resolve => {
    resolve({
      status: response.status,
      statusText: response.statusText,
      json: response.data,
    })
  })
}

export const headers = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})

export const request = (method, url, options) => new Promise((resolve, reject) => {
  Axios({
    method: method,
    url: url,
    header: headers(),
    withCredentials: false,
    ...options,
  }).then(parseJSON)
  
    .then(res => resolve(res.json))
    .catch(err => reject(err));
   
}

)
