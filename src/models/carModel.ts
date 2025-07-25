//@models/carModel.ts
import { DateFormat, DateRangeFields } from "@models/dateModel.ts";
import { CommonFields } from "@models/commonModel.ts";

export type CarModel = DateRangeFields & CommonFields & {
  paymentDate: DateFormat;
  paymentAmount: number | null;
  principal: number | null;
  interest: number | null;
  owed: number | null;
  insuranceAmount: number | null;
  insuranceDate: DateFormat | null;
  startMiles: number | null;
  milesAdded: number | null;
  milesDate: DateFormat | null;
  total: number;
};