//@models/contributionModel.ts
import { CommonFields } from "@models/commonModel.ts";
import { ExactDateFields } from "@models/dateModel.ts";

export type ContributionModel = CommonFields & ExactDateFields & {
  amount: number;
  exclude: boolean;
  account: string;
};
