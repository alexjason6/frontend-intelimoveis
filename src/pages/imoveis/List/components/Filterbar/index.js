import PropTypes from 'prop-types';

import { Container, Title } from './styles';

export default function FilterBar({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

FilterBar.propTypes = {
  title: PropTypes.string.isRequired,
};
