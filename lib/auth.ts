import { User } from "next-auth"
import { prisma } from "./prisma"
import { compare } from "bcrypt";


type loginType = (username: string, email: string, password: string) => Promise<User | null>;

export const login: loginType = async (email, password) => {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });

    if (user && (await compare(password, user.password))) {
        user.password = "";
        return user;
    } else throw new Error("User not found");
}