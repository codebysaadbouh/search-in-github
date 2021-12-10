require('dotenv').config()
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { NextFunction, Request, Response } from 'express'
import axios from 'axios';
import { btoa } from 'buffer'
import { Console } from 'console';


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany()
    res.json(users)
}


/* export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params
    const user = await prisma.user.findUnique({
    where: { login: String(username) },
    })
    res.json(user)
} */



export const addUser = async (req: Request, res: Response, next: NextFunction) => {
    const result = await prisma.user.create({
        data: { ...req.body },
      })
      res.json(result)
}


export const getUserFromGithub = async (req: Request, res: Response, next: NextFunction) => {
  
  const { login } = req.params

  const github_login  = String(login)
  
  const user = await prisma.user.findUnique({
    where: { login: String(github_login) },
    })

  if( user!= null) {
    console.log(user); 
    res.json(user)
  }

  else{
    const client_credentials = btoa(process.env.GITHUB_USERNAME+':'+process.env.PERSONAL_ACCESS_TOKEN)
    try {
      const response = await axios.get(`https://api.github.com/users/${github_login}`, { 
      headers: {
      'Authorization': `Basic ${client_credentials}`
      }})
      // console.log(response); 
      const userFromGithub = await prisma.user.create({
      data: { 
      "login": response.data.login,
      "id" : response.data.id,
      "node_id" : response.data.node_id,
      "avatar_url" : response.data.avatar_url,
      "gravatar_id" : response.data.gravatar_id,
      "url" : response.data.url,
      "html_url" : response.data.html_url,
      "followers_url" : response.data.followers_url,
      "following_url" : response.data.following_url,
      "gists_url" : response.data.gists_url,
      "starred_url" : response.data.starred_url,
      "subscriptions_url" : response.data.subscriptions_url,
      "organizations_url" : response.data.organizations_url,
      "repos_url" : response.data.repos_url,
      "events_url" : response.data.events_url,
      "received_events_url" : response.data.received_events_url,
      "type" : response.data.type,
      "site_admin" : response.data.site_admin,
      "name" : response.data.name,
      "company" : response.data.company,
      "blog" : response.data.blog,
      "location" : response.data.location,
      "email" : response.data.email,
      "hireable" : response.data.hireable,
      "bio" : response.data.bio,
      "twitter_username" : response.data.twitter_username,
      "public_repos" : response.data.public_repos,
      "public_gists" : response.data.public_gists,
      "followers" : response.data.followers,
      "following" : response.data.following,
      "created_at" : response.data.created_at,
      "updated_at" : response.data.updated_at,
      },
    })
    res.json(userFromGithub)
    } catch (error) {
      res.status(404).json({message: "Request failed with status code 404", "status": 404});
    } 
  }  
}
