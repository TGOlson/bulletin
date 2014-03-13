# Angular Bulletin Board App

Created using angular and tested using Karma / Jasmine. Repo posted mainly as a reference for testing style and syntax.

App grabs data from an API (Rails app), and uses data binding (Angular out-of-the-box) to update views on any model changes.

The bulk of the testing is split up between the service and controller, making sure they do not overlap.

The service testing is done on the model side by using ```$httpBackend``` to expect resource queries and evaluate the mocked response.

```javascript
it('should create a post', function () {

  httpBackend.expectPOST('http://localhost:3000/posts')
    .respond( post );

  var response = Post.save( post );

  httpBackend.flush();

  expect(response.title).toBe(post.title);
});
```

Controller testing is done by stubbing out a resource backend:

```javascript
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
```

And then evualating the changes in the ```$scope```.

```javascript
it('should create a post', function () {
  expect($scope.posts.length).toBe(1);

  $scope.newPost = post;
  $scope.create();

  expect($scope.posts.length).toBe(2);
});
```

