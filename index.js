const express = require('express');
//const bodyParse = require('body-parser');
const app = express();
const port = 6001;


app.get('/',(req,res)=> {
    res.json({})
})


app.listen(port,()=> {
    console.log(`listening on port: ${port}`)
})
