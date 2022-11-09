import logo from '../../../../assets/images/cdt-imobiliaria-logo.svg';
import { Header, Logo, Menu } from './styles';

export default function HomeHeader() {
  return (
    <Header>
      <Logo src={logo} alt="CDT Imobiliária em Contagem/MG" />
      <Menu>
        <a href="#/">Entrar</a>
      </Menu>
    </Header>
  );
}
