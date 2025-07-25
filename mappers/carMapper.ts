//@mappers/carMapper.ts
import { CarModel } from "@models/carModel.ts";

export const carMapper = {
  mapToCarModel: (data: any): CarModel => ({
    id: data.id as `${string & { length: 6 }}`,
    startDate: new Date(data.start_date).toLocaleDateString("en-US") as CarModel["startDate"],
    endDate: new Date(data.end_date).toLocaleDateString("en-US") as CarModel["endDate"],
    month: data.month as CarModel["month"],
    year: data.year as CarModel["year"],
    paymentDate: new Date(data.payment_date).toLocaleDateString("en-US") as CarModel["paymentDate"],
    paymentAmount: data.payment_amount ?? null,
    principal: data.principal ?? null,
    interest: data.interest ?? null,
    owed: data.owed ?? null,
    insuranceAmount: data.insurance_amount ?? null,
    insuranceDate: data.insurance_date
      ? new Date(data.insurance_date).toLocaleDateString("en-US") as CarModel["insuranceDate"]
      : null,
    startMiles: data.start_miles ?? null,
    milesAdded: data.miles_added ?? null,
    milesDate: data.miles_date
      ? new Date(data.miles_date).toLocaleDateString("en-US") as CarModel["milesDate"]
      : null,
    total: data.total,
    number: data.number,
    comments: data.comments ?? null,
  }),

  mapToCarModels: (dataArray: any[]): CarModel[] =>
    dataArray.map(carMapper.mapToCarModel),
};
