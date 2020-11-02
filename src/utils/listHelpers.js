const totalLikes = (blogs) =>
  blogs.reduce((total, currentBlog) => total + currentBlog.likes, 0);

const favoriteBlog = (blogs) =>
  blogs.reduce((currentFavorite, currentBlog) => {
    if (currentFavorite && currentFavorite.likes >= currentBlog) {
      return currentFavorite;
    } else {
      return currentBlog;
    }
  }, null);

const mostBlogs = (blogs) => {
  const accruedInfo = blogs.reduce((collectedInfo, currentBlog) => {
    const authorIndex = collectedInfo.findIndex(
      (blog) => blog.author === currentBlog.author
    );

    const result = collectedInfo.slice();

    if (authorIndex >= 0) {
      result[authorIndex].blogs += 1;
      return result;
    } else {
      return [...result, { author: currentBlog.author, blogs: 1 }];
    }
  }, []);

  return accruedInfo.reduce((authorWithMostBlogs, currentAuthor) => {
    if (
      authorWithMostBlogs &&
      authorWithMostBlogs.blogs >= currentAuthor.blogs
    ) {
      return authorWithMostBlogs;
    } else {
      return currentAuthor;
    }
  }, null);
};

const mostLikes = (blogs) => {
  const accruedInfo = blogs.reduce((collectedInfo, currentBlog) => {
    const authorIndex = collectedInfo.findIndex(
      (blog) => blog.author === currentBlog.author
    );

    const result = collectedInfo.slice();

    if (authorIndex >= 0) {
      result[authorIndex].likes += currentBlog.likes;
      return result;
    } else {
      return [
        ...result,
        { author: currentBlog.author, likes: currentBlog.likes },
      ];
    }
  }, []);

  return accruedInfo.reduce((authorWithMostBlogs, currentAuthor) => {
    if (
      authorWithMostBlogs &&
      authorWithMostBlogs.likes >= currentAuthor.likes
    ) {
      return authorWithMostBlogs;
    } else {
      return currentAuthor;
    }
  }, null);
};

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
