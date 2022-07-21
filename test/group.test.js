const server = require('../dist/app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Group Endpoints', () => {

  it('GET /group should show group', async () => {
    const res = await requestWithSupertest.get('/users');
      expect(res.status).toEqual(200);
      // expect(res.type).toEqual(expect.stringContaining('json'));
      // expect(res.body).toHaveProperty('users');
  });

});