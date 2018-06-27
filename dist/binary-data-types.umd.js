(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.BinaryDataTypes = factory());
}(this, (function () { 'use strict';

  /**
   * @fileoverview Binary data types definitions.
   *
   * @see https://github.com/rochars/binary-data-types
   */

  /**
   * Binary data types.
   * @type {!Object}
   */
  var index = {
    /**
     * Signed 2-bit integers
     * @type {!Object}
     */
    int2: {bits: 2, signed: true, float: false, be: false},
    /**
     * Unsigned 2-bit integers
     * @type {!Object}
     */
    uInt2: {bits: 2, signed: false, float: false, be: false},
    /**
     * Signed 4-bit integers
     * @type {!Object}
     */
    int4: {bits: 4, signed: true, float: false, be: false},
    /**
     * Unsigned 4-bit integers
     * @type {!Object}
     */
    uInt4: {bits: 4, signed: false, float: false, be: false},
    /**
     * Signed 8-bit integers
     * @type {!Object}
     */
    int8: {bits: 8, signed: true, float: false, be: false},
    /**
     * Unsigned 4-bit integers
     * @type {!Object}
     */
    uInt8: {bits: 8, signed: false, float: false, be: false},
    // LE
    /**
     * Signed 16-bit integers little-endian
     * @type {!Object}
     */
    int16 : {bits: 16, signed: true, float: false, be: false},
    /**
     * Unsigned 16-bit integers little-endian
     * @type {!Object}
     */
    uInt16: {bits: 16, signed: false, float: false, be: false},
    /**
     * Half-precision floating-point numbers little-endian
     * @type {!Object}
     */
    float16: {bits: 16, signed: true, float: true, be: false},
    /**
     * Signed 24-bit integers little-endian
     * @type {!Object}
     */
    int24: {bits: 24, signed: true, float: false, be: false},
    /**
     * Unsigned 24-bit integers little-endian
     * @type {!Object}
     */
    uInt24: {bits: 24, signed: false, float: false, be: false},
    /**
     * Signed 32-bit integers little-endian
     * @type {!Object}
     */
    int32: {bits: 32, signed: true, float: false, be: false},
    /**
     * Unsigned 32-bit integers little-endian
     * @type {!Object}
     */
    uInt32: {bits: 32, signed: false, float: false, be: false},
    /**
     * Single-precision floating-point numbers little-endian
     * @type {!Object}
     */
    float32: {bits: 32, signed: true, float: true, be: false},
    /**
     * Signed 40-bit integers little-endian
     * @type {!Object}
     */
    int40: {bits: 40, signed: true, float: false, be: false},
    /**
     * Unsigned 40-bit integers little-endian
     * @type {!Object}
     */
    uInt40: {bits: 40, signed: false, float: false, be: false},
    /**
     * Signed 48-bit integers little-endian
     * @type {!Object}
     */
    int48: {bits: 48, signed: true, float: false, be: false},
    /**
     * Unsigned 48-bit integers little-endian
     * @type {!Object}
     */
    uInt48: {bits: 48, signed: false, float: false, be: false},
    /**
     * Double-precision floating-point numbers little-endian
     * @type {!Object}
     */
    float64: {bits: 64, signed: true, float: true, be: false},
    // BE
    /**
     * Signed 16-bit integers big-endian
     * @type {!Object}
     */
    int16BE : {bits: 16, signed: true, float: false, be: true},
    /**
     * Unsigned 16-bit integers big-endian
     * @type {!Object}
     */
    uInt16BE: {bits: 16, signed: false, float: false, be: true},
    /**
     * Half-precision floating-point numbers big-endian
     * @type {!Object}
     */
    float16BE: {bits: 16, signed: true, float: true, be: true},
    /**
     * Signed 24-bit integers big-endian
     * @type {!Object}
     */
    int24BE: {bits: 24, signed: true, float: false, be: true},
    /**
     * Unsigned 24-bit integers big-endian
     * @type {!Object}
     */
    uInt24BE: {bits: 24, signed: false, float: false, be: true},
    /**
     * Signed 32-bit integers big-endian
     * @type {!Object}
     */
    int32BE: {bits: 32, signed: true, float: false, be: true},
    /**
     * Unsigned 32-bit integers big-endian
     * @type {!Object}
     */
    uInt32BE: {bits: 32, signed: false, float: false, be: true},
    /**
     * Single-precision floating-point numbers big-endian
     * @type {!Object}
     */
    float32BE: {bits: 32, signed: true, float: true, be: true},
    /**
     * Signed 40-bit integers big-endian
     * @type {!Object}
     */
    int40BE: {bits: 40, signed: true, float: false, be: true},
    /**
     * Unsigned 40-bit integers big-endian
     * @type {!Object}
     */
    uInt40BE: {bits: 40, signed: false, float: false, be: true},
    /**
     * Signed 48-bit integers big-endian
     * @type {!Object}
     */
    int48BE: {bits: 48, signed: true, float: false, be: true},
    /**
     * Unsigned 48-bit integers big-endian
     * @type {!Object}
     */
    uInt48BE: {bits: 48, signed: false, float: false, be: true},
    /**
     * Double-precision floating-point numbers big-endian
     * @type {!Object}
     */
    float64BE: {bits: 64, signed: true, float: true, be: true},
  };

  return index;

})));
