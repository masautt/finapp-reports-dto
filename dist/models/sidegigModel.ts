//@models/sidegigModel.ts
import { DateRangeFields } from "./dateModel.ts";
import { CommonFields } from "./commonModel.ts";

export type SidegigModel = DateRangeFields & CommonFields & {
  hoursWorked: number | null;
  amountPaid: number;
  company: string;
  jobDescription: string;
};