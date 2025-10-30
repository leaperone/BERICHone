// ===============================
// Temporarily DISABLED database initialization and db client. No DB in use currently.
// ===============================
// import { PrismaClient as PrismaTemplateClient } from '@/prisma/client_template';
//
// // Global type declaration
// declare const globalThis: {
//   prismaTemplateGlobal: ReturnType<typeof createTemplateClient>;
// } & typeof global;
//
// // Create client singleton
// const createTemplateClient = () => new PrismaTemplateClient();
//
// // Init client instance
// export const templateDb = globalThis.prismaTemplateGlobal ?? createTemplateClient();
//
// // Save instance for development
// if (process.env.NODE_ENV !== 'production') {
//   globalThis.prismaTemplateGlobal = templateDb;
// }
//
// export const prisma = templateDb;
