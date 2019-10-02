import React, { Component, Suspense } from 'react';
import get from 'lodash/get';
import axios from '../utils/axios-default';
import PageComment from '../components/Page.Comment';

class PagePostContainer extends Component {
  async componentDidMount() {
    await this.getComments();
  }

  getComments = async () => {
    const { data } = await axios.get('/comments');
    this.setState({ comments: data });
  };

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PageComment comments={get(this.state, 'comments')} />
        </Suspense>
      </>
    );
  }
}

export default PagePostContainer;
