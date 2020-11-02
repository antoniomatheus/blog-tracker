const listHelpers = require('../utils/listHelpers');

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url:
      'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  },
];

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    expect(listHelpers.totalLikes(listWithOneBlog)).toBe(5);
  });
});

describe('favorite blog', () => {
  test('when list has only one blog, equals the blog', () => {
    expect(listHelpers.favoriteBlog(listWithOneBlog)).toEqual(
      listWithOneBlog[0]
    );
  });
});

describe('most blogs', () => {
  test('when list has only one blog, equals the author of this blog', () => {
    expect(listHelpers.mostBlogs(listWithOneBlog)).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 1,
    });
  });
});

describe('most likes', () => {
  test('when list has only one blog, equals the author of this blog', () => {
    expect(listHelpers.mostLikes(listWithOneBlog)).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 5,
    });
  });
});
