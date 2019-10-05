import React, { Component, Suspense } from 'react';
import get from 'lodash/get';
import axios from '../utils/axios-default';
import ListPosts from '../components/List.Posts';

class RecentPostsContainer extends Component {
  async componentDidMount() {
    await this.getPosts();
  }

  getPosts = async () => {
    const { data } = await axios.get('/posts?limit=5');
    this.setState({ posts: data });
  };

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <ListPosts posts={get(this.state, 'posts')} />
        </Suspense>
      </>
    );
  }
}

export default RecentPostsContainer;
