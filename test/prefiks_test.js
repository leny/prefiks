"use strict";

var prefiks = require( "../lib/prefiks.js" );

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports[ "prefiks" ] = {
  setUp: function( done ) {
    done();
  },
  "errors": function( test ) {
    test.throws( function() { prefiks( "css-filters", "nothing", 2 ) }, Error, "should throws for unknown browsers" );
    test.throws( function() { prefiks( "nothing", "ie", 2 ) }, Error, "should throws for unknown features" );
    test.done();
  },
  "no version given": function( test ) {
    test.deepEqual( prefiks( "transforms2d", "ie" ), [ "ms" ], "should be [ 'ms' ]." );
    test.deepEqual( prefiks( "transforms2d", "firefox" ), [ "moz" ], "should be [ 'moz' ]." );
    test.deepEqual( prefiks( "transforms2d", "chrome" ), [ "webkit" ], "should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "safari" ), [ "webkit" ], "should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "opera" ), [ "o", "webkit" ], "should be [ 'o', 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "ios_saf" ), [ "webkit" ], "should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "op_mini" ), [], "should be []." );
    test.deepEqual( prefiks( "transforms2d", "android" ), [ "webkit" ], "should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "bb" ), [ "webkit" ], "should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "op_mob" ), [ "webkit" ], "should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "and_chr" ), [ "webkit" ], "should be [ 'webkit' ]." );
    test.deepEqual( prefiks( "transforms2d", "and_ff" ), [], "should be []." );
    test.deepEqual( prefiks( "transforms2d", "ie_mob" ), [], "should be []." );
    test.done();
  },
};
