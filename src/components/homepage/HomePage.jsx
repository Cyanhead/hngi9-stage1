import React from 'react';
import {
  Container,
  Wrap,
  Section,
  ProfilePhotoWrap,
  ProfilePhoto,
  Name,
  Link,
  Text,
} from './home-page.style';

import profile from '../../assets/images/profile.jpg';

const HomePage = () => {
  const Links = ({ links }) => {
    return (
      <>
        {links.map(({ value, url, resetCase }, i) => {
          return (
            <Link href={url} key={url + i}>
              <Text textTrans={resetCase ? 'unset' : ''}>{value}</Text>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <Container>
      <Wrap>
        <Section>
          <ProfilePhotoWrap>
            <ProfilePhoto src={profile} alt="" />
          </ProfilePhotoWrap>
          <Name>Bunmi Oye</Name>
        </Section>
        <Section>
          <Links
            links={[
              { value: 'twitter link', url: 'https://twitter.com' },
              { value: 'zuri team', url: '/' },
              { value: 'zuri books', url: '/' },
              { value: 'python books', url: '/' },
              {
                value: 'Background Check for Coders',
                url: '/',
                resetCase: true,
              },
              { value: 'design books', url: '/' },
            ]}
          />
        </Section>
      </Wrap>
    </Container>
  );
};

export default HomePage;
