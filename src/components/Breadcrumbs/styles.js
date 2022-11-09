import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary.main};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  };

  a:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  max-width: 1700px;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;

export const Span = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 2px;
  font-style: oblique;

  ${({ home }) => home && css`
    font-weight: 600;
  `};
`;
