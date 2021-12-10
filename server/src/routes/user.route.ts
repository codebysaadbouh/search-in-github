import { getUsers, /* getUser, */ getUserFromGithub, addUser } from './../controllers/user.controller';
import { Router } from 'express';

export const user = Router()

// *CREATE USER
user.post('/adduser', addUser)

// *GET USER BY USERNAME => IF IT EXISTS IN THE DATABASE, IF IT DOESN'T EXIST IN THE DATABASE IT IS SEARCHED USING THE GITHUB REST API
user.get('/getuser/:login', getUserFromGithub)

// *GET ALL USERS REGISTERED IN THE DATABASE
user.get('/getusers', getUsers)

// *GET USER :
// user.get('/getuser/:username', getUser)

export default user; 