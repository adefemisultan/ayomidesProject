import express from 'express'
import exphbs from 'express-handlebars'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
// import conn from './models/dbConn.js'
import loginRoute from './routes/login.js'
import registerRoute from './routes/register.js'

/**
 * Initialize express qpp
 */
const app = express()

// File Upload default option
app.use(fileUpload())

// Setup Template Engine
app.engine('hbs', exphbs({ extname: 'hbs' }))
app.set('view engine', 'hbs')

// Setup Static Folder
app.use(express.static('public'))
app.use(express.static('upload'))

dotenv.config()

app.get('/', (req, res) => {
  res.render('home')
})

app.use('/login', loginRoute)
app.use('/register', registerRoute)

const port = process.env.PORT || 5000

// routes
// app.use('/', testRoute)

app.listen(port, () => {
  console.log(`App started and listening on port ${port}`)
  //   conn.connect((err) => {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       console.log(`DB Connected on id: ${conn.threadId}`)
  //     }
  //   })
})
