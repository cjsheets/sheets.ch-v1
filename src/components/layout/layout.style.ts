import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from '../../styles/default-theme';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BodyContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    padding: 0;
    min-height: 100%;
    min-width: 100%;
    font-family: ${theme.fontFamily}
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.fontFamily};
    text-decoration: none;
    font-size: ${theme.fontSizeLarge};
    font-weight: ${theme.fontWeightRegular};
    text-transform: none;
    margin: 1rem 0;
  }

  h1 {
    font-size: ${theme.fontSizeXLarge};
    margin: 0.5em 0em 0.5em;
  }

  p {
    margin: 0 0 1.2rem;
  }

  a {
    color: ${theme.blue2};
    text-decoration: none;
  }

  blockquote {
    border-left: 3px solid ${theme.blue2};
    margin: 25px 0;
    padding: 5px 15px;
    background-color: ${theme.blue3};

    p {
      display: block;
      margin: 0;
      width: 100%;
    }
  }

  img {
    display: block;
    width: auto;
    max-width: 100%;

  }

  pre {
    background: #F1F0EA;
    border-right: 1px solid #DDDBCC;
    border-bottom: 1px solid #DDDBCC;
    border-left: 1px solid #DDDBCC;
    margin: 0 0 40px;
    padding: 15px 0px;
    font-size: 0.75rem;
    line-height: 16.8px;

  }

  pre ol {
    padding-left: 10px;
    margin-left: 20px;

  }

  code ol li,
  pre ol li {
    list-style : none;
    list-style-image : none;
    list-style-position : outside;
    list-style-type : disc;
    line-height: 16.8px;
    padding: 0px;
    margin: 0px;

  }

  hr {
    border: none;
    border-bottom: 1px dotted ${theme.gray2};
    margin: 45px 0;

  }


  :root {
    --content-max-width: 840px
  }

  @media (max-width: ${theme.viewportSmall}) {
    :root {
      font-size: 80%;
    }
  }

  @media (min-width: ${theme.viewportSmall}) and (max-width: ${theme.viewportMedium}) {
    :root {
      font-size: 80%;
    }
  }

  @media (min-width: ${theme.viewportMedium}) and (max-width: ${theme.viewportLarge}) {
    :root {
      font-size: 90%;
      --content-max-width: 750px
    }
  }

  @media (min-width: ${theme.viewportLarge}) and (max-width: ${theme.viewportXLarge}) {
    :root {
      font-size: 100%;
      --content-max-width: 1000px
    }
  }

  @media (min-width: ${theme.viewportXLarge}) {
    :root {
      --content-max-width: 1200px
    }
  }
`;
