const axios = require("axios");
const _ = require("lodash");

let API_KEY = null;
const endpoint = 'https://dev.to/api/articles/me/published?per_page=1000';


const setApiKey = (api_key) => {
  API_KEY = api_key;
};

const getBlogs = async () => {
  if (!API_KEY) {
    throw Error('Set API KEY');
  }
  const config = {
    headers: {
      'api-key': API_KEY,
    },
  };

  const response = await axios.get(endpoint, config);
  return response.data.map((blog) => {
    const picked = _.pick(blog, ['title', 'url', 'description', 'tag_list', 'cover_image']);
    return picked;
  });

};

module.exports = {getBlogs, setApiKey};
