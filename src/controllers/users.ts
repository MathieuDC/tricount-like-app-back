import User from "../models/User";

const db = require('./../db')

const userController = {
  get: async (id: number) => {
    if(!id) throw Error('Invalid user id');
    const user = await db.users.get(id);
    return user;
  },
  post: async (user: User) => {
    if(!user || !user.name) throw Error('Invalid user')
    return await db.users.create(user);
  }
}

module.exports = userController;