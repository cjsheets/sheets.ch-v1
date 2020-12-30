import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, BodyContainer, PageContainer } from './index.style';
import Header from './header';
import Footer from './footer';
import theme from '../styles/default-theme';

interface IProps {
  title?: string;
  fullScreen?: boolean;
  children: React.ReactNode;
}

export default function LayoutContainer({ title, fullScreen, children }: IProps) {
  const bodyStyle = fullScreen ? {} : { maxWidth: 'var(--content-max-width)', margin: 'auto' };

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <GlobalStyle />
        <Helmet>
          <html lang="en" />
          {title && <title>{title}</title>}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        <BodyContainer style={bodyStyle}>{children}</BodyContainer>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
}
