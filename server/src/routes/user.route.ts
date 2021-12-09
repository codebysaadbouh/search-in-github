import { getUsers, getUser, addUser } from './../controllers/user.controller';
import { Router } from 'express';

export const user = Router()

// *CREATE USER
user.post('/adduser', addUser)

// *GET ALL USERS 
user.get('/getusers', getUsers)

// *GET USER BY USERNAME
user.get('/getuser/:username', getUser)


export default user; 