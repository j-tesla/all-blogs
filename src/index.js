const blogs = require('./blogs');

const config = ({
  devAPiKey = null,
  mediumUsername = null,
}) => {
  blogs.dev.setApiKey(devAPiKey);
  blogs.medium.setUsername(mediumUsername);
};

const getBlogs = async () => {
  let posts = [];
  posts = posts.concat(await blogs.dev.getBlogs().map((blog) => ({ ...blog, platform: 'dev' })));
  posts = posts.concat(await blogs.medium.getBlogs().map((blog) => ({ ...blog, platform: 'medium' })));
  return posts;
};

module.exports = {
  config,
  getBlogs,
};
