import styled from 'styled-components';

export const PostContainer = styled.div`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeightLight};
  color: ${(props) => props.theme.gray1};
  text-align: left;
`;

export const PostTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: ${(props) => props.theme.fontWeightRegular};
  color: ${(props) => props.theme.gray1};
`;

export const PostDate = styled.h2`
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fontWeightLight};
  color: ${(props) => props.theme.gray2};
  margin: 0 0 20px;
`;
