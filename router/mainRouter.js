const express = require('express');
const router = express.Router();

router.get("/",function (req,res)
{
    res.render('index',{title:"EJS MAINPAGE"});
})

router.get("/about",function(req,res)
{
    res.send('about page');
})

router.post("/postget",function(req,res)
{
    let body = req.body;
    console.log(body);
    res.send('post')
})

module.exports = router;