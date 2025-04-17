import path from 'node:path';
import * as dotenv from 'dotenv';
import type { PrismaConfig } from 'prisma';

type Env = {
  DATABASE_URL: string;
  PORT: string;
  PRISMA_CLIENT_OUTPUT: string;
};

dotenv.config();

export default {
  earlyAccess: true,
  schema: path.join('prisma', 'schema'),
} satisfies PrismaConfig<Env>;
