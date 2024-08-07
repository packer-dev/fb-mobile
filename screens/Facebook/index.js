import Header from './Header';
import Content from './Content';
import Container from './Container';

const Facebook = ({ navigation, route }) => {
  return (
    <Container navigation={navigation} route={route}>
      <Header navigation={navigation} />
      <Content navigation={navigation} />
    </Container>
  );
};

export default Facebook;
