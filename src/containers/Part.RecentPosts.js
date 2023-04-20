import React, { Component, Suspense } from "react";
import axios from "../utils/axios-default";
import ListPosts from "../components/List.Posts";

class RecentPostsContainer extends Component {
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
   * Request for the 5 most recent posts in descending order.
   */
  getPosts = async () => {
    const { data } = await axios.get("/posts?limit=5&order=DESC");
    this.setState({ posts: data });
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <ListPosts posts={posts} />
        </Suspense>
      </>
    );
  }
}

export default RecentPostsContainer;
