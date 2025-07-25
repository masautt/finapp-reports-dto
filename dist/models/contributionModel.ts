//@models/contributionModel.ts
import { CommonFields } from "./commonModel.ts";
import { ExactDateFields } from "./dateModel.ts";

export type ContributionModel = CommonFields & ExactDateFields & {
  amount: number;
  exclude: boolean;
  account: string;
};
