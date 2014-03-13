'use strict';

angular.module('bulletinStandaloneApp')
  .service('Post', ['$resource', function($resource) {

    var Post = $resource('http://localhost:3000/posts/:id');

    return Post;

}]);
