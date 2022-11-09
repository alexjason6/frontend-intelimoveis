import styled from 'styled-components';
import sofa from '../../assets/images/cdt-home-sofa.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${sofa});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 50%;
  margin-top: 10%;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SearchBar = styled.div`
  max-width: 700px;
  width: 100%;
  height: 40px;
  margin-top: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
