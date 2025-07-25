//@mappers/budgetMapper.ts
import { BudgetModel } from "@models/budgetModel.ts";

export const budgetMapper = {
  mapToBudgetModel: (data: any): BudgetModel => ({
    id: data.id,
    number: data.number,
    category: data.category,
    amount: data.amount,
    comments: data.comments ?? null,
  }),

  mapToBudgetModels: (dataArray: any[]): BudgetModel[] =>
    dataArray.map(budgetMapper.mapToBudgetModel),
};
