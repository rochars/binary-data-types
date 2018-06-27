/*
 * https://github.com/rochars/binary-data-types
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 */

import closure from 'rollup-plugin-closure-compiler-js';

export default [
  // cjs
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/binary-data-types.cjs.js',
        name: 'BinaryDataTypes',
        format: 'cjs'
      }
    ]
  },
  // umd, es
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/binary-data-types.umd.js',
        name: 'BinaryDataTypes',
        format: 'umd'
      },
      {
        file: 'dist/binary-data-types.js',
        format: 'es'
      }
    ]
  },  
  // browser
  {
    input: './index.js',
    output: [
      {
        file: 'dist/binary-data-types.min.js',
        name: 'BinaryDataTypes',
        format: 'iife'
      }
    ],
    plugins: [
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'SIMPLE',
        warningLevel: 'VERBOSE',
        outputWrapper: '%output%window.BinaryDataTypes=BinaryDataTypes;'
      })
    ]
  }
];
