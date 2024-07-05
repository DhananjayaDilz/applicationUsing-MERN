//import express, { request, response } from 'express';
//import { PORT, mongoDBURL } from './config.js';
//import mongoose from "mongoose";
//import http from "http";
const http = require('http');
const getReq = require("./methods/get");
const postReq = require("./methods/post");
const putReq = require("./methods/put");
const deleteReq = require("./methods/dlt");
let movies = require("./data/movies.json");




const port = 5001;

const server = http.createServer((req, res) => {
    req.movies = movies;
    switch (req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;

        default:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write(JSON.stringify({title:"Not Found", message:"route Not Found index.js"}));
            res.end();
            break;
    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})





{/*const app = express();

app.get('/', (request,response)=>{
    console.log(request);
    return response.status(234).send("hello node ");
})

mongoose.connect(mongoDBURL).then(()=>{
     console.log ("database connected ");
     app.listen(PORT,() => {
        console.log(`Server is running on port ${PORT}`);
    });
    
}).catch((error)=>{
    console.log(error);
})*/}

