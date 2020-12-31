import styled from 'styled-components';

export const FooterContainer = styled.footer`
  flex: 0 0 125px;
  display: flex;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.gray6};
  font-size: 1.125rem;
  font-weight: ${(props) => props.theme.fontWeightLight};
  color: ${(props) => props.theme.gray2};
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
  justify-content: center;
`;

export const SvgStyledAnchor = styled.a`
  margin: 20px;

  rect {
    fill: ${(props) => props.theme.gray3};
  }

  path,
  circle {
    stroke: ${(props) => props.theme.gray6};
    fill: ${(props) => props.theme.gray6};
  }
`;

export const SvgStyleDiv = styled.div`
  margin: 20px;

  path,
  circle {
    stroke: ${(props) => props.theme.gray3};
  }

  circle {
    fill: ${(props) => props.theme.gray3};
  }
`;

export const Terms = styled.section`
  flex: 1 1 33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    color: ${(props) => props.theme.gray2};
    padding-left: 40px;
  }
`;
