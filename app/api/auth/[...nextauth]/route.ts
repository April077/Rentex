import { login } from "@/lib/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {

    providers:
        [
            Credentials({
                name: "Credentials",
                credentials: {
                    username: { label: "Username", type: "text" },
                    email: { label: "Email", type: "email" },
                    password: { label: "Password", type: "password" }
                },
                async authorize(credentials, req) {
                    if (!credentials?.username || !credentials.password || !credentials.email) return null;
                    try {
                        const user = await login(credentials.username, credentials.email, credentials.password);
                        return user;
                    } catch (err) {
                        console.error(err);
                        return null;
                    }
                }
            }),

            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_SECRET_ID as string,
            }),
        ],

    secret: process.env.NEXTAUTH_SECRET as string,
    pages: {
        signIn: "/signin"
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
