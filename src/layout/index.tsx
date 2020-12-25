import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../content/config';
import { GlobalStyle } from './index.style';
import Header from './header';
import Footer from './footer';

interface IProps {
  title?: string;
  children: React.ReactNode;
}

export function Container(props: IProps) {
  return (
    <div className="layout-container">
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{props.title}</title>
        <meta name="description" content={config.siteDescription} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
