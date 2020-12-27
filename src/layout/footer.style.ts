import styled from 'styled-components';

export const FooterContainer = styled.footer`
  flex: 0 0 125px;
  display: flex;
  background-color: ${(props) => props.theme.gray6};
  font-weight: ${(props) => props.theme.fontWeightLight};
  color: ${(props) => props.theme.gray1};
`;

export const Copyright = styled.section`
  flex: 1 1 33%;
  display: flex;
  align-items: center;
`;

export const ExternalLinks = styled.section`
  flex: 1 1 33%;
  display: flex;
  align-items: center;
`;

export const Terms = styled.section`
  flex: 1 1 33%;
  display: flex;
  align-items: center;
`;
