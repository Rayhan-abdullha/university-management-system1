import { User } from './user.model'
import { IUser } from './user.interface'
import config from '../../../config'
import { generateUserId } from './user.utils'

const createUserService = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()
  user.id = id.toString()
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)
  if (!createUserService) {
    throw new Error('Faild to create user!')
  }
  return createdUser
}
export default {
  createUserService,
}
