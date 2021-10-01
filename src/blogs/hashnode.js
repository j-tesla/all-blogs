const axios = require("axios");

let userName = null;

const endpoint = "https://api.hashnode.com";

const setUsername = (username) => {
  userName = username;
};

const getBlogs = async () => {
  const blogs = [];

  const page = 0;
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const { data } = await axios.post(endpoint, {
      query: `query{
                user(username: "${userName}") {
                  publicationDomain
                  publication {
                    posts(page:${page}) {
                      title
                      coverImage
                      dateAdded
                      brief
                      slug
                      tags {
                        name
                      }
                    }
                  }
              }
          }`,
    });
    const { posts } = data.data.user.publication;
    if (!posts.length) break;
    const domain = data.data.user.publicationDomain;
    const newBlogs = posts.map((post) => ({
      title: post.title,
      url: `https://${domain}/${post.slug}`,
      description: post.brief,
      tags: [],
      cover_image: post.coverImage,
      published: post.dateAdded,
    }));
    blogs.push(...newBlogs);
  }

  return blogs;
};

module.exports = {
  getBlogs,
  setUsername,
};
