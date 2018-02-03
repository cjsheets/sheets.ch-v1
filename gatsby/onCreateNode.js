// Create slugs for files.
// Slug will used for blog page path.

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

module.exports = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;
  let slug;

  switch (node.internal.type) {
    case 'MarkdownRemark':
      const {permalink, redirect_from} = node.frontmatter;
      const {relativePath} = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        const pathRoot = relativePath.includes('post') && 'post' || relativePath.includes('project') && 'project';
        if (pathRoot) {
          // Posts don't have embedded permalinks.
          // Their slugs follow a pattern: /post/<year>/<month>/<day>/<slug>.html
          // The date portion comes from the file name: <date>-<title>.md
          const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
          const year = match[1];
          const month = match[2];
          const day = match[3];
          const filename = match[4];

          slug = `/${pathRoot}/${year}/${month}/${day}/${filename}.html`;

          const date = new Date(year, month - 1, day);

          // Blog posts are sorted by date and display the date in their header.
          createNodeField({node, name: 'date', value: date.toJSON()});
        }
      }

    createNodeField({node, name: 'slug', value: slug});
    createNodeField({node, name: 'path', value: relativePath}); // GitHub edit link
    createNodeField({node, name: 'redirect', value: redirect_from ? JSON.stringify(redirect_from) : ''});
    return;
  }
};