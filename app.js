const express =  require('express');
const helmet = require("helmet");
const app = express();
const ejs = require("ejs");

app.set('view engine','ejs');
app.set('views','./views');
app.use('/public',express.static(__dirname+'/public'));

app.use(helmet());
app.use(express.json()); // post방식 값 받아오기
app.use(express.urlencoded()); // post방식 값 받아오기

const mainRouter = require("./router/mainRouter");
app.use('/',mainRouter);

app.listen(3000,function(req,res)
{
    console.log("서버가 실행됨");
})

