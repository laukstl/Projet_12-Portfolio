import { NextApiRequest, NextApiResponse } from 'next';

export const runMiddleware = (req: NextApiRequest, res: NextApiResponse, middlewares: any[]) => {
  return new Promise((resolve, reject) => {
    const run = (index: number) => {
      if (index >= middlewares.length) {
        return resolve(null);
      }
      const middleware = middlewares[index];
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return run(index + 1);
      });
    };
    run(0);
  });
};
