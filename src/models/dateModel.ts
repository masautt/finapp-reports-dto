//@models/dateModel.ts
export type DateRangeFields = {
  startDate: DateFormat;
  month: MonthFormat;
  year: YearFormat;
  endDate: DateFormat;
};

export type ExactDateFields = {
  year: YearFormat;
  month: MonthFormat;
  day: DayFormat;
  weekday: DayOfWeekFormat;
  date: DateFormat;
};

export type MonthFormat = "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";
export type DayOfWeekFormat = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export type DateFormat = `${"0" | "1"}${number}/${"0" | "1" | "2"}${number}/${number}${number}`;
export type DateTimeFormat = `${"0" | "1"}${number}/${"0" | "1" | "2"}${number}/${number}${number} ${"0" | "1" | "2"}${number}:${"0" | "1" | "2"}${number}:${"0" | "1" | "2"}${number}`;
export const DateTimeStrFormat = "MM/dd/yyyy HH:mm:ss";

export type YearFormat =
  | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025
  | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035
  | 2036 | 2037 | 2038 | 2039 | 2040 | 2041 | 2042 | 2043 | 2044 | 2045
  | 2046 | 2047 | 2048 | 2049 | 2050 | 2051 | 2052 | 2053 | 2054 | 2055
  | 2056 | 2057 | 2058 | 2059 | 2060 | 2061 | 2062 | 2063 | 2064 | 2065
  | 2066 | 2067 | 2068 | 2069 | 2070 | 2071 | 2072 | 2073 | 2074 | 2075;

export type DayFormat =
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
  | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;

export const D_VALID = {
  MONTHS: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"] as MonthFormat[],
  WEEKDAYS: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as DayOfWeekFormat[],
  YEARS: Array.from({ length: 61 }, (_, i) => 2015 + i) as YearFormat[],
  MONTH_START: 1 as const,
  MONTH_END: 31 as const,
};
