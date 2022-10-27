import React from 'react';
import {
  Container,
  Wrap,
  Section,
  ProfilePhotoWrap,
  ProfilePhoto,
} from './home-page.style';

import profile from '../../assets/images/profile.jpg';

const HomePage = () => {
  return (
    <Container>
      <Wrap>
        <Section>
          <ProfilePhotoWrap>
            <ProfilePhoto src={profile} alt="" />
          </ProfilePhotoWrap>
        </Section>
      </Wrap>
    </Container>
  );
};

export default HomePage;
