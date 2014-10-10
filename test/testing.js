var request = require('supertest');
var ajax = require('../ajax.js');
var expect = require('chai').expect;
var kodeivrequest = request('http://kodeiv.github.io/');

//The following test are for our index HTML
describe('When a user goes to the index', function() {

    /*it("Should contain the about us", function(done) {
        kodeivrequest.get('/index.html/')
            .expect(/aboutus\.html/, done);
    });

    it("Should return status code 200 OK", function(done) {
        kodeivrequest.get('/')
          .expect(200, done);
    });*/

    it("Should contain the tab link projects", function(done) {
        kodeivrequest.get('/')
            .expect(/projects\.html/, done);
    });

    it("Should return status code 200 OK", function(done) {
        kodeivrequest.get('/')
          .expect(200, done);
    });

    it("Should contain the tab link news", function(done) {
        kodeivrequest.get('/')
          .expect(/news\.html/, done);
    });

    it("Should return status code 200 OK", function(done) {
        kodeivrequest.get('/')
        .expect(200, done);
    });

    it("Should contain the tab link Twitter API", function(done) {
        kodeivrequest.get('/')
            .expect(/twitterapi\.html/, done);
    });

    it("Should return status code 200 OK", function(done) {
        kodeivrequest.get('/')
          .expect(200, done);
    });

    it("Should contain the tab link contactus", function(done) {
        kodeivrequest.get('/')
            .expect(/contactus\.html/, done);
    });

    it("Should return status code 200 OK", function(done) {
        kodeivrequest.get('/')
          .expect(200, done);
    });

    it("Should contain the hastag FAC3", function(done) {
         kodeivrequest.get('/contactus.html')
            .expect(/https:\/\/twitter\.com\/hashtag\/FAC3/, done);
    });

});
//The following tests are for our Projects URL
describe('When a user goes to the projects page', function() {

    it('Should return status 200 OK', function(done){
      kodeivrequest.get('/projects.html')
        .expect(200, done);
    });

    it('Should contain ProjectsDays ID', function(done){
      kodeivrequest.get('/projects.html')
          .expect(/<div id ="projectDays"/, done);
    });

    it('Should contain The Projects Header', function(done){
      kodeivrequest.get('/projects.html')
        .expect(/<h1>The Projects/, done);
    });

    it("Should Contain Week One Recap Post Header", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<h2>Week 1 Recap/, done);
    });
//Week One Recap
    it("Should Contain Link week recap Post", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<a href="\/2014\/09\/20\/week-recap\.html/, done);
    });

    it("Should Contain Link week recap image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<img src="https:\/\/scontent-a-ams\.xx\.fbcdn\.net\/hphotos-xpa1\/v\/t1\.0-9\/10620684_1481825625434948_3316936839365310590_n\.jpg\?oh=458df5cfa7f68218af6520abfeab0d3b&oe=54D0EB53"/, done);
    });
//Day One Post
    it("Should Contain Day One Post Header", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<h2>Day One/, done);
    });

    it("Should Contain Link Day One Post", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<a href="\/2014\/09\/15\/dayone\.html/, done);
    });

    it("Should Contain Link Day One image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<img src="https:\/\/pbs\.twimg\.com\/media\/Bx0pRiaCEAACSQE\.jpg"/, done);
    });
//Day Two Post
    it("Should Contain Day Two Post", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<h2>Day Two/, done);
    });

    it("Should Contain Link Day Two Post Header", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<a href="\/2014\/09\/16\/Day-2\.html"/, done);
    });

    it("Should Contain Link Day Two image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<img src="http:\/\/s30\.postimg\.org\/6xf8ajxfl\/photo_2\.jpg"/, done);
    });
//Day Three Post
    it("Should Contain Day Three Post Header", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<h2>Day Three/, done);
    });

    it("Should Contain Link Day Three Post", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/Day-3\.html/, done);
    });

    it("Should Contain Link Day Three image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<img src="https:\/\/fbcdn-sphotos-e-a\.akamaihd\.net\/hphotos-ak-xaf1\/v\/t1\.0-9\/10690017_1481825652101612_4283438578932416115_n\.jpg\?oh=087e66fd97a9f48175cb723dadec61cd&oe=548F4E36&__gda__=1418302081_d0719c77c1084311b003d7f7ce4385ea"/, done);
    });
//Day Four Post
    it("Should Contain Day Four Post Header", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<h2>Day Four/, done);
    });

    it("Should Contain Link Day Four Post", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<a href="\/2014\/09\/18\/Day-4\.html/, done);
    });
//Day Five Post
    it("Should Contain Link Day 5 image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<img src="https:\/\/pbs\.twimg\.com\/media\/Bx02I3mIgAAlk7E\.jpg"/, done);
    });

    it("Should Contain Day Five Post Header", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<h2>Day Five/, done);
    });

    it("Should Contain Link Day Five Post", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/Day-5\.html"/, done);
    });

    it("Should Contain Link Day Five Image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<img src="https:\/\/pbs\.twimg\.com\/media\/BzgMexiIYAAFqko\.png:large"/, done);
    });
//Class Bootstrap
    it("Should have bootstap div", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<div class="col-md-4 col-sm-12">/, done);
    });
//Guardian API
    it("Should Contain Guardian API Image", function(done) {
        kodeivrequest.get('/projects.html')
          .expect(/<img src="https:\/\/pbs\.twimg\.com\/media\/BzgMexiIYAAFqko\.png:large"/, done);
    });

    it("Should Contain Guardian Api Link", function(done) {
        kodeivrequest.get('/projects.html')
          .expect(/<a href="\/news\.html"/, done);
    });
//LearnYouNode
    it("Should Contain LearnYouNode image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<img src="https:\/\/pbs\.twimg\.com\/media\/BzgN_Y5IUAAILCM.png:large"/, done);
    });

    it("Should Contain LearnYouNode Link", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<a href="https:\/\/nodeschool\.io"/, done);
    });

// testing for an image specifically from a personal database if you want to be
// able to resource it makes sense, but from a 7 day twitter feed with a 7 day renual
// it doesnt.
//Twitter API
    it("Should Contain Twitter API image", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<a href="\/twitterapi\.html"/, done);
    });

    it("Should Contain Twitter API Link", function(done) {
        kodeivrequest.get('/projects.html')
            .expect(/<a href="\/twitterapi\.html"/, done);
    });

});

//News Page
describe('When a user goes to the News page', function() {

    it('Should return status 200 OK', function(done){
      kodeivrequest.get('/news.html')
        .expect(200, done);
    });

    it('Should contain a tabs ID ', function(done){
      kodeivrequest.get('/news.html')
          .expect(/<div id="tabs"/, done);
    });

    it("Should contain ul class", function(done){
      kodeivrequest.get('/news.html')
          .expect(/<ul class="nav nav-tabs"/, done);
    });

    it('Should contain div class tab-content', function(done){
      kodeivrequest.get('/news.html')
        .expect(/<div class="tab-content"/, done);
    });

    it('Should contain id = UK news', function(done){
      kodeivrequest.get('/news.html')
        .expect(/id="uk-news"/, done);
    });

    it('Should contain id = football ', function(done){
      kodeivrequest.get('/news.html')
        .expect(/id="football"/, done);
    });

    it('Should contain id = Travel', function(done){
      kodeivrequest.get('/news.html')
        .expect(/id="travel"/, done);
    });
});

//These Test are testing the Twitter API
describe('When the Twitter API page is open', function() {
  var herokurequest = request('http://young-plains-8557.herokuapp.com');

    it("I want the node server on heroku to exist", function (done){
      expect(/http:\/\/young-plains-8557.herokuapp.com\//).to.exist;
        done()
    });

    it("Should have a twitter image in it", function (done) {
      herokurequest.get('/')
        .expect(/media_url\":\"http:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9_-]{15})\.jpg/, done);
    });

    it("Should contain tweets with #collectiveacademy", function(done) {
        herokurequest.get('/')
            .expect(/#collectiveacademy/, done);
    });

    it('Should open a new window, when user reposts tweet', function(done){
        herokurequest.get('/')
          .expect(/target="_blank"/, done);
    });
/*the website server calls via an ajax function*/

    it('Should have Ajax function called getContent', function (done) {
        expect(ajax.getContent).to.exist;
        done();
    })

    it('Should have Ajax function called getContent return an imgUrl', function (done) {
        expect(ajax.getContent()).to.be.an('imgUrl');
        done();
    })

    it('Should have function called injectToDom which injects data into the dom', function (done){
        expect(ajax.injectToDom).to.exist;
        done();
    })

    it('Should have function called jsonManipulator which manipulates the json object then returns a variable hashtag', function (done){
        expect(ajax.jsonManipulator().tweet).to.contain('#collectiveacadamy');
        done();
    })

    it('Should have function called jsonManipulator which manipulates the json object then returns a variable date', function (done){
        expect(ajax.jsonManipulator().date).to.contain('2014');
        done();
    })

    it('Should have function called jsonManipulator which manipulates the json object then returns a variable image', function (done){
        expect(ajax.jsonManipulator().image).to.be.an('image');
        done();
    })
});
