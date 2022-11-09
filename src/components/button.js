import styled, { css } from 'styled-components';

export const Button = styled.button`
  &+& {
    margin: 0px 10px;
  }

  font-size: 14px;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.white};

  ${({ alugarHome }) => alugarHome && css`
    font-size: 14px;
    padding: 3px 15px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease-in;
  `};

  ${({ comprarHome }) => comprarHome && css`
    font-size: 14px;
    font-weight: 600;
    padding: 3px 15px;
    background: ${({ theme }) => theme.colors.primary.main};
    border: 1px solid transparent;
    transition: background 0.3s ease-in;
  `};

  ${({ selected }) => selected && css`
    background: ${({ theme }) => theme.colors.highlight.main};
  `};

  ${({ homeSearch }) => homeSearch && css`
    height: 40px;
    background: ${({ theme }) => theme.colors.highlight.main};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  `};

  &:hover {
    ${({ alugarHome }) => alugarHome && css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary.main};
    transition: all 0.3s ease-in;
  `};

  ${({ comprarHome }) => comprarHome && css`
    background: ${({ theme }) => theme.colors.highlight.main};
    color: ${({ theme }) => theme.colors.grays.dark};
    transition: all 0.3s ease-in;
  `};
  }
`;
