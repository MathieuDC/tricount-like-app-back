
import { TransactionI, Transactions } from './Transaction';
import User from './User'

interface Users{
  [index: string]: User;
}

interface IDebt{
  debterName: String;
  creditorName: String;
  amount: Number;
}

interface IGroup{
  users: Users;
  transactions: Transactions;
  name: String;
  debts: IDebt[];
}

class CGroup{
  users: Users;
  transactions: Transactions;
  name: String;
  debts: IDebt[] = [];

  constructor(name: String){
    this.users = {};
    this.transactions = {};
    this.name = name;
  }

  add(user: User){
    if(!user.id) throw Error("Invalid user id");
    this.users[user.id] = user;
  }

  /**
   * TODO 1 : Ask only users' id and amount ? 
   * TODO 2 : Generate real id, thus changing the type in ITransaction 
   */
  addTransaction(transaction: TransactionI){
    if(!transaction.giver.id || !transaction.receiver.id) throw Error("")
    const id = Math.floor((1 + Math.random()) * 10000);
    transaction.id = id;
    transaction.date = new Date();
    this.transactions[id] = transaction;
    this.users[transaction.giver.id].balance += transaction.amount;
    this.users[transaction.receiver.id].balance -= transaction.amount;
    this.computeDebt();
  }

  getUserWithMinBalance(users: Users){
    let minBalance = 0;
    let userId;
    Object.keys(users).forEach(key => {
      const user: User = users[Number(key)];
      if(user.balance < minBalance){
        minBalance = user.balance;
        userId = user.id;
      }
    });
    return userId;
  }

  computeDebt(){
    this.debts = [];
    //On crée une copie profonde
    const users: Users = JSON.parse(JSON.stringify(this.users));

    Object.keys(users).forEach(key => {
      const user: User = users[Number(key)];
      if(user.balance > 0){
        while(user.balance > 0){
          let minBalanceId = this.getUserWithMinBalance(users);
          const minBalanceUser = users[Number(minBalanceId)];
          //Si la dette est plus grande que le crédit
          if(Math.abs(user.balance) >= Math.abs(minBalanceUser.balance)){
            user.balance += minBalanceUser.balance;
            let amount = Math.abs(minBalanceUser.balance);
            minBalanceUser.balance = 0;
            this.debts.push({debterName: minBalanceUser.firstName,creditorName: user.firstName, amount: amount})
          } else {
            minBalanceUser.balance += user.balance;
            let amount = user.balance;
            user.balance = 0;
            this.debts.push({debterName: minBalanceUser.firstName,creditorName: user.firstName, amount: amount})
          }
        }
      }
    });
  }

  toString(){
    let res = "Name  : " + this.name + "\n";
    Object.keys(this.users).forEach(key => {
      const user: User = this.users[Number(key)];
      res += user.name + " : " + String(user.balance) + "\n";
    });
    res += "\n"
    this.debts.forEach(debt => {
      res += debt.debterName + " doit " + debt.amount + " à " + debt.creditorName + "\n";
    });
    return res;
  }
}


export type {IDebt, IGroup, Users};
export default CGroup;