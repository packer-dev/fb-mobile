import * as React from 'react';
import Container from '../Container';
import { object } from 'prop-types';

const Watchs = ({ route }) => {
  return (
    <Container scrollView route={route}></Container>
  );
};

Watchs.propTypes = {
  route: object
}

export default Watchs;
