
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


//connect mongodb
const connection_url = process.env.MONGODB_URL;

const PORT = process.env.PORT || 5000;

//routes
app.use('/posts', postRoutes);

mongoose.connect(connection_url, {
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => {
 app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
}).catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)

