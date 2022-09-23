const server = require('../dist/app.js');
const supertest = require('supertest');
const { default: User } = require('../dist/models/User.js');
const mockedServer = supertest(server);

describe('User Endpoints', () => {

  it('POST /user should create user', async () => {
    const mocekedUser = new User("Alexis", "Sanchez")

    //POST
    const resPost = await mockedServer
      .post('/users')
      .send(mocekedUser)
      .set('Accept', 'application/json')
    expect(resPost.status).toEqual(200);
    expect(resPost.type).toEqual(expect.stringContaining('json'));
    const user = resPost.body;
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('id');

    //GET
    const resGet = await mockedServer.get('/users/' + user.id)
    expect(resGet.status).toEqual(200);
    expect(resGet.type).toEqual(expect.stringContaining('json'));
    const user1 = resGet.body;
    expect(user1).toHaveProperty('name');
    expect(user1).toHaveProperty('id');
  });

  // it('GET /user/:id should show user', async () => {
  //   const res = await mockedServer.get('/groups');
  //   expect(res.status).toEqual(200);
  //   expect(res.type).toEqual(expect.stringContaining('json'));
  //   const group = res.body;
  //   expect(group).toHaveProperty('name');
  // });

});