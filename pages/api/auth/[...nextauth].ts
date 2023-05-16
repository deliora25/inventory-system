import { UserOnLogin } from "@/types";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as UserOnLogin;

        //login logic
        //find user in db

        const response = await axios("http://localhost:4000/users");
        const { data } = response || {};

        let user = null;
        data.forEach((x: UserOnLogin) => {
          if (x.email === email && x.password === password) {
            user = x;
          }
        });

        if (!user) {
          throw new Error("Please log in or sign up!");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};

export default NextAuth(authOptions);
