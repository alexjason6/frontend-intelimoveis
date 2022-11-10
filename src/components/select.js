import styled, { css } from 'styled-components';

export const Select = styled.select`
  &+& {
    margin: 0px 10px;
  }

  height: 30px;
  font-size: 12px;
  border-radius: 4px;
  border: none;
  text-align: left;
  outline: none;

  ${({ tipoImovelHome }) => tipoImovelHome && css`
    margin-left: 10px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grays.main};
  `};

  ${({ filterBar }) => filterBar && css`
    width: 100%;
    padding: 5px;
    background: ${({ theme }) => theme.colors.grays.lighter};
    color: ${({ theme }) => theme.colors.grays.main};
  `};

  &:focus {
    ${({ tipoImovelHome }) => tipoImovelHome && css`
      border: 1px solid ${({ theme }) => theme.colors.white};
    `};
  }
`;
