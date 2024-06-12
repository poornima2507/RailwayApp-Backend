const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {ticketmodel} = require("./models/ticket")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input = req.body
    let ticket = new ticketmodel(input)
    ticket.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    res.send("view")
})

app.get("/search",(req,res)=>{
    res.send("search")
})

app.get("/delete",(req,res)=>{
    res.send("delete")
})

app.listen(8085,()=>{
    console.log("server started")
})
