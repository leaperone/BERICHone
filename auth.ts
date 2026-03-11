// import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { type User } from "next-auth";
import Github from "next-auth/providers/github";
// import { getDb, hasDatabase } from "@/lib/db";
// import { accounts, authenticators, sessions, users, verificationTokens } from "@/lib/schema";

declare module "next-auth" {
  interface Session {
    user: {
      createdAt: Date;
      username: string;
    } & User;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  // DB adapter disabled — using JWT sessions
  // ...(hasDatabase && {
  //   adapter: DrizzleAdapter(getDb(), {
  //     usersTable: users,
  //     accountsTable: accounts,
  //     sessionsTable: sessions,
  //     verificationTokensTable: verificationTokens,
  //     authenticatorsTable: authenticators,
  //   }),
  // }),
  providers: [Github],
  callbacks: {
    async session({ session, user }) {
      console.log("get session", session, user);
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      console.log("create user", user);
    },
  },
});
