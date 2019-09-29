import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import MainContent from './MainContent'
import Footer from './Footer';

class AppWrapper extends Component {
  render() {
    return (
      <Container>
        <Header />
        <MainContent />
        <Footer />
      </Container>
    );
  }
}

export default AppWrapper;