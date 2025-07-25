//@mappers/housingMapper.ts
import { HousingModel } from "../models/housingModel.ts";

export const housingMapper = {
  mapToHousingModel: (data: any): HousingModel => ({
    id: data.id as `${string & { length: 6 }}`,
    startDate: new Date(data.start_date).toLocaleDateString("en-US") as HousingModel["startDate"],
    endDate: new Date(data.end_date).toLocaleDateString("en-US") as HousingModel["endDate"],
    month: data.month as HousingModel["month"],
    year: data.year as HousingModel["year"],
    rentAmount: data.rent_amount,
    rentDate: new Date(data.rent_date).toLocaleDateString("en-US") as HousingModel["rentDate"],
    insuranceAmount: data.insurance_amount ?? null,
    insuranceDate: data.insurance_date
    ? new Date(data.insurance_date).toLocaleDateString("en-US") as HousingModel["insuranceDate"]
    : null,
    petRent: data.pet_rent ?? null,
    fees: data.fees ?? null,
    utilitiesDate: data.utilities_date
    ? new Date(data.utilities_date).toLocaleDateString("en-US") as HousingModel["utilitiesDate"]
    : null,
    electricity: data.electricity ?? null,
    water: data.water ?? null,
    gas: data.gas ?? null,
    wifi: data.wifi ?? null,
    cityServices: data.city_services ?? null,
    totalUtilities: data.total_utilities,
    totalHousing: data.total_housing,
    number: data.number,
    comments: data.comments ?? null,
  }),

  mapToHousingModels: (dataArray: any[]): HousingModel[] =>
    dataArray.map(housingMapper.mapToHousingModel),
};
