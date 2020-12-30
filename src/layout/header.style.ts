import styled from 'styled-components';

export const HeaderContainer = styled.header`
  flex: 0 0 60px;
  display: flex;
`;

export const LogoContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  font-size: 28px;
`;

export const NavigationContainer = styled.nav`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-weight: ${(props) => props.theme.fontWeightLight};
    color: ${(props) => props.theme.gray1};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }
`;
