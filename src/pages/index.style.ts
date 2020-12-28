import styled from 'styled-components';

export const HeroContainer = styled.main`
  flex: 0 0 700px;
  display: flex;
`;

export const SiteTitle = styled.hgroup`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;

  h1 {
    font-size: 4.5rem;
    font-weight: ${(props) => props.theme.fontWeightBold};
    margin: 0.25rem 0;
  }

  h2 {
    font-size: 2.5em;
    font-weight: ${(props) => props.theme.fontWeightLight};
    margin: 0 0 0 0.4rem;
  }
`;

export const Illustration = styled.section`
  flex: 1 1 50%;
  display: flex;
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeightLight};
  font-size: 2.5em;
  font-weight: ${(props) => props.theme.fontWeightLight};
`;

export const SubtextContainer = styled.section`
  flex: 0 0 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.gray3};
  font-weight: ${(props) => props.theme.fontWeightBold};
`;

export const CardContainer = styled.ul`
  flex: 1 1 auto;
  display: flex;
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeightLight};
  padding: 0;
  margin: 0;
`;

export const Card = styled.li`
  flex: 1 1 33%;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2.25rem;
    font-weight: ${(props) => props.theme.fontWeightRegular};
  }

  svg {
    margin: 0 0.75rem -0.125rem -0.75rem;
  }

  div {
    text-align: center;
    height: 210px;
    max-width: 350px;
    padding: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 8px 20px 6px rgba(0, 0, 0, 0.06);
  }
`;

export const PostContainer = styled.section`
  flex: 1 1 auto;
  display: flex;

  > div {
    flex: 1 1 50%;
    text-align: center;
  }
`;
