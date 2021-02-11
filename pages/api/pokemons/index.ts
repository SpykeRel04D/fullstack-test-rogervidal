import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../services/db.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { pokemon } = db;
  res.statusCode = 200;
  res.json(pokemon);
};
