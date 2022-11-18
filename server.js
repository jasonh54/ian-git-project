const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.sendfile("index.html");
})

app.get("about",(req,res)=>{
    res.sendfile("about.html");
})

app.listen(5000)