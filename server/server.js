const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

const schema = require('./schema/schema');
const routes = require('./Routes/routes');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/graphql',expressGraphQL({
  schema,
  graphiql:true
}));

app.use('/api',routes);

module.exports = ()=>(
  app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
  })
);
