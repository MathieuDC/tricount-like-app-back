import User from "./models/User";
import Group from "./models/Group";
import CGroup from "./models/Group";
import { TransactionI } from "./models/Transaction";
const { v4: uuidv4 } = require('uuid');


interface IGroups{
  [index: string]: Group;
}

interface IUsers{
  [index: string]: User
}

interface IDB{
  groups: IGroups,
  users: IUsers
}

const DB: IDB = {
  groups: {},
  users: {}
};


module.exports = {
  users: {
    get: (id: string) => {
      return DB.users[id];
    },
    getAll: () => {
      return DB.users;
    },
    create: (user: User) => {
      const id = uuidv4();
      user.id = id;
      DB.users[id] = user;
    }
  },
  groups: {
    save:(group: CGroup) => {
      DB.groups[group.id] = group
      return group
    },addUser: (groupId: string, user: User) => {
      const group = DB.groups[groupId];
      group.add(user);
      return group;
    },addTransaction: (groupId: string, transaction: TransactionI) => {
      const group = DB.groups[groupId];
      group.addTransaction(transaction);
      return group;
    }
  }
}