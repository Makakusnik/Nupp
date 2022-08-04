import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserType } from "../Model Schemas/User";

function verify(req: Request, res: Response, next: () => void) {
  const authHeader: string = req.headers.token as string;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY as jwt.Secret, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid!");
      }
      if (typeof req.user !== "string") {
        req.user = user as jwt.JwtPayload;
      }
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

export default verify;

export const generateAccessToken = (user: UserType) => {
  return jwt.sign(
    { id: user!.id, roles: user!.roles },
    process.env.SECRET_KEY!,
    {
      expiresIn: "15m",
    }
  );
};

export const generateRefreshToken = (user: UserType) => {
  return jwt.sign(
    { id: user!.id, roles: user!.roles },
    process.env.REFRESH_SECRET_KEY!
  );
};
