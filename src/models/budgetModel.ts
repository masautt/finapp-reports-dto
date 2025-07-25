//@models/budgetModel.ts
import { TransactionCategory } from "@models/transactionModel.ts";
import { CommonFields } from "@models/commonModel.ts";

export type BudgetModel = CommonFields & {
    category : TransactionCategory,
    amount : number
};