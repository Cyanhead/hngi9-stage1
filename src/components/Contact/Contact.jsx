import React from 'react';
import {
  Group,
  Label,
  TextArea,
  Input,
  Container,
  Wrap,
  Title,
  Desc,
  Form,
  FormWrap,
  Button,
} from './contact.style';

const Contact = () => {
  const FormGroup = ({
    labelName,
    inputType,
    textArea,
    id,
    flexDir,
    children,
  }) => {
    return (
      <Group flexDir={flexDir}>
        <Label>{labelName}</Label>
        {textArea ? <TextArea id={id} /> : <Input type={inputType} id={id} />}
      </Group>
    );
  };

  return (
    <Container>
      <Wrap>
        <FormWrap>
          <Title>Contact Me</Title>
          <Desc>
            Hi there, contact me to ask me about anything you have in mind
          </Desc>
          <Form>
            <FormGroup
              labelName="First name"
              inputType="text"
              id="first_name"
            />
            <FormGroup labelName="Last name" inputType="text" id="last_name" />
            <FormGroup labelName="Email address" inputType="email" id="email" />
            <FormGroup labelName="Email address" textArea id="message" />

            <Button id="btn__submit">button</Button>
          </Form>
        </FormWrap>
      </Wrap>
    </Container>
  );
};

export default Contact;
