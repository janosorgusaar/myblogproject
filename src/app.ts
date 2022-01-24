import express from 'express';
import {
  createConnection,
  Connection,
  createConnections,
  ConnectionOptions
} from 'typeorm';
const App = express();

App.get('/users', async (req, res) => {});
App.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

export = App;
