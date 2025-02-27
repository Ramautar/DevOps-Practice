const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
    res.send('Hello from NodeJS!!!');
});

app.listen(port, () =>{
    console.log(`NodeJS app listening at http://localhost:${port}`);
});

