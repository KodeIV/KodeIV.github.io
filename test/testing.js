var request = require('supertest');
var ajax = require('../ajax.js');
var expect = require('chai').expect;
request = request('http://kodeiv.github.io/');

describe('When a user goes to the index', function() {

    it("Should contain the tab link projects", function(done) {
        request.get('/')
            .expect(/projects\.html/, done);
    });

    it("Should return status code 200 OK", function(done) {
    request.get('/')
        .expect(200, done);
    });
});

describe('When a user goes to the project 4 page', function() {

  it('Should return status 200 OK', function(done){
    request.get('/projects.html')
      .expect(200, done);
  });

  it('Should contain a twitter feed', function(done){
    request.get('/projects.html')
      .expect(/twitter-timeline/, done);
  });

  it("Should only return images in the twitter feed", function(done) {
        request.get('/projects.html')
            .expect(/twitimg/, done);
  });

 it("Should contain the hastag FAC3", function(done) {
      request.get('/contactus.html')
          .expect(/https:\/\/twitter\.com\/hashtag\/FAC3/, done);
  });
});

describe('When the user retweets', function() {

    it("Should contain #collectiveacademy", function(done) {
        request.get('/projects.html')
            .expect(/collectiveacademy/, done);
    });

    /*it('Should open a new window, when user reposts tweet', function(done){
        .expect(/)
        .expect("_blank", done);
    });*/

    it('Feed should contain the reposts automatically', function(done){
    request.get('/')
      .expect(/News/, done);
    });

});


/*the website server calls via an ajax function*/
describe('The website requests twitter data from the twitter API', function() {

    it('have Ajax function called getContent', function (done) {
        expect(ajax.getContent).to.exist;
        done();
    })

    it('have Ajax function called getContent return an imgUrl', function (done) {
        expect(ajax.getContent()).to.be.an('imgUrl');
        done();
    })

    it('have function called injectToDom which injects data into the dom', function (done){
        expect(ajax.injectToDom).to.exist;
        done();
    })

    it('have function called jsonManipulator which manipulates the json object then returns a variable hashtag', function (done){
        expect(ajax.jsonManipulator().tweet).to.contain('#collectiveacadamy');
        done();
    })

    it('have function called jsonManipulator which manipulates the json object then returns a variable date', function (done){
        expect(ajax.jsonManipulator().date).to.contain('2014');
        done();
    })

    it('have function called jsonManipulator which manipulates the json object then returns a variable image', function (done){
        expect(ajax.jsonManipulator().image).to.be.an('image');
        done();
    })
});
