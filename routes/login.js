import express from 'express'

/**
 * loginRoute
 */
const loginRoute = express.Router()

loginRoute.route('/').get((req, res) => {
  res.render('login')
})

export default loginRoute
