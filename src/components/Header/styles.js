import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
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
  width: 100%;
  text-align: right;

  a {
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grays.mainLight};
    margin-right: 20px;
    transition: color 0.2s ease-in;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    transition: color 0.2s ease-in;
  }
`;
