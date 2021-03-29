import { NextApiRequest, NextApiResponse } from "next";

type Controller = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => void;

export default function withParseBody(controller: Controller) {
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
