import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'
const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

// ... your REST API routes will go here

// * GET ALL USERS : 
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
  })
// 

// * GET ALL USER BY LOGIN : 
app.get(`/user/:username`, async (req, res) => {
  const { username } = req.params
  const user = await prisma.user.findUnique({
    where: { login: String(username) },
  })
  res.json(user)
})

/**
 * * CREATE USER :
 * @param req.body Provide the data to be saved in Json format
 */
 app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  })
  res.json(result)
})




/**
 * * CREATE USER :
 * @param req.body Provide the data to be saved in Json format
 */
 app.post(`/user`, async (req, res) => {
    const result = await prisma.user.create({
      data: { ...req.body },
    })
    res.json(result)
  })

  

// 404 Not Found 
app.use(function(req, res, next) {
    res.status(404).json({"status": 404, message: "Sorry, Route not Found !"});
  });
  
app.listen(PORT,() =>
    console.log(`REST API server ready at: http://localhost:${PORT} 🚀`),
)