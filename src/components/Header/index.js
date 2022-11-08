import logo from '../../assets/images/cdt-imobiliaria-logo.svg';
import { Container, Logo, Menu } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo src={logo} alt="CDT Imobiliária em Contagem/MG" />
      <Menu>
        <a href="#/">Entrar</a>
      </Menu>
    </Container>
  );
}
