'use strict';

var assert = require('chai').assert;
var Person = require('../app/scripts/person.js');

describe('Person', function () {
    it('should exist', function () {
        var person = new Person(); 

        assert.notEqual(person, undefined);
    });

    
});