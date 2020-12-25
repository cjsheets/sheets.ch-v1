/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any;
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
}

export interface RootQueryType {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */;
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */;
  allDirectory?: DirectoryConnection | null /** Connection to all Directory nodes */;
  allFile?: FileConnection | null /** Connection to all File nodes */;
  allImageSharp?: ImageSharpConnection | null /** Connection to all ImageSharp nodes */;
  allMarkdownRemark?: MarkdownRemarkConnection | null /** Connection to all MarkdownRemark nodes */;
  sitePage?: SitePage | null;
  sitePlugin?: SitePlugin | null;
  site?: Site | null;
  directory?: Directory | null;
  file?: File | null;
  imageSharp?: ImageSharp | null;
  markdownRemark?: MarkdownRemark | null;
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (SitePageEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (sitePageGroupConnectionConnection | null)[] | null;
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */;
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */;
  next?: SitePage | null /** The next edge in the connection */;
  previous?: SitePage | null /** The previous edge in the connection */;
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  jsonName?: string | null;
  internalComponentName?: string | null;
  path?: string | null;
  component?: string | null;
  componentChunkName?: string | null;
  context?: context | null;
  pluginCreator?: SitePlugin | null;
  pluginCreatorId?: string | null;
  componentPath?: string | null;
  internal?: internal_8 | null;
}

export interface context {
  slug?: string | null;
  previous?: previous | null;
  next?: next | null;
}

export interface previous {
  fields?: fields_2 | null;
  frontmatter?: frontmatter_2 | null;
}

export interface fields_2 {
  slug?: string | null;
}

export interface frontmatter_2 {
  title?: string | null;
}

export interface next {
  fields?: fields_3 | null;
  frontmatter?: frontmatter_3 | null;
}

export interface fields_3 {
  slug?: string | null;
}

export interface frontmatter_3 {
  title?: string | null;
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  resolve?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_3 | null;
  nodeAPIs?: (string | null)[] | null;
  browserAPIs?: (string | null)[] | null;
  ssrAPIs?: (string | null)[] | null;
  pluginFilepath?: string | null;
  packageJson?: packageJson_2 | null;
  internal?: internal_9 | null;
}

export interface pluginOptions_3 {
  plugins?: (plugins_2 | null)[] | null;
  path?: string | null;
  name?: string | null;
  maxWidth?: number | null;
  wrapperStyle?: string | null;
  backgroundColor?: string | null;
  linkImagesToOriginal?: boolean | null;
  showCaptions?: boolean | null;
  pathPrefix?: string | null;
  ignoreFileExtensions?: (string | null)[] | null;
  pathCheck?: boolean | null;
}

export interface plugins_2 {
  resolve?: string | null;
  id?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_4 | null;
  pluginFilepath?: string | null;
}

export interface pluginOptions_4 {
  maxWidth?: number | null;
  wrapperStyle?: string | null;
  backgroundColor?: string | null;
  linkImagesToOriginal?: boolean | null;
  showCaptions?: boolean | null;
  pathPrefix?: string | null;
  ignoreFileExtensions?: (string | null)[] | null;
}

export interface packageJson_2 {
  name?: string | null;
  description?: string | null;
  version?: string | null;
  main?: string | null;
  author?: string | null;
  license?: string | null;
  dependencies?: (dependencies_2 | null)[] | null;
  devDependencies?: (devDependencies_2 | null)[] | null;
  peerDependencies?: (peerDependencies_2 | null)[] | null;
  keywords?: (string | null)[] | null;
}

export interface dependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface devDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface peerDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface internal_9 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface internal_8 {
  type?: string | null;
  contentDigest?: string | null;
  description?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (sitePageGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */;
  next?: SitePage | null /** The next edge in the connection */;
  previous?: SitePage | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (SitePluginEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (sitePluginGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */;
  next?: SitePlugin | null /** The next edge in the connection */;
  previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (sitePluginGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */;
  next?: SitePlugin | null /** The next edge in the connection */;
  previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (DirectoryEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (directoryGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null /** The item at the end of the edge */;
  next?: Directory | null /** The next edge in the connection */;
  previous?: Directory | null /** The previous edge in the connection */;
}
/** Node of type Directory */
export interface Directory extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  internal?: internal_10 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
  root?: string | null;
  dir?: string | null;
  base?: string | null;
  ext?: string | null;
  name?: string | null;
  relativeDirectory?: string | null;
  dev?: number | null;
  mode?: number | null;
  nlink?: number | null;
  uid?: number | null;
  gid?: number | null;
  rdev?: number | null;
  blksize?: number | null;
  ino?: number | null;
  blocks?: number | null;
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
}

export interface internal_10 {
  contentDigest?: string | null;
  type?: string | null;
  description?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (directoryGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface directoryGroupConnectionEdge {
  node?: Directory | null /** The item at the end of the edge */;
  next?: Directory | null /** The next edge in the connection */;
  previous?: Directory | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (FileEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (fileGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface FileEdge {
  node?: File | null /** The item at the end of the edge */;
  next?: File | null /** The next edge in the connection */;
  previous?: File | null /** The previous edge in the connection */;
}
/** Node of type File */
export interface File extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */;
  childImageSharp?: ImageSharp | null /** The child of this node of type imageSharp */;
  internal?: internal_11 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
  root?: string | null;
  dir?: string | null;
  base?: string | null;
  ext?: string | null;
  name?: string | null;
  relativeDirectory?: string | null;
  dev?: number | null;
  mode?: number | null;
  nlink?: number | null;
  uid?: number | null;
  gid?: number | null;
  rdev?: number | null;
  blksize?: number | null;
  ino?: number | null;
  blocks?: number | null;
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
  publicURL?: string | null /** Copy file to static directory and return public url to it */;
}
/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  internal?: internal_12 | null;
  frontmatter?: frontmatter_4 | null;
  rawMarkdownBody?: string | null;
  fileAbsolutePath?: string | null;
  fields?: fields_4 | null;
  html?: string | null;
  htmlAst?: JSON | null;
  excerpt?: string | null;
  headings?: (MarkdownHeading | null)[] | null;
  timeToRead?: number | null;
  tableOfContents?: string | null;
  wordCount?: wordCount | null;
}

export interface internal_12 {
  content?: string | null;
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
  fieldOwners?: fieldOwners_2 | null;
}

export interface fieldOwners_2 {
  slug?: string | null;
}

export interface frontmatter_4 {
  title?: string | null;
  _PARENT?: string | null;
  createdDate?: Date | null;
  date?: Date | null;
  author?: string | null;
  tags?: (string | null)[] | null;
  draft?: boolean | null;
}

export interface fields_4 {
  slug?: string | null;
}

export interface MarkdownHeading {
  value?: string | null;
  depth?: number | null;
}

export interface wordCount {
  paragraphs?: number | null;
  sentences?: number | null;
  words?: number | null;
}
/** Node of type ImageSharp */
export interface ImageSharp extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  internal?: internal_13 | null;
  fixed?: ImageSharpFixed | null;
  resolutions?: ImageSharpResolutions | null;
  fluid?: ImageSharpFluid | null;
  sizes?: ImageSharpSizes | null;
  original?: ImageSharpOriginal | null;
  resize?: ImageSharpResize | null;
}

export interface internal_13 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface ImageSharpFixed {
  base64?: string | null;
  tracedSVG?: string | null;
  aspectRatio?: number | null;
  width?: number | null;
  height?: number | null;
  src?: string | null;
  srcSet?: string | null;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  originalName?: string | null;
}

export interface ImageSharpResolutions {
  base64?: string | null;
  tracedSVG?: string | null;
  aspectRatio?: number | null;
  width?: number | null;
  height?: number | null;
  src?: string | null;
  srcSet?: string | null;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  originalName?: string | null;
}

export interface ImageSharpFluid {
  base64?: string | null;
  tracedSVG?: string | null;
  aspectRatio?: number | null;
  src?: string | null;
  srcSet?: string | null;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes?: string | null;
  originalImg?: string | null;
  originalName?: string | null;
}

export interface ImageSharpSizes {
  base64?: string | null;
  tracedSVG?: string | null;
  aspectRatio?: number | null;
  src?: string | null;
  srcSet?: string | null;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes?: string | null;
  originalImg?: string | null;
  originalName?: string | null;
}

export interface ImageSharpOriginal {
  width?: number | null;
  height?: number | null;
  src?: string | null;
}

export interface ImageSharpResize {
  src?: string | null;
  tracedSVG?: string | null;
  width?: number | null;
  height?: number | null;
  aspectRatio?: number | null;
  originalName?: string | null;
}

export interface internal_11 {
  contentDigest?: string | null;
  type?: string | null;
  mediaType?: string | null;
  description?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (fileGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File | null /** The item at the end of the edge */;
  next?: File | null /** The next edge in the connection */;
  previous?: File | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface ImageSharpConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (ImageSharpEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (imageSharpGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface ImageSharpEdge {
  node?: ImageSharp | null /** The item at the end of the edge */;
  next?: ImageSharp | null /** The next edge in the connection */;
  previous?: ImageSharp | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface imageSharpGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (imageSharpGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface imageSharpGroupConnectionEdge {
  node?: ImageSharp | null /** The item at the end of the edge */;
  next?: ImageSharp | null /** The next edge in the connection */;
  previous?: ImageSharp | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (MarkdownRemarkEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (markdownRemarkGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */;
  next?: MarkdownRemark | null /** The next edge in the connection */;
  previous?: MarkdownRemark | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (markdownRemarkGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */;
  next?: MarkdownRemark | null /** The next edge in the connection */;
  previous?: MarkdownRemark | null /** The previous edge in the connection */;
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  siteMetadata?: siteMetadata_2 | null;
  port?: Date | null;
  host?: string | null;
  pathPrefix?: string | null;
  polyfill?: boolean | null;
  buildTime?: Date | null;
  internal?: internal_14 | null;
}

export interface siteMetadata_2 {
  siteName?: string | null;
  title?: string | null;
  author?: string | null;
  description?: string | null;
  siteUrl?: string | null;
}

export interface internal_14 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export namespace RootQueryTypeResolvers {
  export interface Resolvers {
    allSitePage?: AllSitePageResolver /** Connection to all SitePage nodes */;
    allSitePlugin?: AllSitePluginResolver /** Connection to all SitePlugin nodes */;
    allDirectory?: AllDirectoryResolver /** Connection to all Directory nodes */;
    allFile?: AllFileResolver /** Connection to all File nodes */;
    allImageSharp?: AllImageSharpResolver /** Connection to all ImageSharp nodes */;
    allMarkdownRemark?: AllMarkdownRemarkResolver /** Connection to all MarkdownRemark nodes */;
    sitePage?: SitePageResolver;
    sitePlugin?: SitePluginResolver;
    site?: SiteResolver;
    directory?: DirectoryResolver;
    file?: FileResolver;
    imageSharp?: ImageSharpResolver;
    markdownRemark?: MarkdownRemarkResolver;
  }

  export type AllSitePageResolver = Resolver<SitePageConnection | null, AllSitePageArgs>;
  export interface AllSitePageArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: sitePageConnectionSort | null;
    filter?: filterSitePage | null;
  }

  export type AllSitePluginResolver = Resolver<SitePluginConnection | null, AllSitePluginArgs>;
  export interface AllSitePluginArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: sitePluginConnectionSort | null;
    filter?: filterSitePlugin | null;
  }

  export type AllDirectoryResolver = Resolver<DirectoryConnection | null, AllDirectoryArgs>;
  export interface AllDirectoryArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: directoryConnectionSort | null;
    filter?: filterDirectory | null;
  }

  export type AllFileResolver = Resolver<FileConnection | null, AllFileArgs>;
  export interface AllFileArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: fileConnectionSort | null;
    filter?: filterFile | null;
  }

  export type AllImageSharpResolver = Resolver<ImageSharpConnection | null, AllImageSharpArgs>;
  export interface AllImageSharpArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: imageSharpConnectionSort | null;
    filter?: filterImageSharp | null;
  }

  export type AllMarkdownRemarkResolver = Resolver<
    MarkdownRemarkConnection | null,
    AllMarkdownRemarkArgs
  >;
  export interface AllMarkdownRemarkArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: markdownRemarkConnectionSort | null;
    filter?: filterMarkdownRemark | null;
  }

  export type SitePageResolver = Resolver<SitePage | null, SitePageArgs>;
  export interface SitePageArgs {
    jsonName?: sitePageJsonNameQueryString | null;
    internalComponentName?: sitePageInternalComponentNameQueryString | null;
    path?: sitePagePathQueryString_2 | null;
    component?: sitePageComponentQueryString | null;
    componentChunkName?: sitePageComponentChunkNameQueryString | null;
    context?: sitePageContextInputObject | null;
    pluginCreator?: sitePagePluginCreatorInputObject | null;
    pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
    componentPath?: sitePageComponentPathQueryString | null;
    id?: sitePageIdQueryString_2 | null;
    internal?: sitePageInternalInputObject_2 | null;
  }

  export type SitePluginResolver = Resolver<SitePlugin | null, SitePluginArgs>;
  export interface SitePluginArgs {
    resolve?: sitePluginResolveQueryString_2 | null;
    id?: sitePluginIdQueryString_2 | null;
    name?: sitePluginNameQueryString_2 | null;
    version?: sitePluginVersionQueryString_2 | null;
    pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
    nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
    browserAPIs?: sitePluginBrowserApIsQueryList_2 | null;
    ssrAPIs?: sitePluginSsrApIsQueryList_2 | null;
    pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null;
    packageJson?: sitePluginPackageJsonInputObject_2 | null;
    internal?: sitePluginInternalInputObject_2 | null;
  }

  export type SiteResolver = Resolver<Site | null, SiteArgs>;
  export interface SiteArgs {
    siteMetadata?: siteSiteMetadataInputObject_2 | null;
    port?: sitePortQueryString_2 | null;
    host?: siteHostQueryString_2 | null;
    pathPrefix?: sitePathPrefixQueryString_2 | null;
    polyfill?: sitePolyfillQueryBoolean_2 | null;
    buildTime?: siteBuildTimeQueryString_2 | null;
    id?: siteIdQueryString_2 | null;
    internal?: siteInternalInputObject_2 | null;
  }

  export type DirectoryResolver = Resolver<Directory | null, DirectoryArgs>;
  export interface DirectoryArgs {
    id?: directoryIdQueryString_2 | null;
    internal?: directoryInternalInputObject_2 | null;
    sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null;
    absolutePath?: directoryAbsolutePathQueryString_2 | null;
    relativePath?: directoryRelativePathQueryString_2 | null;
    extension?: directoryExtensionQueryString_2 | null;
    size?: directorySizeQueryInteger_2 | null;
    prettySize?: directoryPrettySizeQueryString_2 | null;
    modifiedTime?: directoryModifiedTimeQueryString_2 | null;
    accessTime?: directoryAccessTimeQueryString_2 | null;
    changeTime?: directoryChangeTimeQueryString_2 | null;
    birthTime?: directoryBirthTimeQueryString_2 | null;
    root?: directoryRootQueryString_2 | null;
    dir?: directoryDirQueryString_2 | null;
    base?: directoryBaseQueryString_2 | null;
    ext?: directoryExtQueryString_2 | null;
    name?: directoryNameQueryString_2 | null;
    relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null;
    dev?: directoryDevQueryInteger_2 | null;
    mode?: directoryModeQueryInteger_2 | null;
    nlink?: directoryNlinkQueryInteger_2 | null;
    uid?: directoryUidQueryInteger_2 | null;
    gid?: directoryGidQueryInteger_2 | null;
    rdev?: directoryRdevQueryInteger_2 | null;
    blksize?: directoryBlksizeQueryInteger_2 | null;
    ino?: directoryInoQueryInteger_2 | null;
    blocks?: directoryBlocksQueryInteger_2 | null;
    atimeMs?: directoryAtimeMsQueryFloat_2 | null;
    mtimeMs?: directoryMtimeMsQueryFloat_2 | null;
    ctimeMs?: directoryCtimeMsQueryFloat_2 | null;
    birthtimeMs?: directoryBirthtimeMsQueryFloat_2 | null;
    atime?: directoryAtimeQueryString_2 | null;
    mtime?: directoryMtimeQueryString_2 | null;
    ctime?: directoryCtimeQueryString_2 | null;
    birthtime?: directoryBirthtimeQueryString_2 | null;
  }

  export type FileResolver = Resolver<File | null, FileArgs>;
  export interface FileArgs {
    id?: fileIdQueryString_2 | null;
    internal?: fileInternalInputObject_2 | null;
    sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null;
    absolutePath?: fileAbsolutePathQueryString_2 | null;
    relativePath?: fileRelativePathQueryString_2 | null;
    extension?: fileExtensionQueryString_2 | null;
    size?: fileSizeQueryInteger_2 | null;
    prettySize?: filePrettySizeQueryString_2 | null;
    modifiedTime?: fileModifiedTimeQueryString_2 | null;
    accessTime?: fileAccessTimeQueryString_2 | null;
    changeTime?: fileChangeTimeQueryString_2 | null;
    birthTime?: fileBirthTimeQueryString_2 | null;
    root?: fileRootQueryString_2 | null;
    dir?: fileDirQueryString_2 | null;
    base?: fileBaseQueryString_2 | null;
    ext?: fileExtQueryString_2 | null;
    name?: fileNameQueryString_2 | null;
    relativeDirectory?: fileRelativeDirectoryQueryString_2 | null;
    dev?: fileDevQueryInteger_2 | null;
    mode?: fileModeQueryInteger_2 | null;
    nlink?: fileNlinkQueryInteger_2 | null;
    uid?: fileUidQueryInteger_2 | null;
    gid?: fileGidQueryInteger_2 | null;
    rdev?: fileRdevQueryInteger_2 | null;
    blksize?: fileBlksizeQueryInteger_2 | null;
    ino?: fileInoQueryInteger_2 | null;
    blocks?: fileBlocksQueryInteger_2 | null;
    atimeMs?: fileAtimeMsQueryFloat_2 | null;
    mtimeMs?: fileMtimeMsQueryFloat_2 | null;
    ctimeMs?: fileCtimeMsQueryFloat_2 | null;
    birthtimeMs?: fileBirthtimeMsQueryFloat_2 | null;
    atime?: fileAtimeQueryString_2 | null;
    mtime?: fileMtimeQueryString_2 | null;
    ctime?: fileCtimeQueryString_2 | null;
    birthtime?: fileBirthtimeQueryString_2 | null;
    publicURL?: publicUrlQueryString_3 | null;
  }

  export type ImageSharpResolver = Resolver<ImageSharp | null, ImageSharpArgs>;
  export interface ImageSharpArgs {
    id?: imageSharpIdQueryString_2 | null;
    internal?: imageSharpInternalInputObject_2 | null;
    fixed?: fixedTypeName_3 | null;
    resolutions?: resolutionsTypeName_3 | null;
    fluid?: fluidTypeName_3 | null;
    sizes?: sizesTypeName_3 | null;
    original?: originalTypeName_3 | null;
    resize?: resizeTypeName_3 | null;
  }

  export type MarkdownRemarkResolver = Resolver<MarkdownRemark | null, MarkdownRemarkArgs>;
  export interface MarkdownRemarkArgs {
    id?: markdownRemarkIdQueryString_2 | null;
    internal?: markdownRemarkInternalInputObject_2 | null;
    frontmatter?: markdownRemarkFrontmatterInputObject_2 | null;
    excerpt?: excerptQueryString_3 | null;
    rawMarkdownBody?: markdownRemarkRawMarkdownBodyQueryString_2 | null;
    fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null;
    fields?: markdownRemarkFieldsInputObject_2 | null;
    html?: htmlQueryString_3 | null;
    headings?: headingsQueryList_3 | null;
    timeToRead?: timeToReadQueryInt_3 | null;
    tableOfContents?: tableOfContentsQueryString_3 | null;
    wordCount?: wordCountTypeName_3 | null;
  }
}
/** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(SitePageEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<(string | null)[] | null, DistinctArgs>;
  export interface DistinctArgs {
    field?: sitePageDistinctEnum | null;
  }

  export type GroupResolver = Resolver<
    (sitePageGroupConnectionConnection | null)[] | null,
    GroupArgs
  >;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: sitePageGroupEnum | null;
  }
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers {
    hasNextPage?: HasNextPageResolver /** When paginating, are there more items? */;
  }

  export type HasNextPageResolver = Resolver<boolean>;
}
/** An edge in a connection. */
export namespace SitePageEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePage | null>;
  export type NextResolver = Resolver<SitePage | null>;
  export type PreviousResolver = Resolver<SitePage | null>;
}
/** Node of type SitePage */
export namespace SitePageResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    jsonName?: JsonNameResolver;
    internalComponentName?: InternalComponentNameResolver;
    path?: PathResolver;
    component?: ComponentResolver;
    componentChunkName?: ComponentChunkNameResolver;
    context?: ContextResolver;
    pluginCreator?: PluginCreatorResolver;
    pluginCreatorId?: PluginCreatorIdResolver;
    componentPath?: ComponentPathResolver;
    internal?: InternalResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type JsonNameResolver = Resolver<string | null>;
  export type InternalComponentNameResolver = Resolver<string | null>;
  export type PathResolver = Resolver<string | null>;
  export type ComponentResolver = Resolver<string | null>;
  export type ComponentChunkNameResolver = Resolver<string | null>;
  export type ContextResolver = Resolver<context | null>;
  export type PluginCreatorResolver = Resolver<SitePlugin | null>;
  export type PluginCreatorIdResolver = Resolver<string | null>;
  export type ComponentPathResolver = Resolver<string | null>;
  export type InternalResolver = Resolver<internal_8 | null>;
}

export namespace contextResolvers {
  export interface Resolvers {
    slug?: SlugResolver;
    previous?: PreviousResolver;
    next?: NextResolver;
  }

  export type SlugResolver = Resolver<string | null>;
  export type PreviousResolver = Resolver<previous | null>;
  export type NextResolver = Resolver<next | null>;
}

export namespace previousResolvers {
  export interface Resolvers {
    fields?: FieldsResolver;
    frontmatter?: FrontmatterResolver;
  }

  export type FieldsResolver = Resolver<fields_2 | null>;
  export type FrontmatterResolver = Resolver<frontmatter_2 | null>;
}

export namespace fields_2Resolvers {
  export interface Resolvers {
    slug?: SlugResolver;
  }

  export type SlugResolver = Resolver<string | null>;
}

export namespace frontmatter_2Resolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}

export namespace nextResolvers {
  export interface Resolvers {
    fields?: FieldsResolver;
    frontmatter?: FrontmatterResolver;
  }

  export type FieldsResolver = Resolver<fields_3 | null>;
  export type FrontmatterResolver = Resolver<frontmatter_3 | null>;
}

export namespace fields_3Resolvers {
  export interface Resolvers {
    slug?: SlugResolver;
  }

  export type SlugResolver = Resolver<string | null>;
}

export namespace frontmatter_3Resolvers {
  export interface Resolvers {
    title?: TitleResolver;
  }

  export type TitleResolver = Resolver<string | null>;
}
/** Node of type SitePlugin */
export namespace SitePluginResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    resolve?: ResolveResolver;
    name?: NameResolver;
    version?: VersionResolver;
    pluginOptions?: PluginOptionsResolver;
    nodeAPIs?: NodeAPIsResolver;
    browserAPIs?: BrowserAPIsResolver;
    ssrAPIs?: SsrAPIsResolver;
    pluginFilepath?: PluginFilepathResolver;
    packageJson?: PackageJsonResolver;
    internal?: InternalResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type ResolveResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
  export type PluginOptionsResolver = Resolver<pluginOptions_3 | null>;
  export type NodeAPIsResolver = Resolver<(string | null)[] | null>;
  export type BrowserAPIsResolver = Resolver<(string | null)[] | null>;
  export type SsrAPIsResolver = Resolver<(string | null)[] | null>;
  export type PluginFilepathResolver = Resolver<string | null>;
  export type PackageJsonResolver = Resolver<packageJson_2 | null>;
  export type InternalResolver = Resolver<internal_9 | null>;
}

export namespace pluginOptions_3Resolvers {
  export interface Resolvers {
    plugins?: PluginsResolver;
    path?: PathResolver;
    name?: NameResolver;
    maxWidth?: MaxWidthResolver;
    wrapperStyle?: WrapperStyleResolver;
    backgroundColor?: BackgroundColorResolver;
    linkImagesToOriginal?: LinkImagesToOriginalResolver;
    showCaptions?: ShowCaptionsResolver;
    pathPrefix?: PathPrefixResolver;
    ignoreFileExtensions?: IgnoreFileExtensionsResolver;
    pathCheck?: PathCheckResolver;
  }

  export type PluginsResolver = Resolver<(plugins_2 | null)[] | null>;
  export type PathResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type MaxWidthResolver = Resolver<number | null>;
  export type WrapperStyleResolver = Resolver<string | null>;
  export type BackgroundColorResolver = Resolver<string | null>;
  export type LinkImagesToOriginalResolver = Resolver<boolean | null>;
  export type ShowCaptionsResolver = Resolver<boolean | null>;
  export type PathPrefixResolver = Resolver<string | null>;
  export type IgnoreFileExtensionsResolver = Resolver<(string | null)[] | null>;
  export type PathCheckResolver = Resolver<boolean | null>;
}

export namespace plugins_2Resolvers {
  export interface Resolvers {
    resolve?: ResolveResolver;
    id?: IdResolver;
    name?: NameResolver;
    version?: VersionResolver;
    pluginOptions?: PluginOptionsResolver;
    pluginFilepath?: PluginFilepathResolver;
  }

  export type ResolveResolver = Resolver<string | null>;
  export type IdResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
  export type PluginOptionsResolver = Resolver<pluginOptions_4 | null>;
  export type PluginFilepathResolver = Resolver<string | null>;
}

export namespace pluginOptions_4Resolvers {
  export interface Resolvers {
    maxWidth?: MaxWidthResolver;
    wrapperStyle?: WrapperStyleResolver;
    backgroundColor?: BackgroundColorResolver;
    linkImagesToOriginal?: LinkImagesToOriginalResolver;
    showCaptions?: ShowCaptionsResolver;
    pathPrefix?: PathPrefixResolver;
    ignoreFileExtensions?: IgnoreFileExtensionsResolver;
  }

  export type MaxWidthResolver = Resolver<number | null>;
  export type WrapperStyleResolver = Resolver<string | null>;
  export type BackgroundColorResolver = Resolver<string | null>;
  export type LinkImagesToOriginalResolver = Resolver<boolean | null>;
  export type ShowCaptionsResolver = Resolver<boolean | null>;
  export type PathPrefixResolver = Resolver<string | null>;
  export type IgnoreFileExtensionsResolver = Resolver<(string | null)[] | null>;
}

export namespace packageJson_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    description?: DescriptionResolver;
    version?: VersionResolver;
    main?: MainResolver;
    author?: AuthorResolver;
    license?: LicenseResolver;
    dependencies?: DependenciesResolver;
    devDependencies?: DevDependenciesResolver;
    peerDependencies?: PeerDependenciesResolver;
    keywords?: KeywordsResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
  export type MainResolver = Resolver<string | null>;
  export type AuthorResolver = Resolver<string | null>;
  export type LicenseResolver = Resolver<string | null>;
  export type DependenciesResolver = Resolver<(dependencies_2 | null)[] | null>;
  export type DevDependenciesResolver = Resolver<(devDependencies_2 | null)[] | null>;
  export type PeerDependenciesResolver = Resolver<(peerDependencies_2 | null)[] | null>;
  export type KeywordsResolver = Resolver<(string | null)[] | null>;
}

export namespace dependencies_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    version?: VersionResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
}

export namespace devDependencies_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    version?: VersionResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
}

export namespace peerDependencies_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    version?: VersionResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
}

export namespace internal_9Resolvers {
  export interface Resolvers {
    contentDigest?: ContentDigestResolver;
    type?: TypeResolver;
    owner?: OwnerResolver;
  }

  export type ContentDigestResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}

export namespace internal_8Resolvers {
  export interface Resolvers {
    type?: TypeResolver;
    contentDigest?: ContentDigestResolver;
    description?: DescriptionResolver;
    owner?: OwnerResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type ContentDigestResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}
/** A connection to a list of items. */
export namespace sitePageGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(sitePageGroupConnectionEdge | null)[] | null>;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace sitePageGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePage | null>;
  export type NextResolver = Resolver<SitePage | null>;
  export type PreviousResolver = Resolver<SitePage | null>;
}
/** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(SitePluginEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<(string | null)[] | null, DistinctArgs>;
  export interface DistinctArgs {
    field?: sitePluginDistinctEnum | null;
  }

  export type GroupResolver = Resolver<
    (sitePluginGroupConnectionConnection | null)[] | null,
    GroupArgs
  >;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: sitePluginGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePlugin | null>;
  export type NextResolver = Resolver<SitePlugin | null>;
  export type PreviousResolver = Resolver<SitePlugin | null>;
}
/** A connection to a list of items. */
export namespace sitePluginGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(sitePluginGroupConnectionEdge | null)[] | null>;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace sitePluginGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePlugin | null>;
  export type NextResolver = Resolver<SitePlugin | null>;
  export type PreviousResolver = Resolver<SitePlugin | null>;
}
/** A connection to a list of items. */
export namespace DirectoryConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(DirectoryEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<(string | null)[] | null, DistinctArgs>;
  export interface DistinctArgs {
    field?: directoryDistinctEnum | null;
  }

  export type GroupResolver = Resolver<
    (directoryGroupConnectionConnection | null)[] | null,
    GroupArgs
  >;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: directoryGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace DirectoryEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<Directory | null>;
  export type NextResolver = Resolver<Directory | null>;
  export type PreviousResolver = Resolver<Directory | null>;
}
/** Node of type Directory */
export namespace DirectoryResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    internal?: InternalResolver;
    sourceInstanceName?: SourceInstanceNameResolver;
    absolutePath?: AbsolutePathResolver;
    relativePath?: RelativePathResolver;
    extension?: ExtensionResolver;
    size?: SizeResolver;
    prettySize?: PrettySizeResolver;
    modifiedTime?: ModifiedTimeResolver;
    accessTime?: AccessTimeResolver;
    changeTime?: ChangeTimeResolver;
    birthTime?: BirthTimeResolver;
    root?: RootResolver;
    dir?: DirResolver;
    base?: BaseResolver;
    ext?: ExtResolver;
    name?: NameResolver;
    relativeDirectory?: RelativeDirectoryResolver;
    dev?: DevResolver;
    mode?: ModeResolver;
    nlink?: NlinkResolver;
    uid?: UidResolver;
    gid?: GidResolver;
    rdev?: RdevResolver;
    blksize?: BlksizeResolver;
    ino?: InoResolver;
    blocks?: BlocksResolver;
    atimeMs?: AtimeMsResolver;
    mtimeMs?: MtimeMsResolver;
    ctimeMs?: CtimeMsResolver;
    birthtimeMs?: BirthtimeMsResolver;
    atime?: AtimeResolver;
    mtime?: MtimeResolver;
    ctime?: CtimeResolver;
    birthtime?: BirthtimeResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type InternalResolver = Resolver<internal_10 | null>;
  export type SourceInstanceNameResolver = Resolver<string | null>;
  export type AbsolutePathResolver = Resolver<string | null>;
  export type RelativePathResolver = Resolver<string | null>;
  export type ExtensionResolver = Resolver<string | null>;
  export type SizeResolver = Resolver<number | null>;
  export type PrettySizeResolver = Resolver<string | null>;
  export type ModifiedTimeResolver = Resolver<Date | null, ModifiedTimeArgs>;
  export interface ModifiedTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type AccessTimeResolver = Resolver<Date | null, AccessTimeArgs>;
  export interface AccessTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type ChangeTimeResolver = Resolver<Date | null, ChangeTimeArgs>;
  export interface ChangeTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type BirthTimeResolver = Resolver<Date | null, BirthTimeArgs>;
  export interface BirthTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type RootResolver = Resolver<string | null>;
  export type DirResolver = Resolver<string | null>;
  export type BaseResolver = Resolver<string | null>;
  export type ExtResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type RelativeDirectoryResolver = Resolver<string | null>;
  export type DevResolver = Resolver<number | null>;
  export type ModeResolver = Resolver<number | null>;
  export type NlinkResolver = Resolver<number | null>;
  export type UidResolver = Resolver<number | null>;
  export type GidResolver = Resolver<number | null>;
  export type RdevResolver = Resolver<number | null>;
  export type BlksizeResolver = Resolver<number | null>;
  export type InoResolver = Resolver<number | null>;
  export type BlocksResolver = Resolver<number | null>;
  export type AtimeMsResolver = Resolver<number | null>;
  export type MtimeMsResolver = Resolver<number | null>;
  export type CtimeMsResolver = Resolver<number | null>;
  export type BirthtimeMsResolver = Resolver<number | null>;
  export type AtimeResolver = Resolver<Date | null, AtimeArgs>;
  export interface AtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type MtimeResolver = Resolver<Date | null, MtimeArgs>;
  export interface MtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type CtimeResolver = Resolver<Date | null, CtimeArgs>;
  export interface CtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type BirthtimeResolver = Resolver<Date | null, BirthtimeArgs>;
  export interface BirthtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }
}

export namespace internal_10Resolvers {
  export interface Resolvers {
    contentDigest?: ContentDigestResolver;
    type?: TypeResolver;
    description?: DescriptionResolver;
    owner?: OwnerResolver;
  }

  export type ContentDigestResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}
/** A connection to a list of items. */
export namespace directoryGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(directoryGroupConnectionEdge | null)[] | null>;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace directoryGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<Directory | null>;
  export type NextResolver = Resolver<Directory | null>;
  export type PreviousResolver = Resolver<Directory | null>;
}
/** A connection to a list of items. */
export namespace FileConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(FileEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<(string | null)[] | null, DistinctArgs>;
  export interface DistinctArgs {
    field?: fileDistinctEnum | null;
  }

  export type GroupResolver = Resolver<(fileGroupConnectionConnection | null)[] | null, GroupArgs>;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: fileGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace FileEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<File | null>;
  export type NextResolver = Resolver<File | null>;
  export type PreviousResolver = Resolver<File | null>;
}
/** Node of type File */
export namespace FileResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    childMarkdownRemark?: ChildMarkdownRemarkResolver /** The child of this node of type markdownRemark */;
    childImageSharp?: ChildImageSharpResolver /** The child of this node of type imageSharp */;
    internal?: InternalResolver;
    sourceInstanceName?: SourceInstanceNameResolver;
    absolutePath?: AbsolutePathResolver;
    relativePath?: RelativePathResolver;
    extension?: ExtensionResolver;
    size?: SizeResolver;
    prettySize?: PrettySizeResolver;
    modifiedTime?: ModifiedTimeResolver;
    accessTime?: AccessTimeResolver;
    changeTime?: ChangeTimeResolver;
    birthTime?: BirthTimeResolver;
    root?: RootResolver;
    dir?: DirResolver;
    base?: BaseResolver;
    ext?: ExtResolver;
    name?: NameResolver;
    relativeDirectory?: RelativeDirectoryResolver;
    dev?: DevResolver;
    mode?: ModeResolver;
    nlink?: NlinkResolver;
    uid?: UidResolver;
    gid?: GidResolver;
    rdev?: RdevResolver;
    blksize?: BlksizeResolver;
    ino?: InoResolver;
    blocks?: BlocksResolver;
    atimeMs?: AtimeMsResolver;
    mtimeMs?: MtimeMsResolver;
    ctimeMs?: CtimeMsResolver;
    birthtimeMs?: BirthtimeMsResolver;
    atime?: AtimeResolver;
    mtime?: MtimeResolver;
    ctime?: CtimeResolver;
    birthtime?: BirthtimeResolver;
    publicURL?: PublicURLResolver /** Copy file to static directory and return public url to it */;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type ChildMarkdownRemarkResolver = Resolver<MarkdownRemark | null>;
  export type ChildImageSharpResolver = Resolver<ImageSharp | null>;
  export type InternalResolver = Resolver<internal_11 | null>;
  export type SourceInstanceNameResolver = Resolver<string | null>;
  export type AbsolutePathResolver = Resolver<string | null>;
  export type RelativePathResolver = Resolver<string | null>;
  export type ExtensionResolver = Resolver<string | null>;
  export type SizeResolver = Resolver<number | null>;
  export type PrettySizeResolver = Resolver<string | null>;
  export type ModifiedTimeResolver = Resolver<Date | null, ModifiedTimeArgs>;
  export interface ModifiedTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type AccessTimeResolver = Resolver<Date | null, AccessTimeArgs>;
  export interface AccessTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type ChangeTimeResolver = Resolver<Date | null, ChangeTimeArgs>;
  export interface ChangeTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type BirthTimeResolver = Resolver<Date | null, BirthTimeArgs>;
  export interface BirthTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type RootResolver = Resolver<string | null>;
  export type DirResolver = Resolver<string | null>;
  export type BaseResolver = Resolver<string | null>;
  export type ExtResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type RelativeDirectoryResolver = Resolver<string | null>;
  export type DevResolver = Resolver<number | null>;
  export type ModeResolver = Resolver<number | null>;
  export type NlinkResolver = Resolver<number | null>;
  export type UidResolver = Resolver<number | null>;
  export type GidResolver = Resolver<number | null>;
  export type RdevResolver = Resolver<number | null>;
  export type BlksizeResolver = Resolver<number | null>;
  export type InoResolver = Resolver<number | null>;
  export type BlocksResolver = Resolver<number | null>;
  export type AtimeMsResolver = Resolver<number | null>;
  export type MtimeMsResolver = Resolver<number | null>;
  export type CtimeMsResolver = Resolver<number | null>;
  export type BirthtimeMsResolver = Resolver<number | null>;
  export type AtimeResolver = Resolver<Date | null, AtimeArgs>;
  export interface AtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type MtimeResolver = Resolver<Date | null, MtimeArgs>;
  export interface MtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type CtimeResolver = Resolver<Date | null, CtimeArgs>;
  export interface CtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type BirthtimeResolver = Resolver<Date | null, BirthtimeArgs>;
  export interface BirthtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type PublicURLResolver = Resolver<string | null>;
}
/** Node of type MarkdownRemark */
export namespace MarkdownRemarkResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    internal?: InternalResolver;
    frontmatter?: FrontmatterResolver;
    rawMarkdownBody?: RawMarkdownBodyResolver;
    fileAbsolutePath?: FileAbsolutePathResolver;
    fields?: FieldsResolver;
    html?: HtmlResolver;
    htmlAst?: HtmlAstResolver;
    excerpt?: ExcerptResolver;
    headings?: HeadingsResolver;
    timeToRead?: TimeToReadResolver;
    tableOfContents?: TableOfContentsResolver;
    wordCount?: WordCountResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type InternalResolver = Resolver<internal_12 | null>;
  export type FrontmatterResolver = Resolver<frontmatter_4 | null>;
  export type RawMarkdownBodyResolver = Resolver<string | null>;
  export type FileAbsolutePathResolver = Resolver<string | null>;
  export type FieldsResolver = Resolver<fields_4 | null>;
  export type HtmlResolver = Resolver<string | null>;
  export type HtmlAstResolver = Resolver<JSON | null>;
  export type ExcerptResolver = Resolver<string | null, ExcerptArgs>;
  export interface ExcerptArgs {
    pruneLength?: number | null;
  }

  export type HeadingsResolver = Resolver<(MarkdownHeading | null)[] | null, HeadingsArgs>;
  export interface HeadingsArgs {
    depth?: HeadingLevels | null;
  }

  export type TimeToReadResolver = Resolver<number | null>;
  export type TableOfContentsResolver = Resolver<string | null>;
  export type WordCountResolver = Resolver<wordCount | null>;
}

export namespace internal_12Resolvers {
  export interface Resolvers {
    content?: ContentResolver;
    type?: TypeResolver;
    contentDigest?: ContentDigestResolver;
    owner?: OwnerResolver;
    fieldOwners?: FieldOwnersResolver;
  }

  export type ContentResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type ContentDigestResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
  export type FieldOwnersResolver = Resolver<fieldOwners_2 | null>;
}

export namespace fieldOwners_2Resolvers {
  export interface Resolvers {
    slug?: SlugResolver;
  }

  export type SlugResolver = Resolver<string | null>;
}

export namespace frontmatter_4Resolvers {
  export interface Resolvers {
    title?: TitleResolver;
    _PARENT?: _PARENTResolver;
    createdDate?: CreatedDateResolver;
    date?: DateResolver;
    author?: AuthorResolver;
    tags?: TagsResolver;
    draft?: DraftResolver;
  }

  export type TitleResolver = Resolver<string | null>;
  export type _PARENTResolver = Resolver<string | null>;
  export type CreatedDateResolver = Resolver<Date | null, CreatedDateArgs>;
  export interface CreatedDateArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type DateResolver = Resolver<Date | null, DateArgs>;
  export interface DateArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type AuthorResolver = Resolver<string | null>;
  export type TagsResolver = Resolver<(string | null)[] | null>;
  export type DraftResolver = Resolver<boolean | null>;
}

export namespace fields_4Resolvers {
  export interface Resolvers {
    slug?: SlugResolver;
  }

  export type SlugResolver = Resolver<string | null>;
}

export namespace MarkdownHeadingResolvers {
  export interface Resolvers {
    value?: ValueResolver;
    depth?: DepthResolver;
  }

  export type ValueResolver = Resolver<string | null>;
  export type DepthResolver = Resolver<number | null>;
}

export namespace wordCountResolvers {
  export interface Resolvers {
    paragraphs?: ParagraphsResolver;
    sentences?: SentencesResolver;
    words?: WordsResolver;
  }

  export type ParagraphsResolver = Resolver<number | null>;
  export type SentencesResolver = Resolver<number | null>;
  export type WordsResolver = Resolver<number | null>;
}
/** Node of type ImageSharp */
export namespace ImageSharpResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    internal?: InternalResolver;
    fixed?: FixedResolver;
    resolutions?: ResolutionsResolver;
    fluid?: FluidResolver;
    sizes?: SizesResolver;
    original?: OriginalResolver;
    resize?: ResizeResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type InternalResolver = Resolver<internal_13 | null>;
  export type FixedResolver = Resolver<ImageSharpFixed | null, FixedArgs>;
  export interface FixedArgs {
    width?: number | null;
    height?: number | null;
    jpegProgressive?: boolean | null;
    grayscale?: boolean | null;
    duotone?: DuotoneGradient | null;
    traceSVG?: Potrace | null;
    quality?: number | null;
    toFormat?: ImageFormat | null;
    cropFocus?: ImageCropFocus | null;
    rotate?: number | null;
  }

  export type ResolutionsResolver = Resolver<ImageSharpResolutions | null, ResolutionsArgs>;
  export interface ResolutionsArgs {
    width?: number | null;
    height?: number | null;
    jpegProgressive?: boolean | null;
    grayscale?: boolean | null;
    duotone?: DuotoneGradient | null;
    traceSVG?: Potrace | null;
    quality?: number | null;
    toFormat?: ImageFormat | null;
    cropFocus?: ImageCropFocus | null;
    rotate?: number | null;
  }

  export type FluidResolver = Resolver<ImageSharpFluid | null, FluidArgs>;
  export interface FluidArgs {
    maxWidth?: number | null;
    maxHeight?: number | null;
    grayscale?: boolean | null;
    jpegProgressive?: boolean | null;
    duotone?: DuotoneGradient | null;
    traceSVG?: Potrace | null;
    quality?: number | null;
    toFormat?: ImageFormat | null;
    cropFocus?: ImageCropFocus | null;
    rotate?: number | null;
  }

  export type SizesResolver = Resolver<ImageSharpSizes | null, SizesArgs>;
  export interface SizesArgs {
    maxWidth?: number | null;
    maxHeight?: number | null;
    grayscale?: boolean | null;
    jpegProgressive?: boolean | null;
    duotone?: DuotoneGradient | null;
    traceSVG?: Potrace | null;
    quality?: number | null;
    toFormat?: ImageFormat | null;
    cropFocus?: ImageCropFocus | null;
    rotate?: number | null;
  }

  export type OriginalResolver = Resolver<ImageSharpOriginal | null>;
  export type ResizeResolver = Resolver<ImageSharpResize | null, ResizeArgs>;
  export interface ResizeArgs {
    width?: number | null;
    height?: number | null;
    quality?: number | null;
    jpegProgressive?: boolean | null;
    pngCompressionLevel?: number | null;
    grayscale?: boolean | null;
    duotone?: DuotoneGradient | null;
    base64?: boolean | null;
    traceSVG?: Potrace | null;
    toFormat?: ImageFormat | null;
    cropFocus?: ImageCropFocus | null;
    rotate?: number | null;
  }
}

export namespace internal_13Resolvers {
  export interface Resolvers {
    contentDigest?: ContentDigestResolver;
    type?: TypeResolver;
    owner?: OwnerResolver;
  }

  export type ContentDigestResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}

export namespace ImageSharpFixedResolvers {
  export interface Resolvers {
    base64?: Base64Resolver;
    tracedSVG?: TracedSVGResolver;
    aspectRatio?: AspectRatioResolver;
    width?: WidthResolver;
    height?: HeightResolver;
    src?: SrcResolver;
    srcSet?: SrcSetResolver;
    srcWebp?: SrcWebpResolver;
    srcSetWebp?: SrcSetWebpResolver;
    originalName?: OriginalNameResolver;
  }

  export type Base64Resolver = Resolver<string | null>;
  export type TracedSVGResolver = Resolver<string | null>;
  export type AspectRatioResolver = Resolver<number | null>;
  export type WidthResolver = Resolver<number | null>;
  export type HeightResolver = Resolver<number | null>;
  export type SrcResolver = Resolver<string | null>;
  export type SrcSetResolver = Resolver<string | null>;
  export type SrcWebpResolver = Resolver<string | null>;
  export type SrcSetWebpResolver = Resolver<string | null>;
  export type OriginalNameResolver = Resolver<string | null>;
}

export namespace ImageSharpResolutionsResolvers {
  export interface Resolvers {
    base64?: Base64Resolver;
    tracedSVG?: TracedSVGResolver;
    aspectRatio?: AspectRatioResolver;
    width?: WidthResolver;
    height?: HeightResolver;
    src?: SrcResolver;
    srcSet?: SrcSetResolver;
    srcWebp?: SrcWebpResolver;
    srcSetWebp?: SrcSetWebpResolver;
    originalName?: OriginalNameResolver;
  }

  export type Base64Resolver = Resolver<string | null>;
  export type TracedSVGResolver = Resolver<string | null>;
  export type AspectRatioResolver = Resolver<number | null>;
  export type WidthResolver = Resolver<number | null>;
  export type HeightResolver = Resolver<number | null>;
  export type SrcResolver = Resolver<string | null>;
  export type SrcSetResolver = Resolver<string | null>;
  export type SrcWebpResolver = Resolver<string | null>;
  export type SrcSetWebpResolver = Resolver<string | null>;
  export type OriginalNameResolver = Resolver<string | null>;
}

export namespace ImageSharpFluidResolvers {
  export interface Resolvers {
    base64?: Base64Resolver;
    tracedSVG?: TracedSVGResolver;
    aspectRatio?: AspectRatioResolver;
    src?: SrcResolver;
    srcSet?: SrcSetResolver;
    srcWebp?: SrcWebpResolver;
    srcSetWebp?: SrcSetWebpResolver;
    sizes?: SizesResolver;
    originalImg?: OriginalImgResolver;
    originalName?: OriginalNameResolver;
  }

  export type Base64Resolver = Resolver<string | null>;
  export type TracedSVGResolver = Resolver<string | null>;
  export type AspectRatioResolver = Resolver<number | null>;
  export type SrcResolver = Resolver<string | null>;
  export type SrcSetResolver = Resolver<string | null>;
  export type SrcWebpResolver = Resolver<string | null>;
  export type SrcSetWebpResolver = Resolver<string | null>;
  export type SizesResolver = Resolver<string | null>;
  export type OriginalImgResolver = Resolver<string | null>;
  export type OriginalNameResolver = Resolver<string | null>;
}

export namespace ImageSharpSizesResolvers {
  export interface Resolvers {
    base64?: Base64Resolver;
    tracedSVG?: TracedSVGResolver;
    aspectRatio?: AspectRatioResolver;
    src?: SrcResolver;
    srcSet?: SrcSetResolver;
    srcWebp?: SrcWebpResolver;
    srcSetWebp?: SrcSetWebpResolver;
    sizes?: SizesResolver;
    originalImg?: OriginalImgResolver;
    originalName?: OriginalNameResolver;
  }

  export type Base64Resolver = Resolver<string | null>;
  export type TracedSVGResolver = Resolver<string | null>;
  export type AspectRatioResolver = Resolver<number | null>;
  export type SrcResolver = Resolver<string | null>;
  export type SrcSetResolver = Resolver<string | null>;
  export type SrcWebpResolver = Resolver<string | null>;
  export type SrcSetWebpResolver = Resolver<string | null>;
  export type SizesResolver = Resolver<string | null>;
  export type OriginalImgResolver = Resolver<string | null>;
  export type OriginalNameResolver = Resolver<string | null>;
}

export namespace ImageSharpOriginalResolvers {
  export interface Resolvers {
    width?: WidthResolver;
    height?: HeightResolver;
    src?: SrcResolver;
  }

  export type WidthResolver = Resolver<number | null>;
  export type HeightResolver = Resolver<number | null>;
  export type SrcResolver = Resolver<string | null>;
}

export namespace ImageSharpResizeResolvers {
  export interface Resolvers {
    src?: SrcResolver;
    tracedSVG?: TracedSVGResolver;
    width?: WidthResolver;
    height?: HeightResolver;
    aspectRatio?: AspectRatioResolver;
    originalName?: OriginalNameResolver;
  }

  export type SrcResolver = Resolver<string | null>;
  export type TracedSVGResolver = Resolver<string | null>;
  export type WidthResolver = Resolver<number | null>;
  export type HeightResolver = Resolver<number | null>;
  export type AspectRatioResolver = Resolver<number | null>;
  export type OriginalNameResolver = Resolver<string | null>;
}

export namespace internal_11Resolvers {
  export interface Resolvers {
    contentDigest?: ContentDigestResolver;
    type?: TypeResolver;
    mediaType?: MediaTypeResolver;
    description?: DescriptionResolver;
    owner?: OwnerResolver;
  }

  export type ContentDigestResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type MediaTypeResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}
/** A connection to a list of items. */
export namespace fileGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(fileGroupConnectionEdge | null)[] | null>;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace fileGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<File | null>;
  export type NextResolver = Resolver<File | null>;
  export type PreviousResolver = Resolver<File | null>;
}
/** A connection to a list of items. */
export namespace ImageSharpConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(ImageSharpEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<(string | null)[] | null, DistinctArgs>;
  export interface DistinctArgs {
    field?: imageSharpDistinctEnum | null;
  }

  export type GroupResolver = Resolver<
    (imageSharpGroupConnectionConnection | null)[] | null,
    GroupArgs
  >;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: imageSharpGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace ImageSharpEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<ImageSharp | null>;
  export type NextResolver = Resolver<ImageSharp | null>;
  export type PreviousResolver = Resolver<ImageSharp | null>;
}
/** A connection to a list of items. */
export namespace imageSharpGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(imageSharpGroupConnectionEdge | null)[] | null>;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace imageSharpGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<ImageSharp | null>;
  export type NextResolver = Resolver<ImageSharp | null>;
  export type PreviousResolver = Resolver<ImageSharp | null>;
}
/** A connection to a list of items. */
export namespace MarkdownRemarkConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(MarkdownRemarkEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<(string | null)[] | null, DistinctArgs>;
  export interface DistinctArgs {
    field?: markdownRemarkDistinctEnum | null;
  }

  export type GroupResolver = Resolver<
    (markdownRemarkGroupConnectionConnection | null)[] | null,
    GroupArgs
  >;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: markdownRemarkGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace MarkdownRemarkEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<MarkdownRemark | null>;
  export type NextResolver = Resolver<MarkdownRemark | null>;
  export type PreviousResolver = Resolver<MarkdownRemark | null>;
}
/** A connection to a list of items. */
export namespace markdownRemarkGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(markdownRemarkGroupConnectionEdge | null)[] | null>;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace markdownRemarkGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<MarkdownRemark | null>;
  export type NextResolver = Resolver<MarkdownRemark | null>;
  export type PreviousResolver = Resolver<MarkdownRemark | null>;
}
/** Node of type Site */
export namespace SiteResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    siteMetadata?: SiteMetadataResolver;
    port?: PortResolver;
    host?: HostResolver;
    pathPrefix?: PathPrefixResolver;
    polyfill?: PolyfillResolver;
    buildTime?: BuildTimeResolver;
    internal?: InternalResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type SiteMetadataResolver = Resolver<siteMetadata_2 | null>;
  export type PortResolver = Resolver<Date | null, PortArgs>;
  export interface PortArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type HostResolver = Resolver<string | null>;
  export type PathPrefixResolver = Resolver<string | null>;
  export type PolyfillResolver = Resolver<boolean | null>;
  export type BuildTimeResolver = Resolver<Date | null, BuildTimeArgs>;
  export interface BuildTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type InternalResolver = Resolver<internal_14 | null>;
}

export namespace siteMetadata_2Resolvers {
  export interface Resolvers {
    siteName?: SiteNameResolver;
    title?: TitleResolver;
    author?: AuthorResolver;
    description?: DescriptionResolver;
    siteUrl?: SiteUrlResolver;
  }

  export type SiteNameResolver = Resolver<string | null>;
  export type TitleResolver = Resolver<string | null>;
  export type AuthorResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type SiteUrlResolver = Resolver<string | null>;
}

export namespace internal_14Resolvers {
  export interface Resolvers {
    contentDigest?: ContentDigestResolver;
    type?: TypeResolver;
    owner?: OwnerResolver;
  }

  export type ContentDigestResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}

export interface sitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[];
  order?: sitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterSitePage {
  jsonName?: sitePageConnectionJsonNameQueryString | null;
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null;
  path?: sitePageConnectionPathQueryString_2 | null;
  component?: sitePageConnectionComponentQueryString | null;
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null;
  context?: sitePageConnectionContextInputObject | null;
  pluginCreator?: sitePageConnectionPluginCreatorInputObject | null;
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageConnectionComponentPathQueryString | null;
  id?: sitePageConnectionIdQueryString_2 | null;
  internal?: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextInputObject {
  slug?: sitePageConnectionContextSlugQueryString | null;
  previous?: sitePageConnectionContextPreviousInputObject | null;
  next?: sitePageConnectionContextNextInputObject | null;
}

export interface sitePageConnectionContextSlugQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPreviousInputObject {
  fields?: sitePageConnectionContextPreviousFieldsInputObject | null;
  frontmatter?: sitePageConnectionContextPreviousFrontmatterInputObject | null;
}

export interface sitePageConnectionContextPreviousFieldsInputObject {
  slug?: sitePageConnectionContextPreviousFieldsSlugQueryString | null;
}

export interface sitePageConnectionContextPreviousFieldsSlugQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextPreviousFrontmatterInputObject {
  title?: sitePageConnectionContextPreviousFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextPreviousFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextNextInputObject {
  fields?: sitePageConnectionContextNextFieldsInputObject | null;
  frontmatter?: sitePageConnectionContextNextFrontmatterInputObject | null;
}

export interface sitePageConnectionContextNextFieldsInputObject {
  slug?: sitePageConnectionContextNextFieldsSlugQueryString | null;
}

export interface sitePageConnectionContextNextFieldsSlugQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextNextFrontmatterInputObject {
  title?: sitePageConnectionContextNextFrontmatterTitleQueryString | null;
}

export interface sitePageConnectionContextNextFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInputObject {
  resolve?: sitePageConnectionPluginCreatorResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorIdQueryString | null;
  name?: sitePageConnectionPluginCreatorNameQueryString | null;
  version?: sitePageConnectionPluginCreatorVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePageConnectionPluginCreatorNodeApIsQueryList | null;
  browserAPIs?: sitePageConnectionPluginCreatorBrowserApIsQueryList | null;
  ssrAPIs?: sitePageConnectionPluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePageConnectionPluginCreatorPackageJsonInputObject | null;
  parent?: sitePageConnectionPluginCreatorParentQueryString | null;
  internal?: sitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;
  path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
  name?: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
  maxWidth?: sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null;
  linkImagesToOriginal?: sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions?: sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList | null;
  pathCheck?: sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  in?: (sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null;
  name?: sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
  linkImagesToOriginal?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
  description?: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
  author?: sitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null;
  license?: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  in?: (sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  in?: (sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  in?: (sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
  type?: sitePageConnectionPluginCreatorInternalTypeQueryString | null;
  owner?: sitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null;
  description?: sitePageConnectionInternalDescriptionQueryString | null;
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[];
  order?: sitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null;
  id?: sitePluginConnectionIdQueryString_2 | null;
  name?: sitePluginConnectionNameQueryString_2 | null;
  version?: sitePluginConnectionVersionQueryString_2 | null;
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null;
  browserAPIs?: sitePluginConnectionBrowserApIsQueryList_2 | null;
  ssrAPIs?: sitePluginConnectionSsrApIsQueryList_2 | null;
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null;
  internal?: sitePluginConnectionInternalInputObject_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
  maxWidth?: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginConnectionPluginOptionsBackgroundColorQueryString_2 | null;
  linkImagesToOriginal?: sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions?: sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginConnectionPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
  pathCheck?: sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in?: (sitePluginConnectionPluginOptionsPluginsInputObject_2 | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
  id?: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
  name?: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
  version?: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath?: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  linkImagesToOriginal?: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePluginConnectionPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null;
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null;
  author?: sitePluginConnectionPackageJsonAuthorQueryString_2 | null;
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?: (sitePluginConnectionPackageJsonDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?: (sitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  in?: (sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null;
  type?: sitePluginConnectionInternalTypeQueryString_2 | null;
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSort {
  fields: (DirectoryConnectionSortByFieldsEnum | null)[];
  order?: directoryConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterDirectory {
  id?: directoryConnectionIdQueryString_2 | null;
  internal?: directoryConnectionInternalInputObject_2 | null;
  sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null;
  relativePath?: directoryConnectionRelativePathQueryString_2 | null;
  extension?: directoryConnectionExtensionQueryString_2 | null;
  size?: directoryConnectionSizeQueryInteger_2 | null;
  prettySize?: directoryConnectionPrettySizeQueryString_2 | null;
  modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null;
  accessTime?: directoryConnectionAccessTimeQueryString_2 | null;
  changeTime?: directoryConnectionChangeTimeQueryString_2 | null;
  birthTime?: directoryConnectionBirthTimeQueryString_2 | null;
  root?: directoryConnectionRootQueryString_2 | null;
  dir?: directoryConnectionDirQueryString_2 | null;
  base?: directoryConnectionBaseQueryString_2 | null;
  ext?: directoryConnectionExtQueryString_2 | null;
  name?: directoryConnectionNameQueryString_2 | null;
  relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null;
  dev?: directoryConnectionDevQueryInteger_2 | null;
  mode?: directoryConnectionModeQueryInteger_2 | null;
  nlink?: directoryConnectionNlinkQueryInteger_2 | null;
  uid?: directoryConnectionUidQueryInteger_2 | null;
  gid?: directoryConnectionGidQueryInteger_2 | null;
  rdev?: directoryConnectionRdevQueryInteger_2 | null;
  blksize?: directoryConnectionBlksizeQueryInteger_2 | null;
  ino?: directoryConnectionInoQueryInteger_2 | null;
  blocks?: directoryConnectionBlocksQueryInteger_2 | null;
  atimeMs?: directoryConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryConnectionBirthtimeMsQueryFloat_2 | null;
  atime?: directoryConnectionAtimeQueryString_2 | null;
  mtime?: directoryConnectionMtimeQueryString_2 | null;
  ctime?: directoryConnectionCtimeQueryString_2 | null;
  birthtime?: directoryConnectionBirthtimeQueryString_2 | null;
}

export interface directoryConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null;
  type?: directoryConnectionInternalTypeQueryString_2 | null;
  description?: directoryConnectionInternalDescriptionQueryString_2 | null;
  owner?: directoryConnectionInternalOwnerQueryString_2 | null;
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSort {
  fields: (FileConnectionSortByFieldsEnum | null)[];
  order?: fileConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterFile {
  id?: fileConnectionIdQueryString_2 | null;
  internal?: fileConnectionInternalInputObject_2 | null;
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath?: fileConnectionAbsolutePathQueryString_2 | null;
  relativePath?: fileConnectionRelativePathQueryString_2 | null;
  extension?: fileConnectionExtensionQueryString_2 | null;
  size?: fileConnectionSizeQueryInteger_2 | null;
  prettySize?: fileConnectionPrettySizeQueryString_2 | null;
  modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null;
  accessTime?: fileConnectionAccessTimeQueryString_2 | null;
  changeTime?: fileConnectionChangeTimeQueryString_2 | null;
  birthTime?: fileConnectionBirthTimeQueryString_2 | null;
  root?: fileConnectionRootQueryString_2 | null;
  dir?: fileConnectionDirQueryString_2 | null;
  base?: fileConnectionBaseQueryString_2 | null;
  ext?: fileConnectionExtQueryString_2 | null;
  name?: fileConnectionNameQueryString_2 | null;
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null;
  dev?: fileConnectionDevQueryInteger_2 | null;
  mode?: fileConnectionModeQueryInteger_2 | null;
  nlink?: fileConnectionNlinkQueryInteger_2 | null;
  uid?: fileConnectionUidQueryInteger_2 | null;
  gid?: fileConnectionGidQueryInteger_2 | null;
  rdev?: fileConnectionRdevQueryInteger_2 | null;
  blksize?: fileConnectionBlksizeQueryInteger_2 | null;
  ino?: fileConnectionInoQueryInteger_2 | null;
  blocks?: fileConnectionBlocksQueryInteger_2 | null;
  atimeMs?: fileConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileConnectionBirthtimeMsQueryFloat_2 | null;
  atime?: fileConnectionAtimeQueryString_2 | null;
  mtime?: fileConnectionMtimeQueryString_2 | null;
  ctime?: fileConnectionCtimeQueryString_2 | null;
  birthtime?: fileConnectionBirthtimeQueryString_2 | null;
  publicURL?: publicUrlQueryString_4 | null;
}

export interface fileConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null;
  type?: fileConnectionInternalTypeQueryString_2 | null;
  mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null;
  description?: fileConnectionInternalDescriptionQueryString_2 | null;
  owner?: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface publicUrlQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface DuotoneGradient {
  highlight?: string | null;
  shadow?: string | null;
  opacity?: number | null;
}

export interface Potrace {
  turnPolicy?: PotraceTurnPolicy | null;
  turdSize?: number | null;
  alphaMax?: number | null;
  optCurve?: boolean | null;
  optTolerance?: number | null;
  threshold?: number | null;
  blackOnWhite?: boolean | null;
  color?: string | null;
  background?: string | null;
}

export interface imageSharpConnectionSort {
  fields: (ImageSharpConnectionSortByFieldsEnum | null)[];
  order?: imageSharpConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterImageSharp {
  id?: imageSharpConnectionIdQueryString_2 | null;
  internal?: imageSharpConnectionInternalInputObject_2 | null;
  fixed?: fixedTypeName_4 | null;
  resolutions?: resolutionsTypeName_4 | null;
  fluid?: fluidTypeName_4 | null;
  sizes?: sizesTypeName_4 | null;
  original?: originalTypeName_4 | null;
  resize?: resizeTypeName_4 | null;
}

export interface imageSharpConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpConnectionInternalInputObject_2 {
  contentDigest?: imageSharpConnectionInternalContentDigestQueryString_2 | null;
  type?: imageSharpConnectionInternalTypeQueryString_2 | null;
  owner?: imageSharpConnectionInternalOwnerQueryString_2 | null;
}

export interface imageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedTypeName_4 {
  base64?: fixedBase64QueryString_4 | null;
  tracedSVG?: fixedTracedSvgQueryString_4 | null;
  aspectRatio?: fixedAspectRatioQueryFloat_4 | null;
  width?: fixedWidthQueryFloat_4 | null;
  height?: fixedHeightQueryFloat_4 | null;
  src?: fixedSrcQueryString_4 | null;
  srcSet?: fixedSrcSetQueryString_4 | null;
  srcWebp?: fixedSrcWebpQueryString_4 | null;
  srcSetWebp?: fixedSrcSetWebpQueryString_4 | null;
  originalName?: fixedOriginalNameQueryString_4 | null;
}

export interface fixedBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fixedWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fixedHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fixedSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedSrcWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedSrcSetWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTypeName_4 {
  base64?: resolutionsBase64QueryString_4 | null;
  tracedSVG?: resolutionsTracedSvgQueryString_4 | null;
  aspectRatio?: resolutionsAspectRatioQueryFloat_4 | null;
  width?: resolutionsWidthQueryFloat_4 | null;
  height?: resolutionsHeightQueryFloat_4 | null;
  src?: resolutionsSrcQueryString_4 | null;
  srcSet?: resolutionsSrcSetQueryString_4 | null;
  srcWebp?: resolutionsSrcWebpQueryString_4 | null;
  srcSetWebp?: resolutionsSrcSetWebpQueryString_4 | null;
  originalName?: resolutionsOriginalNameQueryString_4 | null;
}

export interface resolutionsBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resolutionsWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resolutionsHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resolutionsSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidTypeName_4 {
  base64?: fluidBase64QueryString_4 | null;
  tracedSVG?: fluidTracedSvgQueryString_4 | null;
  aspectRatio?: fluidAspectRatioQueryFloat_4 | null;
  src?: fluidSrcQueryString_4 | null;
  srcSet?: fluidSrcSetQueryString_4 | null;
  srcWebp?: fluidSrcWebpQueryString_4 | null;
  srcSetWebp?: fluidSrcSetWebpQueryString_4 | null;
  sizes?: fluidSizesQueryString_4 | null;
  originalImg?: fluidOriginalImgQueryString_4 | null;
  originalName?: fluidOriginalNameQueryString_4 | null;
}

export interface fluidBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fluidSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSrcWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSrcSetWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSizesQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidOriginalImgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTypeName_4 {
  base64?: sizesBase64QueryString_4 | null;
  tracedSVG?: sizesTracedSvgQueryString_4 | null;
  aspectRatio?: sizesAspectRatioQueryFloat_4 | null;
  src?: sizesSrcQueryString_4 | null;
  srcSet?: sizesSrcSetQueryString_4 | null;
  srcWebp?: sizesSrcWebpQueryString_4 | null;
  srcSetWebp?: sizesSrcSetWebpQueryString_4 | null;
  sizes?: sizesSizesQueryString_4 | null;
  originalImg?: sizesOriginalImgQueryString_4 | null;
  originalName?: sizesOriginalNameQueryString_4 | null;
}

export interface sizesBase64QueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sizesSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetWebpQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSizesQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalImgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface originalTypeName_4 {
  width?: originalWidthQueryFloat_4 | null;
  height?: originalHeightQueryFloat_4 | null;
  src?: originalSrcQueryString_4 | null;
}

export interface originalWidthQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface originalHeightQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface originalSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTypeName_4 {
  src?: resizeSrcQueryString_4 | null;
  tracedSVG?: resizeTracedSvgQueryString_4 | null;
  width?: resizeWidthQueryInt_4 | null;
  height?: resizeHeightQueryInt_4 | null;
  aspectRatio?: resizeAspectRatioQueryFloat_4 | null;
  originalName?: resizeOriginalNameQueryString_4 | null;
}

export interface resizeSrcQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTracedSvgQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeWidthQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resizeHeightQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resizeAspectRatioQueryFloat_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resizeOriginalNameQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionSort {
  fields: (MarkdownRemarkConnectionSortByFieldsEnum | null)[];
  order?: markdownRemarkConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterMarkdownRemark {
  id?: markdownRemarkConnectionIdQueryString_2 | null;
  internal?: markdownRemarkConnectionInternalInputObject_2 | null;
  frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null;
  excerpt?: excerptQueryString_4 | null;
  rawMarkdownBody?: markdownRemarkConnectionRawMarkdownBodyQueryString_2 | null;
  fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null;
  fields?: markdownRemarkConnectionFieldsInputObject_2 | null;
  html?: htmlQueryString_4 | null;
  headings?: headingsQueryList_4 | null;
  timeToRead?: timeToReadQueryInt_4 | null;
  tableOfContents?: tableOfContentsQueryString_4 | null;
  wordCount?: wordCountTypeName_4 | null;
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content?: markdownRemarkConnectionInternalContentQueryString_2 | null;
  type?: markdownRemarkConnectionInternalTypeQueryString_2 | null;
  contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;
  owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null;
  fieldOwners?: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
  _PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_2 | null;
  createdDate?: markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 | null;
  date?: markdownRemarkConnectionFrontmatterDateQueryString_2 | null;
  author?: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null;
  tags?: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null;
  draft?: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface excerptQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
  slug?: markdownRemarkConnectionFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface htmlQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsQueryList_4 {
  value?: headingsListElemValueQueryString_4 | null;
  depth?: headingsListElemDepthQueryInt_4 | null;
  in?: (markdownHeadingInputObject_4 | null)[] | null;
}

export interface headingsListElemValueQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsListElemDepthQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface markdownHeadingInputObject_4 {
  value?: string | null;
  depth?: number | null;
}

export interface timeToReadQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface tableOfContentsQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface wordCountTypeName_4 {
  paragraphs?: wordCountParagraphsQueryInt_4 | null;
  sentences?: wordCountSentencesQueryInt_4 | null;
  words?: wordCountWordsQueryInt_4 | null;
}

export interface wordCountParagraphsQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface wordCountSentencesQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface wordCountWordsQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextInputObject {
  slug?: sitePageContextSlugQueryString | null;
  previous?: sitePageContextPreviousInputObject | null;
  next?: sitePageContextNextInputObject | null;
}

export interface sitePageContextSlugQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPreviousInputObject {
  fields?: sitePageContextPreviousFieldsInputObject | null;
  frontmatter?: sitePageContextPreviousFrontmatterInputObject | null;
}

export interface sitePageContextPreviousFieldsInputObject {
  slug?: sitePageContextPreviousFieldsSlugQueryString | null;
}

export interface sitePageContextPreviousFieldsSlugQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextPreviousFrontmatterInputObject {
  title?: sitePageContextPreviousFrontmatterTitleQueryString | null;
}

export interface sitePageContextPreviousFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextNextInputObject {
  fields?: sitePageContextNextFieldsInputObject | null;
  frontmatter?: sitePageContextNextFrontmatterInputObject | null;
}

export interface sitePageContextNextFieldsInputObject {
  slug?: sitePageContextNextFieldsSlugQueryString | null;
}

export interface sitePageContextNextFieldsSlugQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextNextFrontmatterInputObject {
  title?: sitePageContextNextFrontmatterTitleQueryString | null;
}

export interface sitePageContextNextFrontmatterTitleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInputObject {
  resolve?: sitePagePluginCreatorResolveQueryString | null;
  id?: sitePagePluginCreatorIdQueryString | null;
  name?: sitePagePluginCreatorNameQueryString | null;
  version?: sitePagePluginCreatorVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePagePluginCreatorNodeApIsQueryList | null;
  browserAPIs?: sitePagePluginCreatorBrowserApIsQueryList | null;
  ssrAPIs?: sitePagePluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePagePluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePagePluginCreatorPackageJsonInputObject | null;
  parent?: sitePagePluginCreatorParentQueryString | null;
  internal?: sitePagePluginCreatorInternalInputObject | null;
}

export interface sitePagePluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
  plugins?: sitePagePluginCreatorPluginOptionsPluginsQueryList | null;
  path?: sitePagePluginCreatorPluginOptionsPathQueryString | null;
  name?: sitePagePluginCreatorPluginOptionsNameQueryString | null;
  maxWidth?: sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePagePluginCreatorPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null;
  linkImagesToOriginal?: sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions?: sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePagePluginCreatorPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList | null;
  pathCheck?: sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {
  in?: (sitePagePluginCreatorPluginOptionsPluginsInputObject | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id?: sitePagePluginCreatorPluginOptionsPluginsIdQueryString | null;
  name?: sitePagePluginCreatorPluginOptionsPluginsNameQueryString | null;
  version?: sitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  pluginFilepath?: sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
  wrapperStyle?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  backgroundColor?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;
  linkImagesToOriginal?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  showCaptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean | null;
  pathPrefix?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
  ignoreFileExtensions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePagePluginCreatorPluginOptionsWrapperStyleQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsShowCaptionsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPathPrefixQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsIgnoreFileExtensionsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonInputObject {
  name?: sitePagePluginCreatorPackageJsonNameQueryString | null;
  description?: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePagePluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePagePluginCreatorPackageJsonMainQueryString | null;
  author?: sitePagePluginCreatorPackageJsonAuthorQueryString | null;
  license?: sitePagePluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
  in?: (sitePagePluginCreatorPackageJsonDependenciesInputObject | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  in?: (sitePagePluginCreatorPackageJsonDevDependenciesInputObject | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  in?: (sitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null)[] | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalInputObject {
  contentDigest?: sitePagePluginCreatorInternalContentDigestQueryString | null;
  type?: sitePagePluginCreatorInternalTypeQueryString | null;
  owner?: sitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null;
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null;
  description?: sitePageInternalDescriptionQueryString | null;
  owner?: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null;
  path?: sitePluginPluginOptionsPathQueryString_2 | null;
  name?: sitePluginPluginOptionsNameQueryString_2 | null;
  maxWidth?: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginPluginOptionsBackgroundColorQueryString_2 | null;
  linkImagesToOriginal?: sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions?: sitePluginPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
  pathCheck?: sitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in?: (sitePluginPluginOptionsPluginsInputObject_2 | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;
  id?: sitePluginPluginOptionsPluginsIdQueryString_2 | null;
  name?: sitePluginPluginOptionsPluginsNameQueryString_2 | null;
  version?: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath?: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  wrapperStyle?: sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 | null;
  backgroundColor?: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  linkImagesToOriginal?: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null;
  showCaptions?: sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 | null;
  pathPrefix?: sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 | null;
  ignoreFileExtensions?: sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sitePluginPluginOptionsWrapperStyleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsShowCaptionsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsPathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsIgnoreFileExtensionsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginBrowserApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null;
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginPackageJsonVersionQueryString_2 | null;
  main?: sitePluginPackageJsonMainQueryString_2 | null;
  author?: sitePluginPackageJsonAuthorQueryString_2 | null;
  license?: sitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonDevDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonPeerDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null;
  type?: sitePluginInternalTypeQueryString_2 | null;
  owner?: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataInputObject_2 {
  siteName?: siteSiteMetadataSiteNameQueryString_2 | null;
  title?: siteSiteMetadataTitleQueryString_2 | null;
  author?: siteSiteMetadataAuthorQueryString_2 | null;
  description?: siteSiteMetadataDescriptionQueryString_2 | null;
  siteUrl?: siteSiteMetadataSiteUrlQueryString_2 | null;
}

export interface siteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePortQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteHostQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface siteBuildTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null;
  type?: siteInternalTypeQueryString_2 | null;
  owner?: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalInputObject_2 {
  contentDigest?: directoryInternalContentDigestQueryString_2 | null;
  type?: directoryInternalTypeQueryString_2 | null;
  description?: directoryInternalDescriptionQueryString_2 | null;
  owner?: directoryInternalOwnerQueryString_2 | null;
}

export interface directoryInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directorySourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directorySizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2 | null;
  type?: fileInternalTypeQueryString_2 | null;
  mediaType?: fileInternalMediaTypeQueryString_2 | null;
  description?: fileInternalDescriptionQueryString_2 | null;
  owner?: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface filePrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface publicUrlQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpInternalInputObject_2 {
  contentDigest?: imageSharpInternalContentDigestQueryString_2 | null;
  type?: imageSharpInternalTypeQueryString_2 | null;
  owner?: imageSharpInternalOwnerQueryString_2 | null;
}

export interface imageSharpInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface imageSharpInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedTypeName_3 {
  base64?: fixedBase64QueryString_3 | null;
  tracedSVG?: fixedTracedSvgQueryString_3 | null;
  aspectRatio?: fixedAspectRatioQueryFloat_3 | null;
  width?: fixedWidthQueryFloat_3 | null;
  height?: fixedHeightQueryFloat_3 | null;
  src?: fixedSrcQueryString_3 | null;
  srcSet?: fixedSrcSetQueryString_3 | null;
  srcWebp?: fixedSrcWebpQueryString_3 | null;
  srcSetWebp?: fixedSrcSetWebpQueryString_3 | null;
  originalName?: fixedOriginalNameQueryString_3 | null;
}

export interface fixedBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fixedWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fixedHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fixedSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedSrcWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedSrcSetWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fixedOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTypeName_3 {
  base64?: resolutionsBase64QueryString_3 | null;
  tracedSVG?: resolutionsTracedSvgQueryString_3 | null;
  aspectRatio?: resolutionsAspectRatioQueryFloat_3 | null;
  width?: resolutionsWidthQueryFloat_3 | null;
  height?: resolutionsHeightQueryFloat_3 | null;
  src?: resolutionsSrcQueryString_3 | null;
  srcSet?: resolutionsSrcSetQueryString_3 | null;
  srcWebp?: resolutionsSrcWebpQueryString_3 | null;
  srcSetWebp?: resolutionsSrcSetWebpQueryString_3 | null;
  originalName?: resolutionsOriginalNameQueryString_3 | null;
}

export interface resolutionsBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resolutionsWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resolutionsHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resolutionsSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsSrcSetWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resolutionsOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidTypeName_3 {
  base64?: fluidBase64QueryString_3 | null;
  tracedSVG?: fluidTracedSvgQueryString_3 | null;
  aspectRatio?: fluidAspectRatioQueryFloat_3 | null;
  src?: fluidSrcQueryString_3 | null;
  srcSet?: fluidSrcSetQueryString_3 | null;
  srcWebp?: fluidSrcWebpQueryString_3 | null;
  srcSetWebp?: fluidSrcSetWebpQueryString_3 | null;
  sizes?: fluidSizesQueryString_3 | null;
  originalImg?: fluidOriginalImgQueryString_3 | null;
  originalName?: fluidOriginalNameQueryString_3 | null;
}

export interface fluidBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fluidSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSrcWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSrcSetWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidSizesQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidOriginalImgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fluidOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTypeName_3 {
  base64?: sizesBase64QueryString_3 | null;
  tracedSVG?: sizesTracedSvgQueryString_3 | null;
  aspectRatio?: sizesAspectRatioQueryFloat_3 | null;
  src?: sizesSrcQueryString_3 | null;
  srcSet?: sizesSrcSetQueryString_3 | null;
  srcWebp?: sizesSrcWebpQueryString_3 | null;
  srcSetWebp?: sizesSrcSetWebpQueryString_3 | null;
  sizes?: sizesSizesQueryString_3 | null;
  originalImg?: sizesOriginalImgQueryString_3 | null;
  originalName?: sizesOriginalNameQueryString_3 | null;
}

export interface sizesBase64QueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sizesSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSrcSetWebpQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesSizesQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalImgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sizesOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface originalTypeName_3 {
  width?: originalWidthQueryFloat_3 | null;
  height?: originalHeightQueryFloat_3 | null;
  src?: originalSrcQueryString_3 | null;
}

export interface originalWidthQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface originalHeightQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface originalSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTypeName_3 {
  src?: resizeSrcQueryString_3 | null;
  tracedSVG?: resizeTracedSvgQueryString_3 | null;
  width?: resizeWidthQueryInt_3 | null;
  height?: resizeHeightQueryInt_3 | null;
  aspectRatio?: resizeAspectRatioQueryFloat_3 | null;
  originalName?: resizeOriginalNameQueryString_3 | null;
}

export interface resizeSrcQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeTracedSvgQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface resizeWidthQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resizeHeightQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resizeAspectRatioQueryFloat_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface resizeOriginalNameQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalInputObject_2 {
  content?: markdownRemarkInternalContentQueryString_2 | null;
  type?: markdownRemarkInternalTypeQueryString_2 | null;
  contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null;
  owner?: markdownRemarkInternalOwnerQueryString_2 | null;
  fieldOwners?: markdownRemarkInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title?: markdownRemarkFrontmatterTitleQueryString_2 | null;
  _PARENT?: markdownRemarkFrontmatterParentQueryString_2 | null;
  createdDate?: markdownRemarkFrontmatterCreatedDateQueryString_2 | null;
  date?: markdownRemarkFrontmatterDateQueryString_2 | null;
  author?: markdownRemarkFrontmatterAuthorQueryString_2 | null;
  tags?: markdownRemarkFrontmatterTagsQueryList_2 | null;
  draft?: markdownRemarkFrontmatterDraftQueryBoolean_2 | null;
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterParentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterCreatedDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterTagsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface excerptQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFieldsInputObject_2 {
  slug?: markdownRemarkFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkFieldsSlugQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface htmlQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsQueryList_3 {
  value?: headingsListElemValueQueryString_3 | null;
  depth?: headingsListElemDepthQueryInt_3 | null;
  in?: (markdownHeadingInputObject_3 | null)[] | null;
}

export interface headingsListElemValueQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsListElemDepthQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface markdownHeadingInputObject_3 {
  value?: string | null;
  depth?: number | null;
}

export interface timeToReadQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface tableOfContentsQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface wordCountTypeName_3 {
  paragraphs?: wordCountParagraphsQueryInt_3 | null;
  sentences?: wordCountSentencesQueryInt_3 | null;
  words?: wordCountWordsQueryInt_3 | null;
}

export interface wordCountParagraphsQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface wordCountSentencesQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface wordCountWordsQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePageConnectionSort | null;
  filter?: filterSitePage | null;
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePluginConnectionSort | null;
  filter?: filterSitePlugin | null;
}
export interface AllDirectoryRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: directoryConnectionSort | null;
  filter?: filterDirectory | null;
}
export interface AllFileRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: fileConnectionSort | null;
  filter?: filterFile | null;
}
export interface AllImageSharpRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: imageSharpConnectionSort | null;
  filter?: filterImageSharp | null;
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: markdownRemarkConnectionSort | null;
  filter?: filterMarkdownRemark | null;
}
export interface SitePageRootQueryTypeArgs {
  jsonName?: sitePageJsonNameQueryString | null;
  internalComponentName?: sitePageInternalComponentNameQueryString | null;
  path?: sitePagePathQueryString_2 | null;
  component?: sitePageComponentQueryString | null;
  componentChunkName?: sitePageComponentChunkNameQueryString | null;
  context?: sitePageContextInputObject | null;
  pluginCreator?: sitePagePluginCreatorInputObject | null;
  pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageComponentPathQueryString | null;
  id?: sitePageIdQueryString_2 | null;
  internal?: sitePageInternalInputObject_2 | null;
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null;
  id?: sitePluginIdQueryString_2 | null;
  name?: sitePluginNameQueryString_2 | null;
  version?: sitePluginVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
  browserAPIs?: sitePluginBrowserApIsQueryList_2 | null;
  ssrAPIs?: sitePluginSsrApIsQueryList_2 | null;
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginPackageJsonInputObject_2 | null;
  internal?: sitePluginInternalInputObject_2 | null;
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null;
  port?: sitePortQueryString_2 | null;
  host?: siteHostQueryString_2 | null;
  pathPrefix?: sitePathPrefixQueryString_2 | null;
  polyfill?: sitePolyfillQueryBoolean_2 | null;
  buildTime?: siteBuildTimeQueryString_2 | null;
  id?: siteIdQueryString_2 | null;
  internal?: siteInternalInputObject_2 | null;
}
export interface DirectoryRootQueryTypeArgs {
  id?: directoryIdQueryString_2 | null;
  internal?: directoryInternalInputObject_2 | null;
  sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null;
  absolutePath?: directoryAbsolutePathQueryString_2 | null;
  relativePath?: directoryRelativePathQueryString_2 | null;
  extension?: directoryExtensionQueryString_2 | null;
  size?: directorySizeQueryInteger_2 | null;
  prettySize?: directoryPrettySizeQueryString_2 | null;
  modifiedTime?: directoryModifiedTimeQueryString_2 | null;
  accessTime?: directoryAccessTimeQueryString_2 | null;
  changeTime?: directoryChangeTimeQueryString_2 | null;
  birthTime?: directoryBirthTimeQueryString_2 | null;
  root?: directoryRootQueryString_2 | null;
  dir?: directoryDirQueryString_2 | null;
  base?: directoryBaseQueryString_2 | null;
  ext?: directoryExtQueryString_2 | null;
  name?: directoryNameQueryString_2 | null;
  relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null;
  dev?: directoryDevQueryInteger_2 | null;
  mode?: directoryModeQueryInteger_2 | null;
  nlink?: directoryNlinkQueryInteger_2 | null;
  uid?: directoryUidQueryInteger_2 | null;
  gid?: directoryGidQueryInteger_2 | null;
  rdev?: directoryRdevQueryInteger_2 | null;
  blksize?: directoryBlksizeQueryInteger_2 | null;
  ino?: directoryInoQueryInteger_2 | null;
  blocks?: directoryBlocksQueryInteger_2 | null;
  atimeMs?: directoryAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryBirthtimeMsQueryFloat_2 | null;
  atime?: directoryAtimeQueryString_2 | null;
  mtime?: directoryMtimeQueryString_2 | null;
  ctime?: directoryCtimeQueryString_2 | null;
  birthtime?: directoryBirthtimeQueryString_2 | null;
}
export interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2 | null;
  internal?: fileInternalInputObject_2 | null;
  sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null;
  absolutePath?: fileAbsolutePathQueryString_2 | null;
  relativePath?: fileRelativePathQueryString_2 | null;
  extension?: fileExtensionQueryString_2 | null;
  size?: fileSizeQueryInteger_2 | null;
  prettySize?: filePrettySizeQueryString_2 | null;
  modifiedTime?: fileModifiedTimeQueryString_2 | null;
  accessTime?: fileAccessTimeQueryString_2 | null;
  changeTime?: fileChangeTimeQueryString_2 | null;
  birthTime?: fileBirthTimeQueryString_2 | null;
  root?: fileRootQueryString_2 | null;
  dir?: fileDirQueryString_2 | null;
  base?: fileBaseQueryString_2 | null;
  ext?: fileExtQueryString_2 | null;
  name?: fileNameQueryString_2 | null;
  relativeDirectory?: fileRelativeDirectoryQueryString_2 | null;
  dev?: fileDevQueryInteger_2 | null;
  mode?: fileModeQueryInteger_2 | null;
  nlink?: fileNlinkQueryInteger_2 | null;
  uid?: fileUidQueryInteger_2 | null;
  gid?: fileGidQueryInteger_2 | null;
  rdev?: fileRdevQueryInteger_2 | null;
  blksize?: fileBlksizeQueryInteger_2 | null;
  ino?: fileInoQueryInteger_2 | null;
  blocks?: fileBlocksQueryInteger_2 | null;
  atimeMs?: fileAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileBirthtimeMsQueryFloat_2 | null;
  atime?: fileAtimeQueryString_2 | null;
  mtime?: fileMtimeQueryString_2 | null;
  ctime?: fileCtimeQueryString_2 | null;
  birthtime?: fileBirthtimeQueryString_2 | null;
  publicURL?: publicUrlQueryString_3 | null;
}
export interface ImageSharpRootQueryTypeArgs {
  id?: imageSharpIdQueryString_2 | null;
  internal?: imageSharpInternalInputObject_2 | null;
  fixed?: fixedTypeName_3 | null;
  resolutions?: resolutionsTypeName_3 | null;
  fluid?: fluidTypeName_3 | null;
  sizes?: sizesTypeName_3 | null;
  original?: originalTypeName_3 | null;
  resize?: resizeTypeName_3 | null;
}
export interface MarkdownRemarkRootQueryTypeArgs {
  id?: markdownRemarkIdQueryString_2 | null;
  internal?: markdownRemarkInternalInputObject_2 | null;
  frontmatter?: markdownRemarkFrontmatterInputObject_2 | null;
  excerpt?: excerptQueryString_3 | null;
  rawMarkdownBody?: markdownRemarkRawMarkdownBodyQueryString_2 | null;
  fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null;
  fields?: markdownRemarkFieldsInputObject_2 | null;
  html?: htmlQueryString_3 | null;
  headings?: headingsQueryList_3 | null;
  timeToRead?: timeToReadQueryInt_3 | null;
  tableOfContents?: tableOfContentsQueryString_3 | null;
  wordCount?: wordCountTypeName_3 | null;
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePageGroupEnum | null;
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePluginGroupEnum | null;
}
export interface DistinctDirectoryConnectionArgs {
  field?: directoryDistinctEnum | null;
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: directoryGroupEnum | null;
}
export interface ModifiedTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum | null;
}
export interface GroupFileConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: fileGroupEnum | null;
}
export interface ModifiedTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null;
}
export interface CreatedDateFrontmatter_4Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface DateFrontmatter_4Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface FixedImageSharpArgs {
  width?: number | null;
  height?: number | null;
  jpegProgressive?: boolean | null;
  grayscale?: boolean | null;
  duotone?: DuotoneGradient | null;
  traceSVG?: Potrace | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface ResolutionsImageSharpArgs {
  width?: number | null;
  height?: number | null;
  jpegProgressive?: boolean | null;
  grayscale?: boolean | null;
  duotone?: DuotoneGradient | null;
  traceSVG?: Potrace | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface FluidImageSharpArgs {
  maxWidth?: number | null;
  maxHeight?: number | null;
  grayscale?: boolean | null;
  jpegProgressive?: boolean | null;
  duotone?: DuotoneGradient | null;
  traceSVG?: Potrace | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface SizesImageSharpArgs {
  maxWidth?: number | null;
  maxHeight?: number | null;
  grayscale?: boolean | null;
  jpegProgressive?: boolean | null;
  duotone?: DuotoneGradient | null;
  traceSVG?: Potrace | null;
  quality?: number | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface ResizeImageSharpArgs {
  width?: number | null;
  height?: number | null;
  quality?: number | null;
  jpegProgressive?: boolean | null;
  pngCompressionLevel?: number | null;
  grayscale?: boolean | null;
  duotone?: DuotoneGradient | null;
  base64?: boolean | null;
  traceSVG?: Potrace | null;
  toFormat?: ImageFormat | null;
  cropFocus?: ImageCropFocus | null;
  rotate?: number | null;
}
export interface DistinctImageSharpConnectionArgs {
  field?: imageSharpDistinctEnum | null;
}
export interface GroupImageSharpConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: imageSharpGroupEnum | null;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: markdownRemarkDistinctEnum | null;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: markdownRemarkGroupEnum | null;
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */;
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  context___previous___fields = 'context___previous___fields',
  context___previous___frontmatter = 'context___previous___frontmatter',
  context___next___fields = 'context___next___fields',
  context___next___frontmatter = 'context___next___frontmatter',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum sitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum sitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  context___previous___fields = 'context___previous___fields',
  context___previous___frontmatter = 'context___previous___frontmatter',
  context___next___fields = 'context___next___fields',
  context___next___frontmatter = 'context___next___frontmatter',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum sitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  context___previous___fields = 'context___previous___fields',
  context___previous___frontmatter = 'context___previous___frontmatter',
  context___next___fields = 'context___next___fields',
  context___next___frontmatter = 'context___next___frontmatter',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions___wrapperStyle',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___pathPrefix = 'pluginOptions___pathPrefix',
  pluginOptions___ignoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum sitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions___wrapperStyle',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___pathPrefix = 'pluginOptions___pathPrefix',
  pluginOptions___ignoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions___wrapperStyle',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___pathPrefix = 'pluginOptions___pathPrefix',
  pluginOptions___ignoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum directoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum directoryDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum directoryGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL',
}

export enum fileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum fileDistinctEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum fileGroupEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum ImageSharpConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
}

export enum imageSharpConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum imageSharpDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum imageSharpGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter____PARENT = 'frontmatter____PARENT',
  frontmatter___createdDate = 'frontmatter___createdDate',
  frontmatter___date = 'frontmatter___date',
  frontmatter___author = 'frontmatter___author',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___draft = 'frontmatter___draft',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
  html = 'html',
  headings = 'headings',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
}

export enum markdownRemarkConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum markdownRemarkDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter____PARENT = 'frontmatter____PARENT',
  frontmatter___createdDate = 'frontmatter___createdDate',
  frontmatter___date = 'frontmatter___date',
  frontmatter___author = 'frontmatter___author',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___draft = 'frontmatter___draft',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}

export enum markdownRemarkGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter____PARENT = 'frontmatter____PARENT',
  frontmatter___createdDate = 'frontmatter___createdDate',
  frontmatter___date = 'frontmatter___date',
  frontmatter___author = 'frontmatter___author',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___draft = 'frontmatter___draft',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}
