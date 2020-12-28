const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const moment = require('moment');
const config = require('./content/config');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve('src/templates/post.tsx');
  const tagPage = path.resolve('src/templates/tag.tsx');
  const listingPage = path.resolve('./src/templates/listing.tsx');

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              postGroup
            }
            frontmatter {
              title
              tags
              date
            }
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();

  const markdownQueryResultEdges = markdownQueryResult.data.allMarkdownRemark.edges;
  const allPostsEdges = markdownQueryResultEdges.filter(
    (edge) => edge.node.fields.postGroup && !edge.node.frontmatter.draft
  );

  config.postDirectories.forEach((postGroup) => {
    const postsEdges = allPostsEdges.filter((edge) => edge.node.fields.postGroup === postGroup);

    // Sort posts
    postsEdges.sort((postA, postB) => {
      const dateA = moment(postA.node.frontmatter.date, config.dateFromFormat);

      const dateB = moment(postB.node.frontmatter.date, config.dateFromFormat);

      if (dateA.isBefore(dateB)) return 1;
      if (dateB.isBefore(dateA)) return -1;

      return 0;
    });

    // Paging
    const { postsPerPage } = config;
    const pageCount = Math.ceil(postsEdges.length / postsPerPage);

    [...Array(pageCount)].forEach((_val, pageNum) => {
      createPage({
        path: `${postGroup}/${(pageNum > 0 && pageNum + 1) || ''}`,
        component: listingPage,
        context: {
          limit: postsPerPage,
          skip: pageNum * postsPerPage,
          pageCount,
          currentPageNum: pageNum + 1,
        },
      });
    });

    // Post page creating
    postsEdges.forEach((edge, index) => {
      // Generate a list of tags
      if (edge.node.frontmatter.tags) {
        edge.node.frontmatter.tags.forEach((tag) => {
          tagSet.add(tag);
        });
      }

      // Create post pages
      const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
      const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
      const nextEdge = postsEdges[nextID];
      const prevEdge = postsEdges[prevID];

      createPage({
        path: edge.node.fields.slug,
        component: postPage,
        context: {
          slug: edge.node.fields.slug,
          nexttitle: nextEdge.node.frontmatter.title,
          nextslug: nextEdge.node.fields.slug,
          prevtitle: prevEdge.node.frontmatter.title,
          prevslug: prevEdge.node.fields.slug,
        },
      });
    });
  });

  //  Create tag pages
  tagSet.forEach((tag) => {
    createPage({
      path: `/tags/${toKebabCase(tag)}/`,
      component: tagPage,
      context: { tag },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (node.frontmatter && node.frontmatter.title) {
      slug = `/${toKebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== '') {
      slug = `/${parsedFilePath.name}`;
    } else {
      slug = `/${parsedFilePath.dir}`;
    }

    if (parsedFilePath.dir && config.postDirectories.indexOf(parsedFilePath.dir) >= 0) {
      createNodeField({ node, name: 'postGroup', value: parsedFilePath.dir });
    }

    if (node.frontmatter && node.frontmatter.slug) {
      slug = `/${toKebabCase(node.frontmatter.slug)}`;
    }

    if (node.frontmatter && node.frontmatter.date) {
      const date = moment(node.frontmatter.date, config.dateFromFormat);
      if (!date.isValid) {
        // eslint-disable-next-line no-console
        console.warn(`WARNING: Invalid date.`, node.frontmatter);
      }

      createNodeField({ node, name: 'date', value: date.toISOString() });
    }

    createNodeField({ node, name: 'slug', value: slug });
  }
};

function toKebabCase(str) {
  return str
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}
