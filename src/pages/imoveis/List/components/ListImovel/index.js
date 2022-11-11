import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';
import {
  FaRuler, FaBed, FaBath, FaCar,
} from 'react-icons/fa';

import Carousel from '../../../../../components/Carousel';

import {
  Container,
  Imovel,
  ImovelHeader,
  Title,
  Address,
  Highlights,
  Detail,
  TextDetail,
  Tips,
  Tip,
  Price,
  CodeImovel,
} from './styles';

export default function ListImovel({ imovel }) {
  return (
    <Container>
      <Carousel />
      <Imovel>
        <ImovelHeader>
          <Title>
            {imovel.titulo}
          </Title>
          <FiHeart size={17} color="#0da52e" />
        </ImovelHeader>
        <Address>
          {imovel.rua}
          ,
          {' '}
          {imovel.numero}
          {' '}
          -
          {' '}
          {imovel.bairro}
          ,
          {' '}
          {imovel.cidade}
          /
          {imovel.estado}
        </Address>
        <Highlights>
          <Detail>
            <FaRuler size={25} color="#f0c659" />
            <TextDetail>
              {imovel.metragem}
              {' '}
              m2
            </TextDetail>
          </Detail>
          {imovel.quartos !== '0' && (
          <Detail>
            <FaBed size={25} color="#f0c659" />
            <TextDetail>
              {imovel.quartos}
              {' '}
              {imovel.quartos === '1' ? 'quarto' : 'quartos'}
            </TextDetail>
          </Detail>
          )}
          {imovel.banheiros !== '0' && (
          <Detail>
            <FaBath size={25} color="#f0c659" />
            <TextDetail>
              {' '}
              {imovel.banheiros}
              {' '}
              {imovel.banheiros === '1' ? 'banheiro' : 'banheiros'}
            </TextDetail>
          </Detail>
          )}
          {imovel.banheiros !== '0' && (
          <Detail>
            <FaCar size={25} color="#f0c659" />
            <TextDetail>
              {' '}
              {imovel.vagas}
              {' '}
              {imovel.vagas === '1' ? 'vaga' : 'vagas'}
            </TextDetail>
          </Detail>
          )}
        </Highlights>
        <Tips>
          <Tip>Varanda</Tip>
          <Tip>Jardim</Tip>
          <Tip>Aceita animais</Tip>
          <Tip>Área gourmet</Tip>
          <Tip>Churrasqueira</Tip>
        </Tips>
        <Price>
          <b>
            {imovel.valor}
          </b>
          {imovel.tipo_negocio === 'aluguel' && '/mensal'}
        </Price>
        <Price tax>
          Condomínio: R$200,00/mensal
        </Price>
        <Price tax>
          IPTU: R$2000,00/anual
        </Price>
        <CodeImovel>
          Código do imóvel:
          {' '}
          <b>{imovel.cod_imovel}</b>
        </CodeImovel>
      </Imovel>
    </Container>
  );
}

ListImovel.propTypes = {
  imovel: PropTypes.node.isRequired,
};
