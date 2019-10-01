import React, { Suspense, Component } from 'react';
import { Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Header';
// import MainContent from './MainContent'
import Footer from './Footer';
const MainContent = React.lazy(() => import('./MainContent'));

class AppWrapper extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <MainContent />
          </Switch>
        </Suspense>
        <Footer />
      </Container>
    );
  }
}

export default AppWrapper;