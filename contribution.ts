import { CommonFields } from "./common.ts";
import { ExactDateFields } from "./date.ts";

export type ContributionModel = CommonFields & ExactDateFields & {
  amount: number;
  exclude: boolean;
  account: string;
};
