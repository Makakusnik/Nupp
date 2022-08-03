import { JwtPayload } from "jsonwebtoken";
import { UserType } from "./Model Schemas/User";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | undefined | UserType;
    }
  }
}
