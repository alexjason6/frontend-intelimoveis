import React, { useState, useLayoutEffect } from 'react';
import Header from '../../components/Header';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Select } from '../../components/select';
import {
  Container, Form, Buttons, SearchBar, Title,
} from './styles';

export default function Home() {
  const [alugarSelecet, setAlugarSelect] = useState(false);
  const [venderSelecet, setVenderSelect] = useState(false);
  const [imoveis, setImoveis] = useState([]);

  async function getImoveis() {
    await fetch('http://127.0.0.1:3000/imoveis')
    // eslint-disable-next-line no-console
      .then((response) => response.json())
      .then((data) => setImoveis(data));
  }

  console.log(imoveis);

  useLayoutEffect(() => {
    getImoveis();
  }, []);

  function handleChangeSelectButton(button, e) {
    e.preventDefault();

    if (button === 'alugar') {
      setAlugarSelect(true);
      setVenderSelect(false);
    }

    if (button === 'vender') {
      setVenderSelect(true);
      setAlugarSelect(false);
    }
  }

  return (
    <Container>
      <Header />
      <Form>
        <Title>O seu novo lar em Contagem está aqui.</Title>
        <Buttons>
          <Button alugarHome selected={alugarSelecet} onClick={(e) => handleChangeSelectButton('alugar', e)}>Alugar</Button>
          <Button comprarHome selected={venderSelecet} onClick={(e) => handleChangeSelectButton('vender', e)}>Comprar</Button>
        </Buttons>
        <SearchBar>
          <Select tipoImovelHome>
            <option disabled selected>Selecione o tipo</option>
            <option>Apartamento</option>
            <option>Casa</option>
            <option>Sala</option>
            <option>Andar</option>
            <option>Lote</option>
            <option>Loja</option>
            <option>Galpão</option>
          </Select>
          <Input type="search" placeholder="Digite uma cidade, bairro ou código do imóvel" search />
        </SearchBar>
      </Form>
    </Container>
  );
}
