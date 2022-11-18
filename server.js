const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.sendfile("index.html");
})

app.get("about",(req,res)=>{
    res.sendfile("about.html");
})

app.post("/postMessage",(req,res)=>{
    console.log(req.body)
    res.render("messages",req.body)
})



app.listen(5000)