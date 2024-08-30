import * as React from 'react';
import Container from '../Container';
import { object } from 'prop-types';

const Marketplaces = ({ route }) => {
  return (
    <Container scrollView route={route}></Container>
  );
};

Marketplaces.propTypes = {
  route: object
}

export default Marketplaces;
