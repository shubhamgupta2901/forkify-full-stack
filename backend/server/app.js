const express = require('express');
require('./db/mongoose');
// const RecipeRouter = require('./routes/controllers/recipe');
// const UserRouter = require('./routes/controllers/user');
const routes = require('./routes/routes');
const app = express();
const port = process.env.PORT;

app.use(express.json());


app.use(routes.recipeRouter);
app.use(routes.userRouter);
app.use(routes.publisherRouter);

app.listen(port,()=>{
    console.log(`Forkify server is up and running on port ${port}`);
})