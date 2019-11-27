const express = require('express');
require('./db/mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
const port = process.env.PORT;


app.use(express.json());

app.use(cors({origin: '*'}));
app.use(routes.recipeRouter);
app.use(routes.userRouter);
app.use(routes.publisherRouter);

app.listen(port,()=>{
    console.log(`Forkify server is up and running on port ${port}`);
})