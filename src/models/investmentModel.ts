//@models/investmentModel.ts
import { DateRangeFields } from "@models/dateModel.ts";
import { CommonFields } from "@models/commonModel.ts";

export type InvestmentModel = DateRangeFields & CommonFields & {
  beginningBalance: number | null;
  endingBalance: number | null;
  changeInValue: number | null;
  changeInPercentage: number | null;
  type : string;
};