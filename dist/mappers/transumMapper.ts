//@mappers/transumMapper.ts
import { TransumBusModel, TransumCatModel, TransumCatSubModel, TransumLocModel, TransumMoModel, TransumSubModel, TransumYrModel, TransumYrCatModel, TransumYrMoModel, TransumYrMoCatModel, TransumYrMoDaModel, TransumYrMoDaCatModel, TransumYrMoDaCatSubModel } from "../models/transumModel.ts";

const mapBase = (data: any) => ({
  totalAmount: data.total_amount,
  totalCount: data.total_count,
  averageAmount: data.average_amount,

  totalExAmount: data.total_ex_amount,
  totalExCount: data.total_ex_count,
  averageExAmount: data.average_ex_amount,

  totalNoExAmount: data.total_nonex_amount,
  totalNoExCount: data.total_nonex_count,
  averageNoExAmount: data.average_nonex_amount,

  totalWantAmount: data.total_want_amount,
  totalWantCount: data.total_want_count,
  averageWantAmount: data.average_want_amount,

  totalNeedAmount: data.total_need_amount,
  totalNeedCount: data.total_need_count,
  averageNeedAmount: data.average_need_amount,

  totalMarekAmount: data.total_marek_amount,
  totalMarekCount: data.total_marek_count,
  averageMarekAmount: data.average_marek_amount,

  totalLisaAmount: data.total_lisa_amount,
  totalLisaCount: data.total_lisa_count,
  averageLisaAmount: data.average_lisa_amount,

  totalOtherAmount: data.total_other_amount,
  totalOtherCount: data.total_other_count,
  averageOtherAmount: data.average_other_amount,

  totalPetAmount: data.total_pet_amount,
  totalPetCount: data.total_pet_count,
  averagePetAmount: data.average_pet_amount,
});

export const transumMapper = {
  mapToTransumBusModel: (data: any): TransumBusModel => ({
    business: data.business,
    ...mapBase(data),
  }),

  mapToTransumCatModel: (data: any): TransumCatModel => ({
    category: data.category,
    ...mapBase(data),
  }),

  mapToTransumCatSubModel: (data: any): TransumCatSubModel => ({
    category: data.category,
    subCategory: data.sub_category,
    ...mapBase(data),
  }),

  mapToTransumLocModel: (data: any): TransumLocModel => ({
    location: data.location,
    ...mapBase(data),
  }),

  mapToTransumMoModel: (data: any): TransumMoModel => ({
    month: data.month,
    ...mapBase(data),
  }),

  mapToTransumSubModel: (data: any): TransumSubModel => ({
    subCategory: data.sub_category,
    ...mapBase(data),
  }),

  mapToTransumYrModel: (data: any): TransumYrModel => ({
    year: data.year,
    ...mapBase(data),
  }),

  mapToTransumYrCatModel: (data: any): TransumYrCatModel => ({
    year: data.year,
    category: data.category,
    ...mapBase(data),
  }),

  mapToTransumYrMoModel: (data: any): TransumYrMoModel => ({
    year: data.year,
    month: data.month,
    ...mapBase(data),
  }),

  mapToTransumYrMoCatModel: (data: any): TransumYrMoCatModel => ({
    year: data.year,
    month: data.month,
    category: data.category,
    ...mapBase(data),
  }),

  mapToTransumYrMoDaModel: (data: any): TransumYrMoDaModel => ({
    year: data.year,
    month: data.month,
    day: data.day,
    ...mapBase(data),
  }),

  mapToTransumYrMoDaCatModel: (data: any): TransumYrMoDaCatModel => ({
    year: data.year,
    month: data.month,
    day: data.day,
    category: data.category,
    ...mapBase(data),
  }),

  mapToTransumYrMoDaCatSubModel: (data: any): TransumYrMoDaCatSubModel => ({
    year: data.year,
    month: data.month,
    day: data.day,
    category: data.category,
    subCategory: data.sub_category,
    ...mapBase(data),
  }),
};
