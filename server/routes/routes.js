const express = require('express')
const router = express.Router()
const request = require('superagent')

module.exports = router

// Server use '/home'
router.get('/', (req, res) => {
  console.log('Hello!')
  request.get('https://random-d.uk/api/v2/random')
    .then(response => {
      console.log(response.body)
      res.json({ output: response.body.url })
      return null
    }).catch(err => console.error(err))
  // const duckData = res.body
})
