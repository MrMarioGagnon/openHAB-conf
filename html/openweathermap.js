(function() {

  'use strict';
  var app = angular.module('app', []);

  app.filter('formatTemperature', function() {
    return function(x) {
        var part = x.split(".");

        var degre = part[0] === "-0" ? "0" : part[0];
        var part2 = part[1].split(" ");
        return degre + part2[1];
    };
  });

  app.filter('roundUp', function(){
    return function(x){
      return Math.ceil(x);
    };
  });

  app.filter('capitalize', function() {

    // Create the return function and set the required parameter as well as an optional paramater
    return function(input, char) {
  
      if (isNaN(input)) {
  
        // If the input data is not a number, perform the operations to capitalize the correct letter.
        var char = char - 1 || 0;
        var letter = input.charAt(char).toUpperCase();
        var out = [];
  
        for (var i = 0; i < input.length; i++) {
  
          if (i == char) {
            out.push(letter);
          } else {
            out.push(input[i]);
          }
  
        }
  
        return out.join('');
  
      } else {
        return input;
      }
  
    }
  
  });  

})();


