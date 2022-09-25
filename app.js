import express from 'express'
import cors from 'cors'
import axios from 'axios'
import * as dotenv from 'dotenv'

import { corsOptions } from './config.js'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors(corsOptions))

const { UNIQUE_API_KEY = '', PORT = 3000 } = process.env

const getLocation = async (place) => {
  const URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&language=th&type=restaurant&key=${UNIQUE_API_KEY}`

  const response = await axios({
    method: 'get',
    url: URL,
    headers: {},
  })

  return response
}

app.get('/location', async (req, res) => {
  const placeSearch = req.query.place || 'Bang Sue'

  try {
    const response = await getLocation(placeSearch)

    res.json(response.data.results)
  } catch (error) {
    res.json({ msg: 'the system has an error' })
  }
})

app.listen(PORT, () => console.log(`node is running on PORT ${PORT}`))
