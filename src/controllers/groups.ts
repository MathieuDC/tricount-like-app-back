import CGroup from "../models/Group";
import { TransactionI } from "../models/Transaction";
import User from "../models/User";

const db = require('./../db')

function groupTest ()  {
  const group = new CGroup("OM");

  const user1 = new User("Guendouzi", "Mateo", "1");
  const user2 = new User("Da Silva", "Gerson", "2");
  const user3 = new User("Payet", "Dimitry", "3");

  group.add(user1);
  group.add(user2);
  group.add(user3);

  group.addTransaction({id: 1, name: "Arbitre", giver: user1, receiver: user2, amount: 10});
  group.addTransaction({id: 2, name: "Courses", giver: user2, receiver: user3, amount: 27});
  group.addTransaction({id: 3, name: "Essences", giver: user2, receiver: user1, amount: 3});
  group.addTransaction({id: 4, name: "Resto", giver: user1, receiver: user2, amount: 12});
  group.addTransaction({id: 5, name: "Bar", giver: user3, receiver: user2, amount: 24});
  group.addTransaction({id: 6, name: "Bieres", giver: user2, receiver: user1, amount: 150});
  group.addTransaction({id: 7, name: "Course", giver: user1, receiver: user3, amount: 60});

  group.computeDebt();

  return group;
};

const groupController = {
  get: async (id: string) => {
    if(!id) throw Error('Invalid user id');
    const user = await db.groups.get(id);
    return user;
  },
  getAll: async () => {
    const group = groupTest();
    return await db.groups.save(group);
    //return await db.groups.getAll();
  },
  post: async (user: User) => {
    if(!user || !user.name) throw Error('Invalid user')
    return await db.groups.create(user);
  },
  postUser: async (groupId: string, user: User) => {
    if(!user || !user.name || !groupId) throw Error('Invalid user')
    return await db.groups.addUser(groupId, user);
  },
  postTransaction: async (groupId: string, transaction: TransactionI) => {
    if(!transaction) throw Error('Invalid transaction')
    return await db.groups.addTransaction(groupId, transaction);
  }
}

module.exports = groupController;