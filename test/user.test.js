const server = require('../dist/app.js');
const supertest = require('supertest');
const { default: User } = require('../dist/models/User.js');
const mockedServer = supertest(server);

describe('User Endpoints', () => {

  it('POST /user should create user', async () => {
    const mocekedUser = new User("Alexis", "Sanchez")
    const res = await mockedServer
      .post('/users')
      .set('Accept', 'application/json')
      .field('body', JSON.stringify(mocekedUser));
    console.log(res.body)
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));

    const user = res.body;
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('id');
  });

  // it('GET /user/:id should show user', async () => {
  //   const res = await mockedServer.get('/groups');
  //   expect(res.status).toEqual(200);
  //   expect(res.type).toEqual(expect.stringContaining('json'));
  //   const group = res.body;
  //   expect(group).toHaveProperty('name');
  // });

});