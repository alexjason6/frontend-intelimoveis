import React, { useEffect, useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';

import Header from '../../../components/Header';
import BreadCrumbs from '../../../components/Breadcrumbs';
import PageHeader from '../../../components/PageHeader';
import { Button } from '../../../components/button';
import FilterBar from './components/Filterbar';
import ListImovel from './components/ListImovel';

import {
  Container,
  Content,
  ImoveisContent,
  Buttons,
  ButtonContainer,
} from './styles';
import Footer from '../../../components/Footer';

export default function ListImoveis() {
  const [imoveis, setImoveis] = useState([]);

  async function getImoveis() {
    const response = localStorage.getItem('imoveis');

    setImoveis(JSON.parse(response));
  }

  useEffect(() => {
    getImoveis();
  }, []);

  console.log(imoveis);

  return (
    <Container>
      <Header />
      <BreadCrumbs />
      <Content>
        <FilterBar title="Filtrar resultados" />
        <ImoveisContent>
          <PageHeader title="Casas à venda em Salvador." description={`Sua busca resultou em ${imoveis.length} ${imoveis.length > 1 ? 'imóveis' : 'imovel'}.`}>
            <Buttons>
              <ButtonContainer>
                <Button pageHeader>Comprar</Button>
                <Button pageHeader>Alugar</Button>
              </ButtonContainer>
              <ButtonContainer>
                <BsFilterLeft size={25} color="#0da52e" style={{ marginRight: '20' }} />
                Ordernar
              </ButtonContainer>
            </Buttons>
          </PageHeader>
          {imoveis.length >= 1 ? imoveis.map((item) => (
            <ListImovel imovel={item} />
          )) : <span>oi</span>}
        </ImoveisContent>
      </Content>
      <Footer />
    </Container>
  );
}
