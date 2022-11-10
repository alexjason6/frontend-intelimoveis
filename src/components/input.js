import styled, { css } from 'styled-components';

export const Input = styled.input`
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  text-align: left;

  ${({ search }) => search && css`
    max-width: 600px;
    width: 100%;
    font-size: 12px;
    margin-left: 10px;
    padding-left: 15px;
    border-left: 1px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 0px;
    color: ${({ theme }) => theme.colors.primary.dark};
    outline: none;
  `};

  ${({ suggestion }) => suggestion && css`

    & + & {
      margin-top: 2px;
    }

    max-width: 700px;
    width: 100%;
    padding: 4px 0px;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    background: ${({ theme }) => theme.colors.grays.lighter};
    color: ${({ theme }) => theme.colors.grays.dark};
    cursor: pointer;
  `};

  ${({ filterBar }) => filterBar && css`
    width: 90%;
    font-size: 10px;
    padding: 5px;
    background: ${({ theme }) => theme.colors.grays.lighter};
    color: ${({ theme }) => theme.colors.grays.main};
    outline: none;
  `};

  ${({ filterBarValor }) => filterBarValor && css`
    width: 48%;
    font-size: 10px;
    padding: 5px;
    margin-right: 5px;
    background: ${({ theme }) => theme.colors.grays.lighter};
    color: ${({ theme }) => theme.colors.grays.main};
    outline: none;
  `};

  ${({ checkbox }) => checkbox && css`
    height: 20px;
    font-size: 10px;
    padding: 5px;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.grays.main};
    border: 0;
  `};

  &:focus {
    ${({ search }) => search && css`
      border-left: 1px solid ${({ theme }) => theme.colors.primary.main};
      border-radius: 0px;
    `};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grays.light};
  }
`;
