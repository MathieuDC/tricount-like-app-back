import User from "./User";

interface TransactionI{
  id?: number;
  date?: Date;
  name: String;
  giver: User;
  receiver: User;
  amount: number;
}

interface Transactions{
  [index: number]: TransactionI;
}

export type {TransactionI, Transactions};
