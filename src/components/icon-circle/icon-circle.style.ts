import styled from 'styled-components';

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.blue2};
  color: #ffffff;
  border-radius: 25px;
`;

export default Circle;
