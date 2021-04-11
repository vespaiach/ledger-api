import { RequestContext } from './types';

const root = {
    transactions: (
        {
            dateFrom,
            dateTo,
            skip = 0,
            take = 100,
        }: { dateFrom: Date; dateTo: Date; skip: number; take: number },
        req: RequestContext
    ) => {
        return req.prisma.transaction.findMany({
            skip,
            take,
            where: {
                date: {
                    gte: dateFrom,
                    lt: dateTo,
                },
            },
            orderBy: {
                date: 'desc',
            },
        });
    },

    years: ()=>{
        return require.prisma.
    }
};

export default root;
