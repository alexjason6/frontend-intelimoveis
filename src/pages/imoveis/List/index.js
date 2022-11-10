import React, { useEffect, useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';

import Header from '../../../components/Header';
import BreadCrumbs from '../../../components/Breadcrumbs';
import PageHeader from '../../../components/PageHeader';
import { Button } from '../../../components/button';

import {
  Container, Content, ImoveisContent, Buttons, Imovel,
} from './styles';
import FilterBar from './components/Filterbar';
import Carousel from '../../../components/Carousel';

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
        <ImoveisContent>
          <PageHeader title="Casas à venda em Salvador." description={`Sua busca resultou em ${imoveis.length} ${imoveis.length > 1 ? 'imóveis' : 'imovel'}.`}>
            <Buttons>
              <div>
                <Button pageHeader>Comprar</Button>
                <Button pageHeader>Alugar</Button>
              </div>
              <div>
                <BsFilterLeft size={25} color="#0da52e" />
                <span>Ordernar</span>
              </div>
            </Buttons>
          </PageHeader>
          {/*         {imoveis.length >= 1 ? imoveis.map((item) => (
          <span key={item.cod_imovel}>{item.nome}</span>
        )) : <span>oi</span>} */}
          <Imovel>
            <Carousel />
          </Imovel>
        </ImoveisContent>
      </Content>
    </Container>
  );
}
