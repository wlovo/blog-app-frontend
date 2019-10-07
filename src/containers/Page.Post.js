import React, { Component, Suspense } from 'react';
import get from 'lodash/get';
import axios from '../utils/axios-default';
import PagePost from '../components/Page.Post';

class PagePostContainer extends Component {
  async componentDidMount() {
    await this.getPosts();
  }

  /**
   * Request all posts.
   */
  getPosts = async () => {
    const { data } = await axios.get('/posts');
    this.setState({ posts: data });
  };

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PagePost posts={get(this.state, 'posts')} />
        </Suspense>
      </>
    );
  }
}

export default PagePostContainer;
