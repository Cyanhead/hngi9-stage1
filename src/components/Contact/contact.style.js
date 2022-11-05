import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 64px 24px;
  max-width: 1200px;
`;

export const Form = styled.form``;

export const FormWrap = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

export const Group = styled.fieldset`
  display: flex;
  flex-direction: ${props => props.flexDir || 'column'};
  justify-content: flex-end;

  width: 100%;
  outline: none;
  border: none;
`;

export const Label = styled.label``;

export const TextArea = styled.textarea``;

export const Input = styled.input``;

export const Title = styled.h2``;

export const Desc = styled.p``;

export const Button = styled.button`
  width: 100%;
`;
