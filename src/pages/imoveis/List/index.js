import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import BreadCrumbs from '../../../components/Breadcrumbs';

import { Container, Content } from './styles';
import FilterBar from './components/Filterbar';

export default function ListImoveis() {
  const [imoveis, setImoveis] = useState([]);

  async function getImoveis() {
    const response = localStorage.getItem('imoveis');

    setImoveis(JSON.parse(response));
  }

  useEffect(() => {
    getImoveis();
  }, []);

  return (
    <Container>
      <Header />
      <BreadCrumbs />
      <Content>
        <FilterBar title="Filtrar resultados" />
        {imoveis.length >= 1 ? imoveis.map((item) => (
          <span key={item.cod_imovel}>{item.nome}</span>
        )) : <span>oi</span>}
      </Content>
    </Container>
  );
}
