'use strict';

const path = require('path');
const slash = require('slash');
const {kebabCase, uniq, get, compact, times} = require('lodash');

// Don't forget to update hard code values into:
// - `templates/page.tsx:25`
// - `pages/post.tsx:27`
// - `pages/post.tsx:121`
const POSTS_PER_PAGE = 10;
const cleanArray = arr => compact(uniq(arr));

module.exports = async ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const templates = ['post', 'tagsPage', 'page']
      .reduce((mem, templateName) => {
        return Object.assign({}, mem,
        {[templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`)});
      }, {});

    graphql(
      `
      {
        posts: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      const posts = result.data.posts.edges.map(p => p.node);

      // Create blog pages
      posts
        .filter(post => post.fields.slug.startsWith('/post/'))
        .forEach(post => {
          createPage({
            path: post.fields.slug,
            component: slash(templates.post),
            context: {
              slug: post.fields.slug
            }
          });
        });

      // Create tags pages
      posts
        .reduce((mem, post) =>
          cleanArray(mem.concat(get(post, 'frontmatter.tags')))
        , [])
        .forEach(tag => {
          createPage({
            path: `/post/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag
            }
          });
        });

      // Create blog pagination
      const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
      times(pageCount, index => {
        createPage({
          path: `/post/page/${index + 1}/`,
          component: slash(templates.page),
          context: {
            skip: index * POSTS_PER_PAGE
          }
        });
      });

      resolve();
    });
  });
};
