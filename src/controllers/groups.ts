import User from "../models/User";

const db = require('./../db')

const groupController = {
  get: async (id: string) => {
    if(!id) throw Error('Invalid user id');
    const user = await db.groups.get(id);
    return user;
  },
  getAll: async () => {
    return await db.groups.getAll();
  },
  post: async (user: User) => {
    if(!user || !user.name) throw Error('Invalid user')
    return await db.groups.create(user);
  },
  postUser: async (groupId: string, user: User) => {
    if(!user || !user.name || !groupId) throw Error('Invalid user')
    return await db.groups.addUser(groupId, user);
  }
}

module.exports = groupController;