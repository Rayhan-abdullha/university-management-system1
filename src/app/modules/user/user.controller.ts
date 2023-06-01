import { Response, Request } from 'express'
import userService from './user.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const createdUser = await userService.createUserService(user)
    res.status(201).json({
      msg: 'Created user successfully.',
      createdUser,
    })
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create User',
    })
  }
}
