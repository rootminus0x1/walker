// test_canvas

'use strict';

const expect = require('chai').expect;

const canvas = require('../script/canvas').canvas;

let str = "string";

describe('is a string', function() {
    
    it('should be a string', function(done){
        expect(str).to.be.a('string');
        done();
    });

    it('should contain "string"', function(done){
        expect(str).to.equal('string');
        done();
    });

});
