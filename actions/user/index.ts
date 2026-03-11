"use server";

import { auth } from "@/auth";
// import { getDb } from "@/lib/db";

export const getUserInfo = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user?.id) return null;

  // DB disabled — return basic session user info
  // return await getDb().query.users.findFirst({
  //   where: (users, { eq }) => eq(users.id, user.id as string),
  // });
  return { id: user.id };
};
