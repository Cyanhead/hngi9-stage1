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

export const Section = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDir || 'column'};
  justify-content: ${props => props.justCont || 'center'};
  align-items: center;

  margin: ${props => props.mar || '0 0 56px 0'};
  padding: ${props => props.pad || ''};
  width: 100%;
  padding: ${props => props.pad || ''};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PhotoWrap = styled.div`
  margin: ${props => props.mar || ''};
`;

export const ProfilePhoto = styled.img`
  width: 88px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Link = styled.a`
  margin: ${props => props.mar || ''};

  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
  width: 100%;
  height: 76px;
  border-radius: 8px;

  background-color: #eaecf0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  color: ${props => props.fg || ''};

  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Photo = styled.img`
  width: ${props => props.width || ''};
  height: auto;
`;
