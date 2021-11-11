import request from 'superagent'

const homeUrl = '/api/v1/home/'

function randomIndex (arr) {
  return Math.floor(Math.random() * arr.length)
}

export function getDuck () {
  return request
    .get(homeUrl)
    .then(response => response.body)
}

export function getPrice () {
  return request
    .get('https://www.cheapshark.com/api/1.0/deals')
    .then(response => {
      const index = randomIndex(response.body)
      return response.body[index].salePrice
    })
}
