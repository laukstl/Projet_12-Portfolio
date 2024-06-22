import { NextApiRequest, NextApiResponse } from 'next';

// fonction qui prend un middleware en argument et le convertit en Promise pour etre utilisé en async dans le handler
export const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

