//@models/paycheckModel.ts
import { DateFormat, DateRangeFields } from "./dateModel.ts";
import { CommonFields } from "./commonModel.ts";

export type PaycheckModel = DateRangeFields & CommonFields & {
    source: string;
    checkDate: DateFormat;
    hoursPaid: number | null;
    payRate: number | null;
    overtimeHours: number | null;
    holidayUsed: number | null;
    fixedFloatingHoliday: number | null;
    grossEarnings: number | null;
    taxableGross: number | null;
    totalTaxes: number | null;
    totalDeductions: number | null;
    netPay: number | null;
    stateTax : number | null;
    medicareTax : number | null;
    fedTax : number | null;
    deferredComp : number | null;
    dentalInsurance : number | null;
    medicalInsurance : number | null;
    pensionCont : number | null;
    retireeTrust : number | null;
};
