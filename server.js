import express from 'express'
import Connection from './Database/db.js';
import DefaultData from './default.js';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import Routes from './routes/routes.js'
import path from 'path'

const __dirname = path.resolve();

//sare config uthaega .env se
dotenv.config();
const port = process.env.PORT || 8000;
//PORT heroku apne aap lelega
const app = express();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use("/", Routes)

const user = process.env.MONGO_USER;
const pswd = process.env.MONGO_PASSWORD;
const URL = `mongodb+srv://${user}:${pswd}@ecommerce.a6uh6.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
Connection(process.env.MONGODB_URI || URL)

//heroku par NODE_ENV ki value by default production hoti he
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('Frontend/build')); 
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend','build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server is Successfully Running at ${port}`)
})

DefaultData();