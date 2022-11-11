import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 225px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.grays.light};
`;

export const CarouselItem = styled.div`
  width: 300px;
  display: none;
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  transition: all 0.4s ease-in;

  ${({ active }) => active && css`
    width: 300px;
    height: 100%;
    display: inline-block;
    visibility: visible;
    opacity: 1;
    transition: all 0.4s ease-in;
  `}
`;

export const Arrows = styled.div`
  width: 100%;
  height: 225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
