const serve = require('koa-static');
const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');

const initDB = require('./database');
initDB();

const app = new Koa();

app.use(serve('./build'));

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema,
    })
  )
);

app.listen(4000);
