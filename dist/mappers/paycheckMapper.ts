//@mappers/paychecksMapper.ts
import { PaycheckModel } from "../models/paycheckModel.ts";

export const paychecksMapper = {
  mapToPaycheckModel: (data: any): PaycheckModel => ({
    id: data.id as `${string & { length: 6 }}`,
    startDate: new Date(data.start_date).toLocaleDateString(
      "en-US",
    ) as PaycheckModel["startDate"],
    endDate: new Date(data.end_date).toLocaleDateString(
      "en-US",
    ) as PaycheckModel["endDate"],
    month: data.month as PaycheckModel["month"],
    year: data.year as PaycheckModel["year"],
    source: data.source,
    checkDate: new Date(data.check_date).toLocaleDateString(
      "en-US",
    ) as PaycheckModel["checkDate"],
    hoursPaid: data.hours_paid ?? null,
    payRate: data.pay_rate ?? null,
    overtimeHours: data.overtime_hours ?? null,
    holidayUsed: data.holiday_used ?? null,
    fixedFloatingHoliday: data.fixed_floating_holiday ?? null,
    grossEarnings: data.gross_earnings ?? null,
    taxableGross: data.taxable_gross ?? null,
    totalTaxes: data.total_taxes ?? null,
    totalDeductions: data.total_deductions ?? null,
    netPay: data.net_pay ?? null,
    number: data.number,
    comments: data.comments ?? null,
    stateTax: data.state_tax ?? null,
    medicareTax: data.medicare_tax ?? null,
    fedTax: data.fed_tax ?? null,
    deferredComp: data.deferred_comp ?? null,
    dentalInsurance: data.dental_insurance ?? null,
    medicalInsurance: data.medical_insurance ?? null,
    pensionCont: data.pension_cont ?? null,
    retireeTrust: data.retiree_trust ?? null,
  }),

  mapToPaycheckModels: (dataArray: any[]): PaycheckModel[] =>
    dataArray.map(paychecksMapper.mapToPaycheckModel),
};
