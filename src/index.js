const blogs = require('./blogs');

const config = ({
  devAPiKey = null,
  mediumUsername = null,
}) => {
  blogs.dev.setApiKey(devAPiKey);
  blogs.medium.setUserName(mediumUsername);
};

const getBlogs = async () => {
  let posts = [];
  posts = posts.concat(await blogs.dev.getBlogs());
  posts = posts.concat(await blogs.medium.getBlogs());
  return posts;
};

module.exports = {
  config,
  getBlogs,
};
