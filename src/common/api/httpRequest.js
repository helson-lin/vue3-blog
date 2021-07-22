/**
 * @description: 请求封装
 * @param {*}
 * @return {*}
 */
import axios from 'axios'
//import qs from 'qs'
const baseUrl  = process.env.NODE_ENV === 'development' ? '/api/' : 'http://wa9lfne.nat.ipyingshe.com'
const http = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    post: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
},
})
http.interceptors.request.use((config) => {
  const configBackup = config;
  if (window.localStorage.getItem('token')) {
      configBackup.headers.Authorization = window.localStorage.getItem('token');
  }
  return configBackup;
});
http.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      if (response.status === 404) {
        return Promise.reject(new Error('接口不存在'))
      } else if (response.status === 502) {
        return Promise.reject(new Error('服务器错误'))
      } else {
        return response
      }
    } else {
      return response
    }
  }
)
export const getData = function (url, query) {
  const promise = new Promise((resolve, reject) => {
    http.get(url, { params: query }).then(res => {
      const { data: result } = res
      if (result) {
        console.log('请求成功', result)
        resolve(result)
      } else {
        console.log('请求失败', result)
        reject(result)
      }
    })
  })
  return promise.then(res => { return res }).catch(error => { return error })
}

export const postData = (url, query) => {
  return new Promise((resolve, reject) => {
    http.post(url, query).then(res => {
      const { data: result } = res
      if (result) {
        console.log('请求成功', result)
        resolve(result)
      } else {
        console.log('请求失败', result)
        reject(result)
      }
    })
  })
}