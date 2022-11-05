import React from 'react';
import { PhotoWrap, Text, Photo, Wrap, Container } from './footer.style';

import zuri from '../../assets/images/Zuri.Internship_Logo.svg';
import i4g from '../../assets/images/I4G.svg';

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <PhotoWrap>
          <Photo src={zuri} alt="" />
        </PhotoWrap>
        <Text fg="#667085">HNG Internship 9 Frontend Task</Text>
        <PhotoWrap>
          <Photo src={i4g} alt="" />
        </PhotoWrap>
      </Wrap>
    </Container>
  );
};

export default Footer;
