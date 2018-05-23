/**
 * Addresses one edge case: if url www.____, adds http:// to it
 *  TODO: More edge cases needed, sanitizing input
 * @param {string} url
 *
 * @return {string} url in proper format
 */
const formatUrl = (url) => {
  const checkUrlRegex = /^www.\S+/g;

  if (checkUrlRegex.test(url)) {
    url = `http://${url}`;
  }
};

module.exports = {
  formatUrl,
};