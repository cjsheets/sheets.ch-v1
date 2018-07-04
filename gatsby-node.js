const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

/*
 *  Implement the Gatsby API `createPages`.
 *  This is called after the Gatsby bootstrap is finished
 *  so you have access to any information necessary to
 *  programatically create pages.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve('./src/templates/blog-post.tsx');

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  if (allMarkdown.errors) {
    console.log(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  // Create blog posts pages.
  const posts = allMarkdown.data.allMarkdownRemark.edges;

  _.each(posts, (post, index) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // // Create tag pages
  // const tagTemplate = path.resolve(__dirname, '../src/templates/tags.tsx');
  // posts
  //   .reduce((mem, post) =>
  //     cleanArray(mem.concat(get(post, 'frontmatter.tags')))
  //   , [])
  //   .forEach(tag => {
  //     createPage({
  //       path: `/post/tags/${tag}/`,
  //       component: tagTemplate,
  //       context: {
  //         tag
  //       }
  //     });
  //   });

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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const FILENAME_REGEX = /([^/]+)\.md$/;
  const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const {permalink} = node.frontmatter;
    const {relativePath} = getNode(node.parent);
    const value = createFilePath({ node, getNode });

    let slug = permalink;

    if (!slug) {
      const pathRoot = relativePath.includes('post') && 'post' || relativePath.includes('project') && 'project';
      if (pathRoot) {
        const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const filename = match[4];

        slug = `/${pathRoot}/${year}/${month}/${day}/${filename}`;

        const date = new Date(year, month - 1, day);

        createNodeField({node, name: 'date', value: date.toJSON()});
      } else {
        const match = FILENAME_REGEX.exec(relativePath);
        const filename = match[1];
        slug = `/${filename}`
      }
    }
    createNodeField({node, name: 'slug', value: slug});
  }
};
