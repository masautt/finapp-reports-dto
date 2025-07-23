import { TransactionCategory } from "./transaction.ts";
import { CommonFields } from "./common.ts";

export type BudgetModel = CommonFields & {
    category : TransactionCategory,
    amount : number
};