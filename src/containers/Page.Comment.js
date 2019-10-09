import React, { Component, Suspense } from 'react';
import axios from '../utils/axios-default';
import PageComment from '../components/Page.Comment';

class PageCommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  async componentDidMount() {
    await this.getComments();
  }

  /**
   * Request all comments.
   */
  getComments = async () => {
    const { data } = await axios.get('/comments');
    this.setState({ comments: data });
  };

  render() {
    const { comments } = this.state;
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PageComment comments={comments} />
        </Suspense>
      </>
    );
  }
}

export default PageCommentContainer;
