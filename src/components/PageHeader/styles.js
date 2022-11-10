import styled from 'styled-components';

export const Container = styled.div`
  width: 100%
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grays.mainLight};
  font-weight: 600;
`;

export const Description = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.titles};
  font-weight: 400;
`;
