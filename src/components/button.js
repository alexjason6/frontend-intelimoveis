import styled, { css } from 'styled-components';

export const Button = styled.button`

  font-size: 14px;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.white};


  ${({ home }) => home && css`
    & + & {
      margin-left: 10px;
    }

    font-size: 14px;
    font-weight: 600;
    padding: 3px 15px;
    background: ${({ theme }) => theme.colors.white70};
    color: ${({ theme }) => theme.colors.grays.dark};
    border: 1px solid transparent;
    transition: background 0.3s ease-in;
  `};

  ${({ selected }) => selected && css`
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
  `};

  ${({ homeSearch }) => homeSearch && css`
    height: 40px;
    background: ${({ theme }) => theme.colors.highlight.main};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  `};

  ${({ filterBar }) => filterBar && css`
    height: 30px;
    font-size: 10px;
    background: ${({ theme }) => theme.colors.grays.lighter};
    color: ${({ theme }) => theme.colors.grays.main};
  `};

  ${({ pageHeader }) => pageHeader && css`
    & + & {
        margin-left: 10px;
      }
    font-size: 14px;
    padding: 3px 15px;
    background: ${({ theme }) => theme.colors.highlight.main};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
    transition: background 0.3s ease-in;
  `};

  &:hover {
  ${({ home }) => home && css`
    background: ${({ theme }) => theme.colors.highlight.main};
    color: ${({ theme }) => theme.colors.grays.dark};
    transition: all 0.3s ease-in;
  `};

  ${({ pageHeader }) => pageHeader && css`
    background: ${({ theme }) => theme.colors.primary.main};
    transition: background 0.3s ease-in;
  `};
  }
`;
