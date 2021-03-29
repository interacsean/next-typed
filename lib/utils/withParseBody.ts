import { NextApiRequest, NextApiResponse } from "next";
import { Route } from '../types/Route';

export default function withParseBody<T, U, E>(controller: Route<T, U, E>) {
  return (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    let bodyData = null;
    try {
      bodyData = req.body ? JSON.parse(req.body) : null;
    } catch (e) {
      bodyData = null;
    }
    const newReq = {
      ...req,
      body: bodyData
    };

    // @ts-ignore
    return controller(newReq, res, next);
  };
}
