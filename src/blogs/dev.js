const axios = require('axios');

let API_KEY = null;
const endpoint = 'https://dev.to/api/articles/me/published?per_page=1000';

const setApiKey = (apiKey) => {
  API_KEY = apiKey;
};

const getConfig = () => ({
  headers: {
    'api-key': API_KEY,
  },
});

const getBlogs = async () => {
  if (!API_KEY) {
    throw Error('Set API KEY');
  }

  const { data } = await axios.get(endpoint, getConfig());
  return data.map((blog) => ({
    title: blog.title,
    url: blog.url,
    description: blog.description,
    tags: blog.tag_list,
    cover_image: blog.cover_image,
    published: Date(blog.published_timestamp),
  }));
};

module.exports = { getBlogs, setApiKey };
