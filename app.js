const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {ticketmodel} = require("./models/ticket")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://poornima25:poornima25182220@cluster0.dg8g8.mongodb.net/ticketdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let ticket = new ticketmodel(input)
    ticket.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    ticketmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/search",(req,res)=>{
    let input = req.body
    ticketmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/delete",(req,res)=>{
    let input = req.body
    ticketmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
    
})

app.listen(8085,()=>{
    console.log("server started")
})
