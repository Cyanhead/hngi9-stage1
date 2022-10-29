import React from 'react';
import {
  Container,
  Wrap,
  Section,
  PhotoWrap,
  ProfilePhoto,
  Name,
  Link,
  ButtonLink,
  Text,
  Photo,
} from './home-page.style';

import profile from '../../assets/images/profile.jpg';
import slack from '../../assets/images/slack.svg';
import github from '../../assets/images/github.svg';
import zuri from '../../assets/images/Zuri.Internship_Logo.svg';
import i4g from '../../assets/images/I4G.svg';

const HomePage = () => {
  const Links = ({ links }) => {
    return (
      <>
        {links.map(({ value, url, resetCase }, i) => {
          return (
            <ButtonLink href={url} key={url + i}>
              <Text textTrans={resetCase ? 'unset' : ''}>{value}</Text>
            </ButtonLink>
          );
        })}
      </>
    );
  };

  return (
    <Container>
      <Wrap>
        <Section>
          <PhotoWrap mar="0 0 24px 0">
            <ProfilePhoto src={profile} alt="" />
          </PhotoWrap>
          <Name>Bunmi Oye</Name>
        </Section>
        <Section mar="0 0 24px 0">
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
        <Section flexDir="row" pad="24px">
          <Link href="/lol" mar="0 12px">
            <PhotoWrap>
              <Photo src={slack} alt="" />
            </PhotoWrap>
          </Link>
          <Link href="/lol" mar="0 12px">
            <PhotoWrap>
              <Photo src={github} alt="" />
            </PhotoWrap>
          </Link>
        </Section>
        <Section flexDir="row" justCont="space-between" pad="84px 0 52px 0">
          <PhotoWrap>
            <Photo src={zuri} alt="" />
          </PhotoWrap>
          <Text fg="#667085">HNG Internship 9 Frontend Task</Text>
          <PhotoWrap>
            <Photo src={i4g} alt="" />
          </PhotoWrap>
        </Section>
      </Wrap>
    </Container>
  );
};

export default HomePage;
