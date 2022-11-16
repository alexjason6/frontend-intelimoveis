import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch, FiX } from 'react-icons/fi';
import { Button } from '../../../../../components/button';

import { Input } from '../../../../../components/input';
import { Select } from '../../../../../components/select';

import {
  Container, Title, Label, BoxSearch, Localizacao, BoxInfo,
} from './styles';

export default function FilterBar({ title, allImoveis }) {
  const [searchTerm, setSearchTerm] = useState([]);

  function handleSelectSearchImovel(event /* data */) {
    event.preventDefault();

    setSearchTerm(event.target.value);

    /*     setBairro(data.bairro);
    setCidade(data.cidade);
    setCodImovel(data.cod_imovel); */
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Label>Localização</Label>
      <BoxSearch>
        <Input filterBar placeholder="Digite uma cidade, bairro ou código do imóvel" />
        <FiSearch size={15} color="#444444" />
      </BoxSearch>
      {searchTerm && (
        allImoveis.map((imovel) => (
          <Input
            suggestion
            type="button"
            value={Number(searchTerm) ? `COD. ${imovel.cod_imovel} - ${imovel.tipo_imovel} para ${imovel.tipo_negocio} em ${imovel.bairro} - ${imovel.cidade}/${imovel.estado}` : `${imovel.bairro} - ${imovel.cidade}/${imovel.estado}`}
            key={imovel.cod_imovel}
            onClick={(event) => handleSelectSearchImovel(event, { bairro: imovel.bairro, cidade: imovel.cidade, cod_imovel: imovel.cod_imovel })}
          />
        ))
      )}

      <BoxInfo>
        <Localizacao>
          <span>Piatã/BA </span>
          <FiX size={12} color="#ffffff" style={{ background: '#0da52e', marginLeft: 10, borderRadius: 2 }} />
        </Localizacao>
        <Localizacao>
          <span>Salvador/BA </span>
          <FiX size={12} color="#ffffff" style={{ background: '#0da52e', marginLeft: 10, borderRadius: 2 }} />
        </Localizacao>
      </BoxInfo>

      <Label>Tipo do imóvel</Label>
      <BoxSearch>
        <Select filterBar>
          <option value="">Selecione o tipo</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="sala">Sala</option>
          <option value="andar">Andar</option>
          <option value="lote">Lote</option>
          <option value="loja">Loja</option>
          <option value="galpao">Galpão</option>
        </Select>
      </BoxSearch>

      <Label>Quantidade de quartos</Label>
      <BoxInfo>
        <Button filterBar>1+</Button>
        <Button filterBar>2+</Button>
        <Button filterBar>3+</Button>
        <Button filterBar>4+</Button>
        <Button filterBar>5+</Button>
      </BoxInfo>

      <Label>Quantidade de banheiros</Label>
      <BoxInfo>
        <Button filterBar>1+</Button>
        <Button filterBar>2+</Button>
        <Button filterBar>3+</Button>
        <Button filterBar>4+</Button>
        <Button filterBar>5+</Button>
      </BoxInfo>

      <Label>Quantidade de vagas</Label>
      <BoxInfo>
        <Button filterBar>1+</Button>
        <Button filterBar>2+</Button>
        <Button filterBar>3+</Button>
        <Button filterBar>4+</Button>
        <Button filterBar>5+</Button>
      </BoxInfo>

      <Label>Valor</Label>
      <BoxInfo>
        <Input filterBarValor placeholder="Mínimo" />
        <Input filterBarValor placeholder="Máximo" />
      </BoxInfo>
      <Label>Características</Label>
      <BoxInfo checkbox>
        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Piscina</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Playground</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Portaria 24h</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Acessível PMR</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Salão de festas</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Academia</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Área Gourmet</Label>
        </div>

      </BoxInfo>
      <Label>Comodidades</Label>
      <BoxInfo checkbox>
        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Elevador</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Mobiliado</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Armários</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Vaga coberta</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Banheira</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Aquecimento solar</Label>
        </div>

        <div>
          <Input checkbox type="checkbox" />
          <Label checkbox>Ar condicionado</Label>
        </div>
      </BoxInfo>

    </Container>
  );
}

/* FilterBar.defaultProps = {
  allImoveis: PropTypes.arrayOf,
};
 */
FilterBar.propTypes = {
  title: PropTypes.string.isRequired,
  allImoveis: PropTypes.arrayOf(PropTypes.shape({
    bairro: 'Piatã',
    banheiros: '2',
    cidade: 'Salvador',
    cod_imovel: 40,
    comodidades: ['Piscina', 'Cozinha gourmet', 'Garagem', 'Churrasqueira'],
    complemento: 'Casa 47',
    condominio: null,
    cpf_cnpj_proprietario: '07010305692',
    data_alteracao: '2022-10-22T06:00:00.000Z',
    data_cadastro: '2022-10-22T06:00:00.000Z',
    data_vencimento_pagamento: '20',
    descricao: 'Casa com 2 vagas, 3 quartos e ar condicionado.',
    estado: 'BA',
    iptu: null,
    metragem: '200',
    numero: '22',
    numero_registro: '06',
    quartos: '1',
    rua: 'Rua Camuripeba',
    situacao: 'disponível',
    tipo_imovel: 'casa',
    tipo_negocio: 'venda',
    titulo: null,
    vagas: '4',
    valor: 'R$50.000,00',
  })).isRequired,
};
