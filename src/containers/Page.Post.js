import React, { Component, Suspense } from "react";
import axios from "../utils/axios-default";
import PagePost from "../components/Page.Post";

class PagePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    await this.getPosts();
  }

  /**
   * Request all posts.
   */
  getPosts = async () => {
    const { data } = await axios.get("/posts");
    this.setState({ posts: data });
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PagePost posts={posts} />
        </Suspense>
      </>
    );
  }
}

PagePostContainer.propTypes = {};

PagePostContainer.defaultProps = {};

export default PagePostContainer;
