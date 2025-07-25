//@models/transumModel.ts
import { TransumBaseModel } from "./transumBaseModel.ts";

type WithYear = { year: number };
type WithMonth = { month: string };
type WithDay = { day: number };
type WithCategory = { category: string };
type WithSubCategory = { subCategory: string };
type WithBusiness = { business: string };
type WithLocation = { location: string };

export type TransumBusModel = WithBusiness & TransumBaseModel;

export type TransumCatModel = WithCategory & TransumBaseModel;

export type TransumCatSubModel = WithCategory & WithSubCategory & TransumBaseModel;

export type TransumLocModel = WithLocation & TransumBaseModel;

export type TransumMoModel = WithMonth & TransumBaseModel;

export type TransumSubModel = WithSubCategory & TransumBaseModel;

export type TransumYrModel = WithYear & TransumBaseModel;

export type TransumYrCatModel = WithYear & WithCategory & TransumBaseModel;

export type TransumYrMoModel = WithYear & WithMonth & TransumBaseModel;

export type TransumYrMoCatModel = WithYear & WithMonth & WithCategory & TransumBaseModel;

export type TransumYrMoDaModel = WithYear & WithMonth & WithDay & TransumBaseModel;

export type TransumYrMoDaCatModel = WithYear & WithMonth & WithDay & WithCategory & TransumBaseModel;

export type TransumYrMoDaCatSubModel = WithYear & WithMonth & WithDay & WithCategory & WithSubCategory & TransumBaseModel;
