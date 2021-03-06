let { indexView, indexSetView, chatView, chatSetView, clearView, chatFrameView, profileView } = require('./routes/router')
let cookieParser = require('cookie-parser')
let express = require('express');
let uuid = require('uuid');
let app = express();
const port = process.env.PORT || 8080; //For Heroku

let secret = uuid.v4(); 
console.log(secret);

app.use("/assets", express.static("assets"));
app.use(cookieParser(secret));

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.get('/', indexView);
app.post('/', indexSetView);

app.get('/chat', chatView);
app.get('/chat_view', chatFrameView);
app.post('/chat', chatSetView);

app.get('/clear',  clearView);
app.get('/profile', profileView);

app.listen(port); 