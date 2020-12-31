import React from 'react';
import Link from 'gatsby-link';
import config from '../../config';
import {
  Copyright,
  ExternalLinks,
  FooterContainer,
  SvgStyledAnchor,
  SvgStyleDiv,
  Terms,
} from './footer.style';
import GitHubLogo from '../github-icon/github-icon';
import LinkedInLogo from '../../../assets/icons/linkedin.svg';
import RssIcon from '../../../assets/icons/rss-feed.svg';
import MessageIcon from '../../../assets/icons/message.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>&copy; {new Date().getFullYear()} Chad Sheets</Copyright>
      <ExternalLinks>
        <SvgStyledAnchor href="https://github.com/cjsheets">
          <GitHubLogo width={24} height={24} />
        </SvgStyledAnchor>
        <SvgStyledAnchor href="https://www.linkedin.com/in/chadsheets/">
          <LinkedInLogo width={24} height={24} />
        </SvgStyledAnchor>
        {/* ToDo: RSS and Contact Page */}
        {/* <SvgStyleDiv>
          <Link to="/contact">
            <MessageIcon width={24} height={24} />
          </Link>
        </SvgStyleDiv>
        <SvgStyleDiv>
          <Link to={config.siteRss}>
            <RssIcon width={24} height={24} />
          </Link>
        </SvgStyleDiv> */}
      </ExternalLinks>
      <Terms>
        <Link to="/tos">Terms</Link>
        <Link to="/privacy">Privacy</Link>
      </Terms>
    </FooterContainer>
  );
}
