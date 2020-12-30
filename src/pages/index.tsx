import { graphql, Link } from 'gatsby';
import React from 'react';
import LayoutContainer from '../components/layout/layout';
import SEO from '../components/seo/seo';
import {
  Card,
  CardContainer,
  HeroContainer,
  Illustration,
  PostContainer,
  SiteTitle,
  SubtextContainer,
} from './index.style';
import theme from '../styles/default-theme';
import Heart from '../../assets/icons/heart.svg';
import Checkmark from '../../assets/icons/checkmark.svg';
import Lightning from '../../assets/icons/lightning.svg';
import Pencil from '../../assets/icons/pencil.svg';
import Code from '../../assets/icons/code.svg';
import IconCircle from '../components/icon-circle/icon-circle';
import { MarkdownRemarkConnection } from '../graphql-types';
import PostListing from '../components/post-listing/post-listing';

interface IBlogIndex {
  data: {
    posts: MarkdownRemarkConnection;
    projects: MarkdownRemarkConnection;
  };
}

export default function BlogIndex({ data }: IBlogIndex) {
  const postEdges = data.posts.edges;
  const projectEdges = data.projects.edges;

  return (
    <LayoutContainer fullScreen>
      <HeroContainer>
        <SiteTitle>
          <h1>Hey, I’m Chad.</h1>
          <h2>Web Developer. Linux Enthusiast.</h2>
        </SiteTitle>
        <Illustration>60ms</Illustration>
      </HeroContainer>
      <SubtextContainer>building experiences that are...</SubtextContainer>
      <CardContainer>
        <Card>
          <div>
            <h3 style={{ color: theme.red1 }}>
              <Heart /> Accessible
            </h3>
            Technology can both enable and inhibit engagement. I advocate for mindful technical
            choices.
          </div>
        </Card>
        <Card>
          <div>
            <h3 style={{ color: theme.green1 }}>
              <Checkmark /> Intuitive
            </h3>
            Simplicity is a virtue in life, design and programming.
          </div>
        </Card>
        <Card>
          <div>
            <h3 style={{ color: theme.purple1 }}>
              <Lightning /> Performant
            </h3>
            Speed matters. This page was delivered in 0.06 seconds! Click here to see how.
          </div>
        </Card>
      </CardContainer>
      <PostContainer>
        <div>
          <IconCircle style={{ margin: 'auto' }}>
            <Pencil />
          </IconCircle>
          <h4>Latest Posts</h4>
          <PostListing postEdge={postEdges[0]} />
        </div>
        <div>
          <IconCircle style={{ margin: 'auto' }}>
            <Code />
          </IconCircle>
          <h4>Latest Projects</h4>
          <PostListing postEdge={projectEdges[0]} />
        </div>
      </PostContainer>
      <SEO title="Chad Sheets - Web Developer" />
    </LayoutContainer>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/post/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/project/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            author
          }
        }
      }
    }
  }
`;
