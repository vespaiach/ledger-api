import { PrismaClient, TransactionType } from '@prisma/client';
import faker from 'faker';
const prisma = new PrismaClient();

const expensesCategories = [
    'food',
    'gifts',
    'health/medical',
    'home',
    'transportation',
    'personal',
    'pets',
    'utilities',
    'travel',
    'debt',
    'other',
];
const incomeCategories = ['savings', 'paycheck', 'bonus', 'interest', 'other'];

const dummyTransaction = () => {
    let category;
    let transactionType;
    if (faker.random.boolean()) {
        category = expensesCategories[faker.random.number(expensesCategories.length - 1)];
        transactionType = TransactionType.EX;
    } else {
        category = incomeCategories[faker.random.number(incomeCategories.length - 1)];
        transactionType = TransactionType.IN;
    }

    return {
        date: faker.date.between('2021-02-07', '2020-04-01'),
        amount: parseFloat(faker.finance.amount(1, 100000, 2)),
        description: faker.lorem.sentence(),
        category,
        transactionType,
    };
};

async function main() {
    await prisma.transaction.createMany({
        data: Array.from(new Array(100)).map(() => dummyTransaction()),
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
