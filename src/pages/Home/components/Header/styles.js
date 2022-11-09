import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
`;

export const Menu = styled.div`
  width: 80%;
  text-align: right;

  a {
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.grays.lighter};
    animation: color ease-in 800;
  }
`;
