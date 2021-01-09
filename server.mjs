import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js"
import Cors from "cors";


//nodemon --experimental-modules server.mjs

//var express = require('express');
//var mongoose = require('mongoose');
//var Cards = require("./dbCards.js");
//var cors = require("cors");

//nodemon server.js


//App Config
var app=express();
const port= process.env.PORT||8001;
const connection_url = `mongodb+srv://admin:PNkufTNtP6J4Dcvr@cluster0.vw2ah.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(Cors());


//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//API Endpoints
app.get("/",(req,res)=>res.status(200).send("Hello World"));

app.post("/tinder/cards",(req,res)=>{
    const dbCard=req.body;

    Cards.create(dbCard,(req,res)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port,()=>console.log(`listening on localhost:${port}`));
