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
  const FormGroup = ({ labelName, inputType, id, flexDir, children }) => {
    return (
      <Group flexDir={flexDir}>
        <Label htmlFor={id}>{labelName}</Label>
        {children ? children : <Input type={inputType} id={id} />}
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
            <div style={{ display: 'flex', alignContent: 'center' }}>
              <FormGroup
                labelName="First name"
                inputType="text"
                id="first_name"
              />
              <FormGroup
                labelName="Last name"
                inputType="text"
                id="last_name"
              />
            </div>
            <FormGroup labelName="Email address" id="message">
              <TextArea id="message" />
            </FormGroup>
            <FormGroup
              flexDir="row-reverse"
              labelName="You agree to providing your data to {name} who may contact you."
              inputType="checkbox"
              id="agreement"
            />

            <Button id="btn__submit">Submit message</Button>
          </Form>
        </FormWrap>
      </Wrap>
    </Container>
  );
};

export default Contact;
