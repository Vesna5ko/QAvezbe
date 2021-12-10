//Add
//Sub
//Mulitiplication
//Division

var assert = require('assert')
describe('Mathematical Operations - Test Suit' , function(){
    beforeEach(function(done){
        this.timeout(500);
    setTimeout(done,3000);
    
    })
    
  
    var a = 10;
    var b = 10;

    it('Adition of two numbers', function(done){
        

        var c = a+b;

        assert.equal(c,20);
    });

    it('Subtraction of two numbers', function(){
  

        var c = a-b;

        assert.equal(c,0);
    });

    it('Mulitiplication of two numbers', function(){

        var c = a*b;

        assert.equal(c,100);
    });

    it('Division of two numbers', function(){

        var c = a/b;

        assert.equal(c,1);
    });
    it('Pending Test')
});

describe('Mocha Hooks',function(){
before('Execute Before All Tests', function(){
    console.log('Execute Before All Tests');
});

beforeEach('Execute Before Each Tests', function(){
    console.log('Execute Before Each Tests');
});

after('Execute After All Tests', function(){
    console.log('Execute After All Tests');
});

afterEach('Execute After Each Tests', function(){
    console.log('Execute After Each Tests');
});

it('Mocha Hooks Test', function(){

    console.log('Mocha - This is a Teast for Mocha Hooks')

})
});