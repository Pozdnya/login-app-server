import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { authRouter } from './routes/auth.route.js'

const app = express()

app.use(cors({
  credentials: true
}))

app.get('/', (req, res) => {
  res.send('Hi everyone')
})

app.use(authRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
})
