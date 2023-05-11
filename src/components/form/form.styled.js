import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  width: 200px;
  margin: auto;
`;

export const Input = styled.input`
  background-color: inherit;
  width: inherit;
`;

export const Span = styled.span`
  ont-size: larger;
  font-weight: 500;
  color: #3b3a39;
`;

export const Button = styled.button`
    width: 100px;
    height: 30px;
    margin: auto;
    background-color: inherit;
    box-shadow: 2px 2px 2px 2px #6a6a6e;
    cursor: pointer;
    margin-bottom: 40px;
   &:active {
  background-color: #b5b3b3;
  transform: translateY(2px);
  box-shadow: none;
  
`;
