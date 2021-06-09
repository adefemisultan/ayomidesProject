import express from 'express'
// import conn from '../models/dbConn.js'

const registerRoute = express.Router()

registerRoute.route('/').get((req, res) => {
  res.render('register')
})

// registerRoute.route('/').post((req, res) => {
//   conn.query()
// })

export default registerRoute
