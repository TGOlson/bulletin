'use strict';

angular.module('bulletinStandaloneApp')
  .filter('titleize', [function () {

    return function (text) {
      if(text == null) return '';

      var splitText = text.split(' ')

      for(var i in splitText) {

        var word = splitText[i]
        var firstLetter = word[0];
        var restOfWord  = word.slice(1, word.length);

        splitText[i] = firstLetter.toUpperCase() + restOfWord;
      }

      return  splitText.join(' ')
    }


  }]);
