require('dotenv').config()
import express from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 8000
const HOSTNAME = process.env.HOSTNAME || `127.0.0.1`

// Import Routes
import user from './routes/user.route'


app.use(cors())
app.use(express.json())

// Routes Middleware 🪐
app.use('/user', user)




// 404 Not Found 😑
app.use(function(req, res, next) {
    res.status(404).json({"status": 404, message: "Sorry, Route not Found !"});
  });

// Server Listen ⚡  
app.listen(PORT,() =>
    console.log(`REST API server ready at: http://${HOSTNAME}:${PORT} 🚀`),
)