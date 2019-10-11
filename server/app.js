import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import shibes from './routers/shibes'
import cats from './routers/cats'
import birds from './routers/birds'
import animals from './routers/animals'

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public/dist'))

app.use(shibes)
app.use(birds)
app.use(cats)
app.use(animals)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../index.html`))
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
