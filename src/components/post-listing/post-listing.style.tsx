import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const PostTitle = styled.h2`
  font-size: 2.25rem;
`;

export const PostDate = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme.gray2};
`;
