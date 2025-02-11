import { NextFunction, Request, RequestHandler, Response } from "express"


type AsyncRequest = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<any>;

export default function asyncHandler(fn: AsyncRequest): RequestHandler {
    return (req: Request,res: Response,next: NextFunction) => {
        Promise.resolve(fn(req,res,next))
            .catch(e=>next(e));
    }
}