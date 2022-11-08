import styled, { css } from 'styled-components';

export const Input = styled.input`
  &+& {
    margin: 0px 10px;
  }

  font-size: 14px;
  border-radius: 4px;
  border: none;
  text-align: left;

  ${({ search }) => search && css`
    margin-left: 10px;
    width: 400px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    outline: none;
    color: ${({ theme }) => theme.colors.grays.main};
  `};

  &:focus {
    outline: none;

    ${({ search }) => search && css`
      border: 1px solid ${({ theme }) => theme.colors.white};
    `};
  }
`;
