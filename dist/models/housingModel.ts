//@models/housingModel.ts
import { DateRangeFields, DateFormat } from "./dateModel.ts";
import { CommonFields } from "./commonModel.ts";

export type HousingModel = DateRangeFields & CommonFields & {
  rentAmount: number
  rentDate: DateFormat;
  insuranceAmount: number | null; 
  insuranceDate: DateFormat | null;
  petRent: number | null;
  fees: number | null;
  utilitiesDate: DateFormat | null;
  electricity: number | null;
  water: number | null;
  gas: number | null;
  wifi: number | null;
  cityServices: number | null;
  totalUtilities: number;
  totalHousing: number;
};
