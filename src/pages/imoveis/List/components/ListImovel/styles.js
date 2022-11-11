import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.highlight.main};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

export const Imovel = styled.div`
  width: calc(100% - 315px);
`;

export const ImovelHeader = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

export const Title = styled.h3`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grays.mainLight};
`;

export const Address = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grays.light};
`;

export const Highlights = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Detail = styled.div`
  & + & {
    margin-left: 30px;
  }

  display: flex;
  align-items: center;
`;

export const TextDetail = styled.span`
  font-size: 12px;
  font-weight: 800;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.grays.mainLight};
`;

export const Tips = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Tip = styled.span`
  & + & {
    margin-left: 10px
  }

  padding: 5px 20px;
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.grays.light};
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 10px;

  b {
    font-size: 20px;
    font-weight: 600;
  }

  ${({ tax }) => tax && css`
  margin-bottom: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grays.light};
  `}
`;

export const CodeImovel = styled.p`
  margin-top: -20px;
  margin-right: 10px;
  font-size: 12px;
  text-align: right;
  color: ${({ theme }) => theme.colors.grays.main};
`;
