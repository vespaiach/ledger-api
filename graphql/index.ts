import express, { NextFunction, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { PrismaClient } from '@prisma/client';

import schema from './schema';
import root from './resolver';
import { RequestContext } from './types';

const app = express();
const prisma = new PrismaClient();

// @ts-ignore
app.use((req: RequestContext, _res: Response, next: NextFunction) => {
    req.prisma = prisma;
    next();
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
