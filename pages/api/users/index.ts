import { NextApiRequest, NextApiResponse } from 'next';

// TODO: see if passing undefined in the query params hits this route, or if it just comes from hitting /api/users/
export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(404).json({ statusCode: 404, message: 'No User Specified' });
  // res.status(404).end();
};
