//@models/investmentModel.ts
import { DateRangeFields } from "./dateModel.ts";
import { CommonFields } from "./commonModel.ts";

export type InvestmentModel = DateRangeFields & CommonFields & {
  beginningBalance: number | null;
  endingBalance: number | null;
  changeInValue: number | null;
  changeInPercentage: number | null;
  type : string;
};