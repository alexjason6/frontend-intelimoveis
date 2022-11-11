import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

export const ImoveisContent = styled.section`
  width: calc(100% - 330px);
`;

export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grays.mainLight};
`;
