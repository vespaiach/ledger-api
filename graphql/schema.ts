import { buildSchema } from 'graphql';

const schema = buildSchema(`
scalar Date

type Query {
    transactions(dateFrom: Date!, dateTo: Date!, skip: Int, take: Int): [Transaction!]!
    years: [Int]
}

type Transaction {
    id: ID!
    date: Date!
    amount: Float!
    description: String!
    category: String!
    transactionType: TransactionType
}

enum TransactionType {
    IN
    EX
}

input TransactionInput {
    skip: Int
    take: Int
    dateFrom: Date!
    dateTo: Date!
}
`);

export default schema;
