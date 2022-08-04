import { Request, Response } from "express";
import jwt, { VerifyOptions } from "jsonwebtoken";
import User, { UserType } from "../../Model Schemas/User.js";
import CryptoJS from "crypto-js";
import { Error } from "mongoose";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/index.js";

let refreshTokens: string[] = [];

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json("Wrong email!");
      return;
    }
    const bytes = CryptoJS.AES.decrypt(user!.password, process.env.SECRET_KEY!);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      res.status(401).json("Wrong password!");
      return;
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);

    const { password, ...info } = user!._doc;

    res.status(200).json({ ...info, accessToken, refreshToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const register = async (req: Request, res: Response) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY!
    ).toString(),
    roles: req.body.roles,
  });
  try {
    const user = await newUser.save();
    res.status(201).json({ user, message: "Successfully added." });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const currentUserID = req.user?.id;
    const userToEditID = req.params.id;

    if (req.user?.roles.includes("admin") || currentUserID === userToEditID) {
      User.findByIdAndUpdate(
        userToEditID,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
          },
        },
        { returonOriginal: true }
      )
        .then(() => {
          if (req.body.username || req.body.email)
            res.status(200).json("User updated!");
          else res.status(200).json("Theres nothing to update!");
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } else {
      res
        .status(500)
        .json("You are not authenticated to update this user's info.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY!
    ).toString(),
    roles: req.body.roles,
  });
  try {
    const user = await newUser.save();
    res.status(201).json({ user, message: "Successfully added." });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const refresh = async (req: Request, res: Response) => {
  const refreshToken = req.body.token;
  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }

  const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY!);
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

  const newAccessToken = generateAccessToken(decoded as UserType);
  const newRefreshToken = generateRefreshToken(decoded as UserType);

  refreshTokens.push(newRefreshToken);

  res.status(200).json({
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  });
};

export const logout = async (req: Request, res: Response) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
};
