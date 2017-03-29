const express = require('express');
const expressGraphQl = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQl({
    graphiql: true,
    schema: schema
  })
);

app.listen(4000, () => {
  console.log('Listening on port : ' + 4000);
});
