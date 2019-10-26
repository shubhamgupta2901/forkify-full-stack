const express = require('express');
require('./db/mongoose');

const app = express();
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Forkify server is up and running on port ${port}`);
})