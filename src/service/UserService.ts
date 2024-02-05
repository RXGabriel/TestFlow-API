import bcrypt from "bcrypt";
import { User } from "../models/User";

export const createUser = async (email: string, password: string) => {
  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new Error("E-mail já existe");
    }

    const hash = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      email,
      password: hash,
    });

    return newUser;
  } catch (error) {
    return error;
  }
};

export const findByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

export const matchPassword = async (
  passwordtext: string,
  encrypted: string
) => {
  return bcrypt.compareSync(passwordtext, encrypted);
};

export const listAll = async () => {
  return await User.findAll();
};
