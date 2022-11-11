import PropTypes from 'prop-types';

import {
  Container, Title, Description,
} from './styles';

export default function PageHeader({ children, title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </Container>
  );
}

PageHeader.defaultProps = {
  children: PropTypes.node,
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};
