import styled, { css } from 'styled-components';

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
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.highlight.main};
  margin-top: 15px;

  ${({ checkbox }) => checkbox && css`
    font-size: 10px;
    margin-top: 0px;
    font-weight: 400;
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.grays.light};
  `};
`;

export const BoxSearch = styled.div`
  width: 100%;
  padding: 0px 5px;
  margin: 10px 0px 1px 0px;
  background: ${({ theme }) => theme.colors.grays.lighter};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxInfo = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${({ checkbox }) => checkbox && css`
    flex-direction: column;
    align-items: flex-start;

    div {
      height: 20px;
      display: flex;
      align-items: center;
      flex-direction: row;
    }
  `};
`;

export const Localizacao = styled.div`
  font-size: 10px;
  padding: 5px 10px;
  margin: 3px 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
