'use strict';

describe('Service: Post', function () {

  // load the service's module
  beforeEach(module('bulletinStandaloneApp'));

  // instantiate service
  var Post,
    post,
    httpBackend;

  beforeEach(inject(function (_Post_, $controller, $rootScope, $httpBackend) {
    Post = _Post_;

    httpBackend = $httpBackend;

    post = {
      title: 'hi',
      body: 'cool'
    };

  }));

  it('should be', function () {
    expect(!!Post).toBe(true);
  });

  it('should get all posts', function () {

    httpBackend.expectGET('http://localhost:3000/posts')
      .respond([post]);

    var response = Post.query();

    httpBackend.flush();

    expect(response.length).toBe(1);
    expect(response[0].title).toBe(post.title);

  });

  it('should get a specific post', function () {

    httpBackend.expectGET('http://localhost:3000/posts')
      .respond( post );

    var response = Post.get(1);

    httpBackend.flush();

    expect(response.title).toBe(post.title);
  });

  it('should create a post', function () {

    httpBackend.expectPOST('http://localhost:3000/posts')
      .respond( post );

    var response = Post.save( post );

    httpBackend.flush();

    expect(response.title).toBe(post.title);
  });

  it('should delete a post', function () {

    httpBackend.expectDELETE('http://localhost:3000/posts')
      .respond( post );

    var response = Post.delete(1);

    httpBackend.flush();

    expect(response.title).toBe(post.title);
  });

});
