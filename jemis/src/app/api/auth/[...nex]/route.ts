import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";

dotenv.config();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
