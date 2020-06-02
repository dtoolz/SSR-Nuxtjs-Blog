const contentful = require('contentful');

if (process.env.CONTENTFUL_SPACE) {
    module.exports = contentful.createClient({
     space: process.env.CONTENTFUL_SPACE,
     accessToken: process.env.CONTENTFUL_ACCESSTOKEN
  });
}