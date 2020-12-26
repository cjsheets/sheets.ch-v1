import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    padding: 0;
    min-height: 100%;
    min-width: 100%;
  }

  #___gatsby #gatsby-focus-wrapper {
    min-height: 100vh;
    min-width: 100vw;
  }
`;

export const BodyContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  padding: 20px;
`;

export default GlobalStyle;
