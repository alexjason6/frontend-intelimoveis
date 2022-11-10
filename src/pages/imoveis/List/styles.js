import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1700px;
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

  div {
    display: flex;
    align-items: center;
  };

  span {
    margin-left: 20px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grays.mainLight};
  }
`;

export const Imovel = styled.div`
  width: 100%;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.highlight.main};
  border-radius: 4px;
`;
