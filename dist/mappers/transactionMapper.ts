//@mappers/transactionMapper.ts
import { TransactionModel } from "../models/transactionModel.ts";

export const transactionsMapper = {
  
    mapToTransactionModel: (data: any): TransactionModel => {
      const [year, month, day] = data.date.split("-").map(Number);
      const localDate = new Date(year, month - 1, day);

      return {
      id: data.id as TransactionModel["id"],
      year: data.year as TransactionModel["year"],
      month: data.month as TransactionModel["month"],
      day: data.day as TransactionModel["day"],
      weekday: data.weekday as TransactionModel["weekday"],
      date: localDate.toLocaleDateString("en-US") as TransactionModel["date"],
      category: data.category as TransactionModel["category"],
      subCategory: data.sub_category ?? null,
      amount: data.amount,
      business: data.business,
      city: data.city ?? null,
      state: data.state as TransactionModel["state"],
      description: data.description ?? null,
      comments: data.comments ?? null,
      recipient: data.recipient as TransactionModel["recipient"],
      necessity: data.necessity as TransactionModel["necessity"],
      reimburse: data.reimburse as TransactionModel["reimburse"],
      recurring: data.recurring as TransactionModel["recurring"],
      ex: data.ex ?? false,
      number: data.number
    };
  },
  
    mapToTransactionModels: (dataArray: any[]): TransactionModel[] =>
      dataArray.map(transactionsMapper.mapToTransactionModel),
  };
  