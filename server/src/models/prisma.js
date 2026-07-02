import { PrismaClient } from "../../prisma/generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import PG from "pg";
console.log('Создание пула соединения и адаптера...');
const pool = new PG.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
console.log('Создание prisma клиента...');
const prisma = new PrismaClient({ adapter });
export { prisma };
