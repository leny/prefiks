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

exports[ "awesome" ] = {
  setUp: function( done ) {
    done();
  },
  "errors": function( test ) {
    test.throws( function() { prefiks( "css-filters", "nothing", 2 ) }, Error, "should throws for unknown browsers" );
    test.throws( function() { prefiks( "nothing", "ie", 2 ) }, Error, "should throws for unknown features" );

    test.done();
  },
};
