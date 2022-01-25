import express, { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import User from '../../entities/user';
const router = express.Router();

interface UserInput {
  firstName: string;
  middleName?: string;
  lastName: string;
  mobile: string;
  email: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    let {
      firstName,
      middleName,
      lastName,
      mobile,
      email
    } = req.body as UserInput;

    const user = new User();
    user.firstName = firstName;
    user.middleName = !null ? middleName : '';
    user.lastName = lastName;
    user.mobile = mobile;
    user.email = email;

    let newUser = await user.save();
    if (!newUser) {
      throw new Error();
    }
    res.send(newUser);
  } catch (error) {
    res.send({ message: 'Unable to create new user', message: error.message });
  }

  return;
});