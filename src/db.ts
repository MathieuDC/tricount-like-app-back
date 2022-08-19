import User from "./models/User";
import Group from "./models/Group";
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
    create: (user: User) => {
      const id = uuidv4();
      user.id = id;
      DB.users[id] = user;
    }
  },
}