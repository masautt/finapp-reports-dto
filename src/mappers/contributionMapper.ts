//@mappers/contributionMapper.ts
import { ContributionModel } from "@models/contributionModel.ts";

export const contributionMapper = {
  mapToContributionModel: (data: any): ContributionModel => ({
    id: data.id as `${string & { length: 6 }}`,
    number: data.number,
    comments : data.comments,
    
    amount: data.amount,
    exclude: data.exclude,
    account: data.account,

    year: data.year,
    month: data.month,
    day: data.day,
    weekday: data.weekday,
    date: new Date(data.date).toLocaleDateString("en-US") as ContributionModel["date"],
  }),

  mapToContributionModels: (dataArray: any[]): ContributionModel[] =>
    dataArray.map(contributionMapper.mapToContributionModel),
};
