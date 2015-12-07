# Frontmatter loader for Webpack

Loads files with frontmatter for [webpack](https://webpack.github.io/).

```
---
title: Just hack'n
description: Nothing to see here
---
```

returns json in the form:

```
{
  attributes: {
    title: 'Just hack\'n',
    description: 'Nothing to see here'
  },
  body: 'This is some text about some stuff that happened sometime ago'
}
```

## Installation

A possible webpack configuration could be:

```
npm install --save-dev frontmatter-loader
```

```
module.exports = {
  module: {
    loaders: [{
      test: /\.md$/,
      loaders: ['json', 'frontmatter']
    }]
  }
}
```
