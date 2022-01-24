import express from 'express';
import { createConnection, Connection, createConnections } from 'typeorm';
const App = express();
const conn = createConnections([
  {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Jompsik1',
    database: 'blog'
  }
]);

App.get('/users', async (req, res) => {});
App.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

export = App;
