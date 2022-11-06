import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 128px 24px;
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
  margin: ${props => props.mar || ''};
  outline: none;
  border: none;
`;

export const Label = styled.label`
  margin: ${props => props.labelMar || ''};
`;

export const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
`;

export const Input = styled.input`
  padding: ${props => props.pad || ''};
  border-radius: ${props => props.bordRad || ''};
  border: 1px solid #d0d5dd;
`;

export const Title = styled.h1`
  margin: 20px 0;
`;

export const Desc = styled.p`
  margin-bottom: 48px;
`;

export const Button = styled.button`
  background-color: #1570ef;
  color: #fff;

  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  outline: none;
`;
