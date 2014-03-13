'use strict';

describe('Filter: titleize', function () {

  // load the filter's module
  beforeEach(module('bulletinStandaloneApp'));

  // initialize a new instance of the filter before each test
  var titleize;

  beforeEach(inject(function($filter) {
    titleize = $filter('titleize');
  }));

  it('should return the input as titleized text', function () {
    var text = 'this is a test';
    expect(titleize(text)).toBe('This Is A Test');
  });

  it('should return a blank string if the input is undefined', function () {
    var text = undefined;
    expect(titleize(text)).toBe('');
  });

});
