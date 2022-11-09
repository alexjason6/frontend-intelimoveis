import styled from 'styled-components';

export const Container = styled.section`
  width: 300px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 24px 17px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.titles};
`;
