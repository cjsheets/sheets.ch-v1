import styled from 'styled-components';

export const HeaderContainer = styled.header`
  flex: 0 0 60px;
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto;
`;

export const LogoContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: ${(props) => props.theme.fontWeightBold};
  margin-left: 2rem;

  svg {
    margin-right: 1rem;
  }

  height: 100%;
  color: ${(props) => props.theme.gray1};

  span:last-child {
    font-weight: ${(props) => props.theme.fontWeightLight};
    color: ${(props) => props.theme.gray2};
  }
`;

export const NavigationContainer = styled.nav`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;

  a {
    height: 100%;
    font-size: 24px;
    font-weight: ${(props) => props.theme.fontWeightLight};
    color: ${(props) => props.theme.gray2};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 40px;
  }

  rect {
    fill: ${(props) => props.theme.gray3};
  }
`;
