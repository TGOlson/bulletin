'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('bulletinStandaloneApp'));

  var PostsCtrl,
    $scope,
    posts,
    post;

  var post = {
      id: 1,
      title: 'hi',
      body: 'hello'
    }

  var posts = [post]

  var Post = function () {
    this.query = function () {
      return posts;
    }
    this.get = function (index) {
      return posts[index];
    }
    this.save = function (params) {
      posts.push (params);
      return params;
    }
    this.delete = function (index) {
      return posts.splice(index, 1);
    }
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {

    $scope = $rootScope.$new();

    PostsCtrl = $controller('PostsCtrl', {
      $scope: $scope,
      Post: new Post()
    });

  }));


  it('should attach a list of awesomeThings to the scope', function () {
    expect($scope.awesomeThings.length).toBe(3);
  });

  it('should set the heading', function() {
    expect($scope.heading).toBe('Bulletin Boardy');
  });

  it('should have an array with all posts', function() {
    expect($scope.posts).toBeDefined();
    expect($scope.posts.length).toBe(1);
  });

  it('get should be defined', function () {
    expect( $scope.get ).toBeDefined();
  });

  it('should get a post based on an id', function () {
    // no return value
    // if no error test passed
    $scope.get(0)
  });

  it('should create a post', function () {
    expect($scope.posts.length).toBe(1);

    $scope.newPost = post;
    $scope.create();

    expect($scope.posts.length).toBe(2);
  });

  it('should delete a post', function () {
    expect($scope.posts.length).toBe(2);

    $scope.delete(0);

    expect($scope.posts.length).toBe(1);
  });

});
