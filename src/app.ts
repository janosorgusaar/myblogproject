import express from 'express';
import {
  createConnection,
  Connection,
  createConnections,
  ConnectionOptions
} from 'typeorm';
const App = express();

export async function openDatabaseConnection() {
  //await closeDatabaseConnection();
  const options: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Jompsik1',
    database: 'blog'
  };
  const conn = await createConnection(options);
  if (conn.isConnected) {
    throw new Error('Connection to database failed');
  }
  return conn;
}
App.get('/users', async (req, res) => {});
App.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

export = App;
