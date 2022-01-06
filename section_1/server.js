const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Success Connect database to https://mlab.com/");    
}).catch(err => {
    console.log('Couldn\'t connect to the database. Exiting now!', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Blog Application (Section 1)"});
});
require('./app/routes/article.routes.js')(app);
require('./app/routes/comment.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});