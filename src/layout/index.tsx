import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../content/config';
import GlobalStyle, { BodyContainer } from './index.style';
import Header from './header';
import Footer from './footer';

interface IProps {
  title?: string;
  children: React.ReactNode;
}

export default function Container({ title, children }: IProps) {
  return (
    <BodyContainer>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </BodyContainer>
  );
}
