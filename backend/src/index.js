const express = require('express');
require('./db/mongoose');
const RecipeRouter = require('./routers/recipe');

const app = express();
const port = process.env.PORT;

app.use(RecipeRouter);


app.listen(port,()=>{
    console.log(`Forkify server is up and running on port ${port}`);
})