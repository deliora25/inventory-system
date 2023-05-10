import { UserOnLogin } from "@/types";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as UserOnLogin;

        //login logic
        //find user in db
        if (email !== "test123@gmail.com" || password !== "password") {
          throw new Error("Email and password does not match!");
        }

        return { id: "1", name: "sample", email: "sample@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
