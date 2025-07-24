export type TabModel = {
  id: string;
  name: string;
  range: string;
  url: string;
  updatedAt : string | null;
};

export enum TabEnvVarKeys {
  AllyMM = "ALLYMM_TAB",
  Car = "CAR_TAB",
  Fa401k = "FA401K_TAB",
  Fahsa = "FAHSA_TAB",
  Faspp = "FASPP_TAB",
  Housing = "HOUSING_TAB",
  Rothira = "ROTHIRA_TAB",
  Transactions = "TRANSACTIONS_TAB",
  Sidegigs = "SIDEGIGS_TAB",
  Paychecks = "PAYCHECKS_TAB",
  Budgets = "BUDGETS_TAB",
  TabLog = "TABLOG_TAB",
  Contributions = "CONTRIBUTIONS_TAB"
};

export enum TabNames {
  AllyMM = "allymm",
  Car = "car",
  Fa401k = "fa401k",
  Fahsa = "fahsa",
  Faspp = "faspp",
  Housing = "housing",
  Rothira = "rothira",
  Sidegigs = "sidegigs",
  Transactions = "transactions",
  Paychecks = "paychecks",
  TabLog = "tablog",
  Budgets = "budgets",
  Contributions = "contributions"
};

export type TabLogModel = {
  tabName : string,
  updatedAt : string | null;
};