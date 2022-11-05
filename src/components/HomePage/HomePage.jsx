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
  RouteLink,
} from './home-page.style';

import profile from '../../assets/images/profile.jpg';
import slack from '../../assets/images/slack.svg';
import github from '../../assets/images/github.svg';

const HomePage = () => {
  const Links = ({ links }) => {
    return (
      <>
        {links.map(
          ({ id, value, subtext, url, resetCase, internalRoute }, i) => {
            return (
              <React.Fragment key={url}>
                {internalRoute ? (
                  <RouteLink
                    id={id}
                    to={url}
                    key={url + i}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text textTrans={resetCase ? 'unset' : ''}>
                      {value}
                      {subtext ? `: ${subtext}` : ''}
                    </Text>
                  </RouteLink>
                ) : (
                  <ButtonLink
                    id={id}
                    href={url}
                    key={url + i}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text textTrans={resetCase ? 'unset' : ''}>
                      {value}
                      {subtext ? `: ${subtext}` : ''}
                    </Text>
                  </ButtonLink>
                )}
              </React.Fragment>
            );
          }
        )}
      </>
    );
  };

  return (
    <Container>
      <Wrap>
        {/* PROFILE SECTION */}
        <Section>
          <PhotoWrap mar="0 0 24px 0">
            <ProfilePhoto src={profile} alt="" id="profile__img" />
          </PhotoWrap>
          <Name id="twitter">Cyanhead</Name>
          <Name id="slack" style={{ display: 'none' }}>
            Cyanhead
          </Name>
        </Section>

        {/* LINKS SECTION */}
        <Section mar="0 0 24px 0">
          <Links
            links={[
              {
                id: 'twitter__link',
                value: 'Twitter link',
                url: 'https://twitter.com/cyanhead',
              },
              {
                id: 'btn__zuri',
                value: 'Zuri team',
                url: 'https://training.zuri.team/',
              },
              {
                id: 'books',
                value: 'Zuri books',
                subtext: 'The place to find books on design and coding.',
                url: 'http://books.zuri.team/',
              },
              {
                id: 'book__python',
                value: 'Python books',
                subtext: 'Learn python hassle-free today.',
                url: 'https://books.zuri.team/python-for-beginners?ref_id=cyanhead',
              },
              {
                id: 'pitch',
                value: 'Background Check for Coders',
                subtext: 'Our backround checks on coders are 🔥. Try it now.',
                url: 'https://backgroundcheck.zuri.team/',
                resetCase: true,
              },
              {
                id: 'book__design',
                value: 'Design books',
                subtext: "Be the designer you've dreamed of, free of charge!",
                url: 'https://books.zuri.team/design-rules',
              },
              {
                id: 'contact',
                value: 'Contact Me',
                url: '/contact',
                internalRoute: true,
              },
            ]}
          />
        </Section>
        <Section flexDir="row" pad="24px">
          <Link
            href="https://slack.com/"
            target="_blank"
            rel="noreferrer"
            mar="0 12px"
          >
            <PhotoWrap>
              <Photo src={slack} alt="" />
            </PhotoWrap>
          </Link>
          <Link
            href="https://github.com/cyanhead"
            target="_blank"
            rel="noreferrer"
            mar="0 12px"
          >
            <PhotoWrap>
              <Photo src={github} alt="" />
            </PhotoWrap>
          </Link>
        </Section>
      </Wrap>
    </Container>
  );
};

export default HomePage;
