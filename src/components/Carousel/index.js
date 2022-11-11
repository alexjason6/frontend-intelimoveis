import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { CarouselItem, Container, Arrows } from './styles';

export default function Carousel() {
  const data = ['https://cdtatosimobiliarios.com.br/wp-content/uploads/2022/10/PHOTO-2022-10-17-12-22-27-3.jpg', 'https://cdtatosimobiliarios.com.br/wp-content/uploads/2022/10/PHOTO-2022-10-17-12-22-33-1.jpg', 'https://cdtatosimobiliarios.com.br/wp-content/uploads/2022/10/PHOTO-2022-10-17-12-22-32-4.jpg', 'https://cdtatosimobiliarios.com.br/wp-content/uploads/2022/10/PHOTO-2022-10-17-12-22-27.jpg', 'https://cdtatosimobiliarios.com.br/wp-content/uploads/2022/10/PHOTO-2022-10-17-12-22-27-2.jpg', 'https://cdtatosimobiliarios.com.br/wp-content/uploads/2022/10/PHOTO-2022-10-17-12-22-32.jpg', 'https://cdtatosimobiliarios.com.br/wp-content/uploads/2022/10/PHOTO-2022-10-17-12-22-31-2.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  function handleChangeSlide(index, text) {
    if ((index === data.length - 1 && text === 'next') || (index === data.length - 1 && text === 'back')) {
      setCurrentIndex(0);
    }

    if (index < data.length - 1 && text === 'next') {
      setCurrentIndex(index + 1);
    }

    if (index < data.length - 1 && text === 'back') {
      setCurrentIndex(index - 1);
    }

    if (index === 0 && text === 'back') {
      setCurrentIndex(data.length - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => carouselInfiniteScroll(), 3000);
    clearInterval(interval);
  });

  return (
    <Container>
      {data.map((item, index) => (
        <CarouselItem
          image={item}
          alt="CDT - Atos imobiliários"
          active={currentIndex === index}
          key={item}
        >
          <Arrows>
            <FiChevronLeft
              color="#ffffff"
              size={20}
              onClick={() => handleChangeSlide(index, 'back')}
              style={{ cursor: 'pointer', filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))' }}
            />
            <FiChevronRight
              color="#ffffff"
              size={20}
              onClick={() => handleChangeSlide(index, 'next')}
              style={{ cursor: 'pointer', filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))' }}
            />
          </Arrows>
        </CarouselItem>
      ))}
    </Container>
  );
}
