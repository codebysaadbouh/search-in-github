import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { NextFunction, Request, Response } from 'express'


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany()
    res.json(users)
}


export const getUser = async (req: Request, res: Response) => {
    const { username } = req.params
    const user = await prisma.user.findUnique({
    where: { login: String(username) },
    })
  res.json(user)
}

export const addUser = async (req: Request, res: Response) => {
    const result = await prisma.user.create({
        data: { ...req.body },
      })
      res.json(result)
}