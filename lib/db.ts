// DB disabled — no database needed for current BERICHone landing page
//
// import { drizzle } from "drizzle-orm/node-postgres";
// import * as schema from "./schema";
//
// type DbClient = ReturnType<typeof drizzle<typeof schema>>;
//
// const g = globalThis as unknown as {
//   drizzleGlobal: DbClient | undefined;
// };
//
// function createClient(): DbClient {
//   const url = process.env.DATABASE_URL ?? process.env.TEMPLATE_DATABASE_URL;
//   if (!url) {
//     throw new Error("DATABASE_URL is not set");
//   }
//   return drizzle(url, { schema });
// }
//
// export function getDb(): DbClient {
//   if (!g.drizzleGlobal) {
//     g.drizzleGlobal = createClient();
//   }
//   return g.drizzleGlobal;
// }
//
// export const hasDatabase = !!(process.env.DATABASE_URL ?? process.env.TEMPLATE_DATABASE_URL);
