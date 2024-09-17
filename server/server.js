const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { Pool } = require('pg');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const pool = new Pool(
  {
    user: '',
    password: '',
    host: 'localhost',
    database: 'equipment_db'
  },
)

const startApolloServer = async () => {
  await server.start();
  await pool.connect();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // if (process.env.NODE_ENV === 'production') {
  //   app.use(express.static(path.join(__dirname, '../client/dist')));

  //   app.get('*', (req, res) => {
  //     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  //   });
  // }
}

app.use('/graphql', expressMiddleware(server));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




startApolloServer();
