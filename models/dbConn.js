import mysql from 'mysql'

const conn = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
})

// Get user profile picture
// rows: get the data as an object
conn.query('SELECT * FROM user WHERE id = "1"', (err, rows) => {})

// update table with profile picture
conn.query(
  'UPDATE user SET profile_image = ? WHERE id = "1"',
  [profile_image.name],
  (err, rows) => {}
)

export default conn
