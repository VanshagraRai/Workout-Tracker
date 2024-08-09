const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.json("hello");
})

app.listen(4000,()=>{
    console.log("listening on PORT 4000")
})