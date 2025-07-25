//@models/transactionModel.ts
import { ExactDateFields } from "@models/dateModel.ts";
import { CommonFields } from "@models/commonModel.ts";

export type TransactionModel = ExactDateFields & CommonFields & {
  category: TransactionCategory;
  subCategory: string;
  amount: number;
  business: string;
  city: string;
  state: StateFormat;
  description: string | null;
  recipient: Recipient;
  necessity: Necessity;
  reimburse: Reimbursement;
  recurring: Recurring;
  ex: boolean;
};

export type TransactionCategory = 
  | "life"
  | "electronics"
  | "bills"
  | "car"
  | "eatingout"
  | "entertainment"
  | "gift"
  | "groceries";

export type Recipient = 
  | "lisa"
  | "marek"
  | "other"
  | "pet";

export type Reimbursement = 
  | "reimbursed"
  | "reimbursable"
  | "hsaReimbursed"
  | "hsaReimbursable"
  | "faReimbursed"
  | "faReimbursable"
  | "businessWriteoff"
  | "partiallyReimbursed"
  | "partiallyReimbursable"
  | "refunded"
  | "donation"
  | "(none)";

export type Recurring = 
  | "daily"
  | "monthly"
  | "annually"
  | "biweekly"
  | "quinquennially"
  | "weekly"
  | "(none)";

export type Necessity = 
  | "want"
  | "need";

export type StateFormat = 
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID'
  | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS'
  | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK'
  | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV'
  | 'WI' | 'WY'
  | '(none)';

export const T_VALID = {
  TRANSACTION_CATEGORIES: [
    "life", "electronics", "bills", "car", "eatingout",
    "entertainment", "gift", "groceries"
  ] as TransactionCategory[],

  RECIPIENTS: [
    "lisa", "marek", "other", "pet"
  ] as Recipient[],

  REIMBURSEMENTS: [
    "reimbursed", "reimbursable", "hsaReimbursed", "hsaReimbursable",
    "faReimbursed", "faReimbursable", "businessWriteoff",
    "partiallyReimbursed", "partiallyReimbursable", "refunded", "donation", "(none)"
  ] as Reimbursement[],

  RECURRING_TYPES: [
    "daily", "monthly", "annually", "biweekly",
    "quinquennially", "weekly", "(none)"
  ] as Recurring[],

  NECESSITIES: [
    "want", "need"
  ] as Necessity[],

  STATES: [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
    'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI',
    'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
    'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VA', 'WA', 'WV', 'WI', 'WY', '(none)'
  ] as StateFormat[]
};

