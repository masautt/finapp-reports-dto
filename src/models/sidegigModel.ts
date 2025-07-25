//@models/sidegigModel.ts
import { DateRangeFields } from "@models/dateModel.ts";
import { CommonFields } from "@models/commonModel.ts";

export type SidegigModel = DateRangeFields & CommonFields & {
  hoursWorked: number | null;
  amountPaid: number;
  company: string;
  jobDescription: string;
};