const axios = require("axios");
axios = require('axios');
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

};

module.exports = {getBlogs};
