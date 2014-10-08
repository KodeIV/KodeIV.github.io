var request = require('supertest');
var ajax = require('../ajax.js');
var expect = require('chai').expect;
request = request('http://kodeiv.github.io/');

describe('When a user goes to the index', function() {

    it("should contain the tab link contactus", function(done) {
        request.get('/')
            .expect(/contactus\.html/, done);
    });

    it("should return status code 200 OK", function(done) {
    request.get('/')
        .expect(200, done);
    });
});

describe('When a user goes to the contact us page', function() {

  it('should return status 200 OK', function(done){
    request.get('/contactus.html')
      .expect(200, done);
  });

  it('should contain a twitter feed', function(done){
    request.get('/contactus.html')
      .expect(/twitter-timeline/, done);
  });

  it("should only return images in the twitter feed", function(done) {
        request.get('/contactus.html')
            .expect(/getElementById/, done);
  });

 it("should contain the hastag FAC3", function(done) {
      request.get('/contactus.html')
          .expect(/https:\/\/twitter\.com\/hashtag\/FAC3/, done);
  });
});

describe('when the user retweets', function() {

    it("should contain #camdenacademy", function(done) {
        request.get('/contactus.html')
            .expect(/camdenacademy/, done);
    });

    it("should contain the tab 'week4'", function(done) {
        request.get('/')
            .expect(/week4.html/, done);
    });

});

/*the website server calls via an ajax function*/
describe('The website requests twitter data from the twitter API', function() {

    it('have Ajax function called getContent', function (done) {
        expect(ajax.getContent).to.exist;
        done();
    })

    it('have Ajax function called getContent return an object', function (done) {
        expect(ajax.getContent()).to.be.an('object');
        done();
    })

    it('have function called injectToDom which injects data into the dom', function (done){
        expect(ajax.injectToDom).to.exist;
        done();
    })

    it('have function called jsonManipulator which manipulates the json object then returns a variable hashtag', function (done){
        expect(ajax.jsonManipulator().tweet).to.contain('collectiveacadamy');
        done();
    })

    it('have function called jsonManipulator which manipulates the json object then returns a variable date', function (done){
        expect(ajax.jsonManipulator().date).to.contain('2014');
        done();
    })

    it('have function called jsonManipulator which manipulates the json object then returns a variable image', function (done){
        expect(ajax.jsonManipulator().image).to.be.an('img');
        done();
    })
});
/*var request4 = require('supertest');
request4 = request4('http://kodeiv.github.io/news.html');

describe('When a user goes to the news page', function() {
    it('should return status 200 OK', function(done){
      request.get('/')
        .expect(200, done);
    });
  it('should contain the tab uk news', function(done){
    request.get('/')
      .expect(/News/, done);
  });


});*/
