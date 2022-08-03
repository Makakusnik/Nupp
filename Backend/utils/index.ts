import { Request, Response } from "express";
import jwt from "jsonwebtoken";

function verify(req: Request, res: Response, next: () => void) {
  const authHeader: string = req.headers.token as string;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as jwt.Secret, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

export default verify;
