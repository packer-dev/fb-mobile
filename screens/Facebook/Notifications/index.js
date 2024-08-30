import * as React from 'react';
import Container from '../Container';
import { object } from 'prop-types';

const Notifications = ({ route }) => {
  return (
    <Container scrollView route={route}></Container>
  );
};

Notifications.propTypes = {
  route: object
}

export default Notifications;
