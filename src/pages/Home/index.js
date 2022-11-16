/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HomeHeader from './components/Header';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Select } from '../../components/select';
import {
  Container, Form, Buttons, SearchBar, Title,
} from './styles';
import IntelimoveisServices from '../../services/IntelimoveisServices';

export default function Home() {
  const navigate = useHistory();
  const [tipoImovel, setTipoimovel] = useState('');
  const [tipoNegocio, setTipoNegocio] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [imoveis, setImoveis] = useState([]);
  const [imoveisFiltered, setImoveisFiltered] = useState([]);
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [codImovel, setCodImovel] = useState();

  async function getInitialImoveis() {
    await IntelimoveisServices.getImoveis()
      .then((response) => setImoveis(response));
  }

  function filterImoveis(event) {
    setSearchTerm(event.target.value);

    const filterByCityOrNeighborOrCode = imoveis.filter((imovel) => imovel.cidade.toLowerCase().includes(event.target.value.toLowerCase()) || imovel.bairro.toLowerCase().includes(event.target.value.toLowerCase()) || imovel.cod_imovel === Number(event.target.value));
    const removeDuplicates = filterByCityOrNeighborOrCode.filter((value, index, array) => array.findIndex((secondValue) => (secondValue.cidade === value.cidade)) === index);

    setImoveisFiltered(removeDuplicates.sort((a, b) => (a > b ? 1 : -1)));
  }

  function handleChangeSelectButton(tipo) {
    if (tipo === 'aluguel') {
      setTipoNegocio(tipo);
    }

    if (tipo === 'venda') {
      setTipoNegocio(tipo);
    }
  }

  function handleSelectSearchImovel(event, data) {
    event.preventDefault();

    setSearchTerm(event.target.value);

    setBairro(data.bairro);
    setCidade(data.cidade);
    setCodImovel(data.cod_imovel);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await IntelimoveisServices.getImoveisSearch(tipoNegocio, tipoImovel, bairro, cidade)
        .then((response) => {
          localStorage.setItem('imoveis', JSON.stringify(response));
        });

      navigate.push({ pathname: '/imoveis/list', name: 'Resultado da busca' });
    } catch {
      alert('Erro ao buscar imóveis', codImovel);
    }
  }

  useEffect(() => {
    getInitialImoveis();
  }, []);

  return (
    <Container>
      <HomeHeader />
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Title>O seu novo lar em Contagem está aqui.</Title>
        <Buttons>
          <Button home selected={tipoNegocio === 'aluguel'} onClick={() => handleChangeSelectButton('aluguel')} type="button">Alugar</Button>
          <Button home selected={tipoNegocio === 'venda'} onClick={() => handleChangeSelectButton('venda')} type="button">Comprar</Button>
        </Buttons>
        <SearchBar>
          <Select tipoImovelHome onChange={(event) => setTipoimovel(event.target.value)}>
            <option value="">Selecione o tipo</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="sala">Sala</option>
            <option value="andar">Andar</option>
            <option value="lote">Lote</option>
            <option value="loja">Loja</option>
            <option value="galpao">Galpão</option>
          </Select>
          <Input type="search" placeholder="Digite uma cidade, bairro ou código do imóvel" search onChange={(event) => filterImoveis(event)} value={searchTerm} />
          <Button homeSearch type="submit">Buscar</Button>
        </SearchBar>
      </Form>
      {searchTerm && (
        imoveisFiltered.map((imovel) => (
          <Input
            suggestion
            type="button"
            value={Number(searchTerm) ? `COD. ${imovel.cod_imovel} - ${imovel.tipo_imovel} para ${imovel.tipo_negocio} em ${imovel.bairro} - ${imovel.cidade}/${imovel.estado}` : `${imovel.bairro} - ${imovel.cidade}/${imovel.estado}`}
            key={imovel.cod_imovel}
            onClick={(event) => handleSelectSearchImovel(event, { bairro: imovel.bairro, cidade: imovel.cidade, cod_imovel: imovel.cod_imovel })}
          />
        ))
      )}
    </Container>
  );
}
