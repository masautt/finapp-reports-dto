import { DateRangeFields } from "./date.ts";
import { CommonFields } from "./common.ts";

export type InvestmentModel = DateRangeFields & CommonFields & {
  beginningBalance: number | null;
  endingBalance: number | null;
  changeInValue: number | null;
  changeInPercentage: number | null;
  type : string;
};