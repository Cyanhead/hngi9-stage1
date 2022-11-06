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
    labelMar,
    inputType,
    id,
    flexDir,
    mar,
    pad,
    bordRad,
    placeHolder,
    children,
  }) => {
    return (
      <Group flexDir={flexDir} mar={mar || '24px 0'}>
        <Label htmlFor={id} labelMar={labelMar}>
          {labelName}
        </Label>
        {children ? (
          children
        ) : (
          <Input
            type={inputType}
            id={id}
            placeholder={placeHolder}
            pad={pad || '10px 12px'}
            bordRad="8px"
          />
        )}
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
            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                margin: '24px 0',
              }}
            >
              <FormGroup
                labelName="First name"
                inputType="text"
                id="first_name"
                mar="0"
                placeHolder="Enter your first name"
              />
              <FormGroup
                labelName="Last name"
                inputType="text"
                id="last_name"
                mar="0 0 0 24px"
                placeHolder="Enter your last name"
              />
            </div>
            <FormGroup labelName="Email address" id="message">
              <TextArea id="message" placeholder="yourname@email.com" />
            </FormGroup>
            <FormGroup
              flexDir="row-reverse"
              labelName="You agree to providing your data to {name} who may contact you."
              inputType="checkbox"
              id="agreement"
              mar="24px 0 32px 0"
              labelMar="0 0 0 12px"
            />

            <Button id="btn__submit">Submit message</Button>
          </Form>
        </FormWrap>
      </Wrap>
    </Container>
  );
};

export default Contact;
