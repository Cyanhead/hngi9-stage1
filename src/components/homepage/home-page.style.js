import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 64px 12px;
  max-width: 1200px;

  border: 3px solid black; // TODO delete
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 56px;
  width: 100%;
  padding: ${props => props.pad || ''};

  &:last-child {
    margin-bottom: 0;
  }

  /* border: 3px solid red; // TODO delete */
`;

export const ProfilePhotoWrap = styled.div`
  margin-bottom: 24px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
  width: 100%;
  height: 76px;
  /* text-align: center; */
  border-radius: 8px;

  background-color: #eaecf0;
  color: inherit;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: ${props => props.textTrans || 'capitalize'};
`;

// export const Section = styled.div``;
