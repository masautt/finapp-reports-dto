import { DateRangeFields } from "./date.ts";
import { CommonFields } from "./common.ts";

export type SidegigModel = DateRangeFields & CommonFields & {
  hoursWorked: number | null;
  amountPaid: number;
  company: string;
  jobDescription: string;
};