const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

module.exports = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;
  let slug;

  switch (node.internal.type) {
    case 'MarkdownRemark':
      const {permalink} = node.frontmatter;
      const {relativePath} = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        const pathRoot = relativePath.includes('post') && 'post' || relativePath.includes('project') && 'project';
        if (pathRoot) {
          const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
          const year = match[1];
          const month = match[2];
          const day = match[3];
          const filename = match[4];

          slug = `/${pathRoot}/${year}/${month}/${day}/${filename}.html`;

          const date = new Date(year, month - 1, day);

          createNodeField({node, name: 'date', value: date.toJSON()});
        }
      }

    createNodeField({node, name: 'slug', value: slug});
    createNodeField({node, name: 'path', value: relativePath}); // GitHub edit link
    return;
  }
};