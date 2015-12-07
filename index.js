'use strict';
var frontmatter = require('front-matter');

module.exports = function frontmatterLoader(content) {
  // Signal to webpack this is cacheable
  this.cacheable();

  return frontmatter(content);
}
