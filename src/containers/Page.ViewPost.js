/* eslint-disable react/prop-types */
import React, { Component, Suspense } from 'react';
import get from 'lodash/get';
import axios from '../utils/axios-default';
import PageViewPost from '../components/Page.ViewPost';

class PageViewPostContainer extends Component {
  async componentDidMount() {
    await this.getPost();
  }

  getPost = async () => {
    const postId = get(this.props, 'match.params.id');
    const { data } = await axios.get(`/posts/${postId}`);
    this.setState({ post: data });
  };

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PageViewPost post={get(this.state, 'post')} />
        </Suspense>
      </>
    );
  }
}

export default PageViewPostContainer;
