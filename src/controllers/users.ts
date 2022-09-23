import User from "../models/User";

const db = require('./../db')

const userController = {
  get: async (id: string) => {
    if(!id) throw Error('Invalid user id');
    const user = await db.users.get(id);
    return user;
  },
  getAll: async () => {
    return await db.users.getAll();
  },
  post: async (user: User) => {
    if(!user || !user.name) throw Error('Invalid user')
    return await db.users.create(user);
  }
}

module.exports = userController;