'use strict';

angular.module('bulletinStandaloneApp')
  .controller('PostsCtrl', ['$scope', 'Post', function ($scope, Post) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.heading = 'Bulletin Boardy';
    $scope.posts = Post.query();

    $scope.get = function (index) {

      var post = $scope.posts[index]

      Post.get({id: post.id}, function (success) {

        console.log('success', success)

      }, function (failure) {

        console.log('failed', failure)
      })
    }

    $scope.create = function() {

      Post.save($scope.newPost, function(resource) {

        $scope.posts.push(resource);
        $scope.newPost = {};

      }, function(response) {

        console.log('failed', response)
      });
    }

    $scope.delete = function ( index ) {

      var postToDelete = $scope.posts[index]

      Post.delete({id: postToDelete.id}, function (success) {

        $scope.posts.splice(index, 1)

      }, function (failure) {
        console.log('failed', failure)
      })
    }

  }]);
