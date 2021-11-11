import request from 'superagent'

const duckiesUrl = '/api/v1/duckies/'

export function getArt () {
  return request
    .get(duckiesUrl)
    .then(response => response.body)
}
