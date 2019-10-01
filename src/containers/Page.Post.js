import React, { Component, Suspense } from 'react';
import axios from '../utils/axios-default';
import PagePost from '../components/Page.Post';

class PagePostContainer extends Component {
  getPosts = async () => {
    const {data} = await axios.get('/posts')
    this.setState({ posts: data })
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    await this.getPosts();
  }

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PagePost posts={this.state.posts} />
        </Suspense>
      </>
    );
  }
}

export default PagePostContainer;