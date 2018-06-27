/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/binary-data-types
 *
 */

let assert = require('assert');
let BinaryDataTypes = require('./loader.js');

describe('Check if types are defined', function() {
    it('Types should be accessible', function() {
        assert.deepEqual(BinaryDataTypes.uInt8,
        	{bits: 8, signed: false, float: false, be: false});
    });
});

