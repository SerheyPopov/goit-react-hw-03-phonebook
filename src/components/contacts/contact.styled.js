import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin-left: 20px;
`;
export const Name = styled.p`
  font-size: large;
  font-weight: 500;
`;

export const Number = styled.p`
  font-size: large;
  font-weight: 500;
`;
export const SubContainer = styled.div`
  display: flex;
`;
