import UserTwo from "../models/user.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

dotenv.config();

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    email === "" ||
    password === "" ||
    username === ""
  ) {
    next(errorHandler(400, "All field are required"));
  }

  if (password.length < 6) {
    next(errorHandler(400, "Password must be at least 6 character"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new UserTwo({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Sign Up successful");
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { password, email } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All field are required"));
  }

  try {
    const validUser = await UserTwo.findOne({ email });
    if (!validUser) return next(errorHandler(400, "Invalid credentials"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(400, "Invalid credentials"));

    const token = jwt.sign(
      {
        id: validUser._id,
        isAdmin: validPassword.isAdmin,
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
