import express, { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Users from '../../entities/user';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await Users.find();

    if (!users) {
      return res.send({ message: 'no user found with given ID' });
    }

    return res.send(users);
  } catch (error) {
    return res.send({
      error: 'Unable to create new user',
      message: 'unknown error'
    });
  }
});

export default router;
