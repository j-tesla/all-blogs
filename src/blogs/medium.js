const axios = require("axios");
const { convert } = require("html-to-text");

let userName = null;

const setUsername = (username) => {
  userName = username;
};

const getEndpoint = async () =>
  `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${userName}`;

const getBlogs = async () => {
  const endpoint = await getEndpoint();
  const { data } = await axios.get(endpoint);
  return data.items.map((article) => ({
    title: article.title,
    url: article.link,
    cover_image: article.thumbnail,
    description: convert(article.description, { wordwrap: 130 }),
    tags: article.categories,
    published: Date(article.pubDate),
  }));
};

module.exports = {
  getBlogs,
  setUsername,
};
