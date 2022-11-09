import { useLocation, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Content, Span } from './styles';

export default function BreadCrumbs() {
  const location = useLocation();

  return (
    <Container>
      <Content>
        <Span home><Link to="/#">CDT</Link></Span>
        <FiChevronRight color="#EAAF18" size={15} />
        <Span>
          {location.name}
        </Span>
      </Content>
    </Container>
  );
}
