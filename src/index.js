const blogs = require('./blogs');

const config = (devAPiKey = null) => {
  blogs.dev.setApiKey(devAPiKey);
};

const getBlogs = () => blogs.dev.getBlogs();

module.exports = {
  config,
  getBlogs,
};
