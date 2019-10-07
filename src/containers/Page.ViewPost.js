/* eslint-disable react/prop-types */
import React, { Component, Suspense } from 'react';
import get from 'lodash/get';
import { confirmAlert } from 'react-confirm-alert';
import axios from '../utils/axios-default';
import PageViewPost from '../components/Page.ViewPost';
import 'react-confirm-alert/src/react-confirm-alert.css';

class PageViewPostContainer extends Component {
  async componentDidMount() {
    await this.getPost();
  }

  /**
   * Displays a prompt to confirm the deletion of the post.
   */
  promptDelete = () => {
    confirmAlert({
      title: 'Delete Post',
      message: 'Are you sure you want to delete this post?',
      closeOnEscape: true,
      closeOnClickOutside: true,
      buttons: [
        {
          label: 'Delete',
          onClick: this.deletePost,
        },
        {
          label: 'Cancel',
          onClick: () => false,
        },
      ],
    });
  }

  /**
   * Deletes the current post.
   */
  deletePost = async () => {
    const { history } = this.props;
    const postId = get(this.props, 'match.params.id');
    await axios.delete(`/posts/${postId}`);
    history.push('/');
  }

  /**
   * Requests the post.
   */
  getPost = async () => {
    const postId = get(this.props, 'match.params.id');
    const { data } = await axios.get(`/posts/${postId}`);
    this.setState({ post: data });
  };

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PageViewPost
            post={get(this.state, 'post')}
            deletePost={this.promptDelete}
          />
        </Suspense>
      </>
    );
  }
}

export default PageViewPostContainer;
