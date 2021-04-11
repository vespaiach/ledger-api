-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('EX', 'IN');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(12,2) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "transactionType" "TransactionType" NOT NULL,

    PRIMARY KEY ("id")
);
