const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({urlencoded:true}))

app.get("/",(req,res)=>{
    res.sendfile("index.html");
})

app.get("about",(req,res)=>{
    res.sendfile("about.html");
})

app.post("/postMessage",(req,res)=>{
    console.log(req.body)
    res.send("got the new changes")
})

app.listen(5000)