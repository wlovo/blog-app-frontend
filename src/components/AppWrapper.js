import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';

const MainContent = React.lazy(() => import('./MainContent'));

const AppWrapper = () => (
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

export default AppWrapper;
