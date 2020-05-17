import { NextApiRequest, NextApiResponse } from 'next';
import UserService from 'backend/user.service';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    // const userId = req.query?.userId;
    console.log(req);
    const User = UserService.getUserById(101);

    res.status(200).json(User);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
