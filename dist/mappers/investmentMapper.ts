//@mappers/investmentMapper.ts
import { InvestmentModel } from "../models/investmentModel.ts";

export const investmentMapper = {
  mapToInvestmentModel: (data: any): InvestmentModel => ({
    id: data.id as `${string & { length: 6 }}`,
    startDate: new Date(data.start_date).toLocaleDateString(
      "en-US",
    ) as InvestmentModel["startDate"],
    endDate: new Date(data.end_date).toLocaleDateString(
      "en-US",
    ) as InvestmentModel["endDate"],
    month: data.month as InvestmentModel["month"],
    year: data.year as InvestmentModel["year"],
    beginningBalance: data.beginning_balance ?? null,
    endingBalance: data.ending_balance ?? null,
    changeInValue: data.change_in_value ?? null,
    changeInPercentage: data.change_in_percentage ?? null,
    type: data.type,
    number: data.number,
    comments: data.comments ?? null
  }),

  mapToInvestmentModels: (dataArray: any[]): InvestmentModel[] =>
    dataArray.map(investmentMapper.mapToInvestmentModel),
};
