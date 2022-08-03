import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../../Model Schemas/User.js";
import CryptoJS from "crypto-js";

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

    const accessToken = jwt.sign(
      { id: user!._id, roles: user!.roles },
      process.env.SECRET_KEY!,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user!._doc;

    res.status(200).json({ ...info, accessToken });
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
