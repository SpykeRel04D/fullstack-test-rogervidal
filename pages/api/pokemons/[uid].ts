import type { NextApiRequest, NextApiResponse } from 'next';
import _ from 'underscore';
import db from '../../../services/db.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { uid },
  } = req;
  res.statusCode = 200;
  res.json(_.where(db.pokemon, { num: uid }));
};
