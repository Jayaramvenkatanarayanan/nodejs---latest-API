let mongoose = require("mongoose");
var {DepartTable} = require('../../models/emp_depart');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();
chai.use(chaiHttp);

//Our parent block
describe('Books', () => {
    // beforeEach((done) => { //Before each test we empty the database
    //     DepartTable.remove({}, (err) => {
    //        done();
    //        console.log('err',err)
    //     });
    // })

    /*
  * Test the /GET route
  */
  describe('/GET Departmets', () => {
    it('it should GET all the Departmets', (done) => {
      chai.request(server)
          .get('/getall_Departmets')
          .end((err, res) => {
              console.log('err',err)
            //   res.should.have.status(200);
            //   res.body.should.be.a('array');
            //   res.body.length.should.be.eql(0);
            done();
          });
    });
});

});
