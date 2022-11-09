import { Link } from 'react-router-dom';

import logo from '../../assets/images/cdt-imobiliaria-logo.svg';

import {
  Header, Container, Logo, Menu,
} from './styles';

export default function GeralHeader() {
  return (
    <Header>
      <Container>
        <Link to="/"><Logo src={logo} alt="CDT Imobiliária em Contagem/MG" /></Link>
        <Menu>
          <a href="#/">Contato</a>
          <a href="#/">Anunciar meu imóvel</a>
          <a href="#/">Entrar</a>
        </Menu>
      </Container>

    </Header>
  );
}
