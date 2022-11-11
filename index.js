const express = require('express');
const server=express();
const fs = require('fs');
const user = require('./user.json');
server.post('/student/add',(req,res)=>{
    res.status(200)
    res.send(JSON.stringify(user));
})
server.get('/student/getDetails',(req,res)=>{
    res.status(200).send(JSON.stringify(user));
})

const data = fs.readFileSync("user.json","utf-8");
console.log(data);

server.listen(3000,()=>console.log('server started...'))