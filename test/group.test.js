const server = require('../dist/app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Group Endpoints', () => {

  it('GET /group should show group', async () => {
    // const resCreate = await requestWithSupertest.post('/groups');


    // const res = await requestWithSupertest.get('/groups');

    // expect(res.status).toEqual(200);
    // expect(res.type).toEqual(expect.stringContaining('json'));
    // const group = res.body;
    // expect(group).toHaveProperty('name');
    // expect(group).toHaveProperty('debts');
    // expect(group).toHaveProperty('transactions');
    // expect(group).toHaveProperty('users');
  });

});