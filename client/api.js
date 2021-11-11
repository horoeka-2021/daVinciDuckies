import request from 'superagent'

const homeUrl = '/api/v1/home/'

export function getData () {
  return request
    .get(homeUrl)
    .then(response => response.body)
}
