import { PrismaClient } from '@prisma/client';
import { Request } from 'apollo-server';

export interface RequestContext extends Request {
    prisma: PrismaClient;
}
