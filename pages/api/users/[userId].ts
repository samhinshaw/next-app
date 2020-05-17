import { NextApiRequest, NextApiResponse } from 'next';
import UserService from 'backend/user.service';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    const userId = Number(req.query?.userId);
    if (typeof userId !== 'number' || Number.isNaN(userId)) {
      throw new Error('Invalid User ID Specified.');
    }
    const User = UserService.getUserById(userId);

    res.status(200).json(User);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
