const path = require('path');
const {get, times} = require('lodash');

// Don't forget to update hard code values into:
// - `templates/page.tsx:25`
// - `pages/post.tsx:27`
// - `pages/post.tsx:121`
const POSTS_PER_PAGE = 10;
const cleanArray = arr => [...new Set(arr.filter(v => Boolean(v)))];

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.

module.exports = async ({graphql, boundActionCreators}) => {
  const {createPage, createRedirect} = boundActionCreators;

  // Const tagsTemplate = path.resolve(__dirname, '../src/templates/tags.tsx');
  // const pageTemplate = path.resolve(__dirname, '../src/templates/page.tsx');

  createRedirect({fromPath: '/index.html', redirectInBrowser: true, toPath: '/'});

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark {
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
    `,
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  const posts = allMarkdown.data.allMarkdownRemark.edges.map(p => p.node);

  const postTemplate = path.resolve(__dirname, '../src/templates/post.tsx');
  posts
    .filter(post => (post.fields.slug || '').startsWith('/post/'))
    .forEach(post => {
      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          slug: post.fields.slug
        }
      });
    });

  // Create tag pages
  const tagTemplate = path.resolve(__dirname, '../src/templates/tags.tsx');
  posts
    .reduce((mem, post) =>
      cleanArray(mem.concat(get(post, 'frontmatter.tags')))
    , [])
    .forEach(tag => {
      createPage({
        path: `/post/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag
        }
      });
    });

      // // Create post pagination
      // const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
      // times(pageCount, index => {
      //   createPage({
      //     path: `/post/page/${index + 1}/`,
      //     component: slash(templates.page),
      //     context: {
      //       skip: index * POSTS_PER_PAGE
      //     }
      //   });
      // });
};
