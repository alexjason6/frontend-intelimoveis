import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;
