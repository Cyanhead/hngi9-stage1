import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

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
