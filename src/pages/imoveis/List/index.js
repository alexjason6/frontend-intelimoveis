import React, { useEffect, useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';

import IntelimoveisService from '../../../services/IntelimoveisServices';

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
  const [allImoveis, setAllImoveis] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getImoveis() {
    const responseStorage = localStorage.getItem('imoveis');

    setImoveis(JSON.parse(responseStorage));

    await IntelimoveisService.getImoveis()
      .then((response) => setAllImoveis(response))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getImoveis();
  }, []);

  if (loading) {
    return 'Carregando';
  }

  return (
    <Container>
      <Header />
      <BreadCrumbs />
      <Content>
        <FilterBar title="Filtrar resultados" imoveis={imoveis} allImoveis={allImoveis} />
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
