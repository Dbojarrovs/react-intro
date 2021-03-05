import 'semantic-ui-css/semantic.min.css';
import './Layout.css';
import { Container } from 'semantic-ui-react';
import Nav from '../Nav/Nav';

const Layout = (props) => {
  return (
    <Container>
      <Nav />
    </Container>
  )
};

export default Layout;
