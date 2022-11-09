import styled, { css } from 'styled-components';

export const Select = styled.select`
  &+& {
    margin: 0px 10px;
  }

  font-size: 12px;
  border-radius: 4px;
  border: none;
  text-align: left;

  ${({ tipoImovelHome }) => tipoImovelHome && css`
    margin-left: 10px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    outline: none;
    color: ${({ theme }) => theme.colors.grays.main};
  `};

  &:focus {
    outline: none;

    ${({ tipoImovelHome }) => tipoImovelHome && css`
      border: 1px solid ${({ theme }) => theme.colors.white};
    `};
  }
`;
