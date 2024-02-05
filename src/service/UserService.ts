import bcrypt from "bcrypt";
import { User } from "../models/User";

export const createUser = async (email: string, password: string) => {
  const hasUser = await User.findOne({ where: { email } });

  if (!hasUser) {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hash,
    });
    return newUser;
  } else {
    return new Error("Email ja existente");
  }
};
export const findByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

export const matchPassword = (passwordtext: string, encrypted: string) => {
  try {
    const result = bcrypt.compareSync(passwordtext, encrypted);
    return result;
  } catch (error) {
    console.error("Error matching password:", error);
    return false;
  }
};

export const listAll = async () => {
  return await User.findAll();
};
