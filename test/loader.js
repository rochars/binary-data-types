/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/binary-data-types
 *
 */

let BinaryDataTypes;

// Browser bundle
if (process.argv[3] == '--min') {
	console.log('min tests');
    require('browser-env')();
    require('../dist/binary-data-types.min.js');
    BinaryDataTypes = window.BinaryDataTypes;

// UMD bundle
} else if (process.argv[3] == '--umd') {
	console.log('umd tests');
	BinaryDataTypes = require('../dist/binary-data-types.umd.js');

// CommonJS dist
} else if (process.argv[3] == '--cjs') {
	console.log('cjs tests');
	BinaryDataTypes = require('../dist/binary-data-types.cjs.js');

// ES6 dist
} else if (process.argv[3] == '--esm') {
	console.log("esm");
	BinaryDataTypes = require('../dist/binary-data-types.js').default;

// Source
} else {
	console.log('Source tests');
	BinaryDataTypes = require('../index.js').default;
}

module.exports = BinaryDataTypes;
