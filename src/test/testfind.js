/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server').default;

chai.should();
chai.use(chaiHttp);

describe('GET /records', () => {
  it('should get all existing records', (done) => {
    chai.request(server)
      .get('/ireporter/v4/records')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});