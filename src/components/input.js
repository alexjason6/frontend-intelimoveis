import styled, { css } from 'styled-components';

export const Input = styled.input`
  &+& {
    margin: 1px 10px;
  }

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
    width: 400px;
    padding: 4px 0px;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    background: ${({ theme }) => theme.colors.grays.lighter};
    color: ${({ theme }) => theme.colors.grays.dark};
    cursor: pointer;
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
