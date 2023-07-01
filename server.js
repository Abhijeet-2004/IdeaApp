const express = require('express');
const ServerConfig=require('./configs/server.config');
const app=express();

app.listen(ServerConfig.PORT,()=>{
console.log ('Server started on the port number '+ServerConfig.PORT);
})