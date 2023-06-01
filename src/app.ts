import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/user/user.routes'
const app: Application = express()

// parser
app.use([express.json(), cors()])

app.use('/api/v1/user', usersRouter)

export default app
