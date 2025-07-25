//@models/budgetModel.ts
import { TransactionCategory } from "./transactionModel.ts";
import { CommonFields } from "./commonModel.ts";

export type BudgetModel = CommonFields & {
    category : TransactionCategory,
    amount : number
};