import { User } from './models/User.js'
import 'dotenv/config'
import { client } from './utils/db.js'

async function initDB() {
  try {
    await client.sync({ force: true })

    console.log('Db Init');
  } catch (error) {
  console.error(error)    
  }
}

initDB()