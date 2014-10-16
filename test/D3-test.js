var request = require('supertest');
//var ajax = require('../D3.js');
var expect = require('chai').expect;
var kodeivrequest = request('http://kodeiv.github.io/');

// tests for path to and from D3 page

describe('when user clicks on the D3 navbar link', function(){
	it('should link user to D3 page', function(done){
		kodeivrequest.get('/homepage.html')
		.expect(/D3\.html/, done);
		
	})

	it('should return status code 200 OK', function(done){
		kodeivrequest.get('/homepage.html')	
		.expect(200, done);
	})
})

describe('when user has landed on D3 page', function(){
	it('should contain brain link in navbar', function(){
		kodeivrequest.get('/D3.html')
		.expect(/homepage\.html/)
	})
})


//tests for D3 page (heading and footer)
describe('when user has landed on D3 page', function(){
	it('should have a heading', function(){
		kodeivrequest.get('/D3.html')
		.expect(/<h1>Cocaine Map/)
	})
	
	it('should have footer-image for CamdenCollective', function(){
	kodeivrequest.get('D3.html')
	.expect(/<img src="\/images\/cclogo\.jpg"/)
})
	it('should have footer-image for Founders&Coders', function(){
		kodeivrequest.get('/D3.html')
		.expect(/<img src="\/images\/fnclogo\.png"/)
	})
	it('should have footer-image for CTU', function(){
		kodeivrequest.get('/D3.html')
		.expect(/<img src="\/images\/CTU-Logo\.png"/)
	})
	it('should have link to CamdenCollective', function(){
		kodeivrequest.get('/D3.html')
		.expect(/<a href="http:\/\/camdencollective\.co\.uk\/"/)
	})
	it('should have link to Founders&Coders', function(){
		kodeivrequest.get('/D3.html')
		.expect(/<a href="http:\/\/foundersandcoders\.org\/"/)
	})
	it('should have link to CTU', function(){
		kodeivrequest.get('/D3.html')
		.expect(/<a href="http:\/\/www\.camdentownunlimited\.com\/"/)
	})
})

//tests for D3 functionality
describe('when user has landed on D3 page', function(){
	it('should have radio button for "retail"', function(done){
		kodeivrequest.get('/D3.html')
		.expect(/<div id="retail"/, done)
	})
	it('should have radio button for "wholesale"', function(done){
		kodeivrequest.get('/D3.html')
		.expect(/<div id="wholesale"/, done)
	})
	it('should have radio button for "retail" selected', function(done){
		kodeivrequest.get('/D3.html')
		.expect(/<div id="retail" class="active"/, done)
	})
	it('should show cocaine price for color-coded country whilst in hover', function(done){
	kodeivrequest.get('/D3.html')
	document.getElementByClassName('country').dispatchEvent(new MouseEvent('mouseover'))
	.expect(/.../, done)
  })
})
