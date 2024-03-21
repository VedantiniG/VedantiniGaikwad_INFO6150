const express = require("express")
const app = express()
const port = 3000;

import routes from './src/routes/userRoutes';
import bodyParser from 'body-parser';

//connect to mongoDB
const mongoDB = require("mongoose")
mongoDB.connect('mongodb://0.0.0.0:27017/userdb', {
    //useNewUrlParser: true
})
mongoDB.connection
.once("open", () => console.log('Connected'))
.on("error", error => {
    console.log("MongoDB Error: " + error); 
})

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})