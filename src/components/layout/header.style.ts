import styled from 'styled-components';

export const HeaderContainer = styled.header`
  flex: 0 0 60px;
  display: flex;
  margin: 0 2rem;
`;

export const LogoContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: ${(props) => props.theme.fontWeightBold};

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
