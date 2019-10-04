/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../utils/axios-default';
import PageEditPost from '../components/Page.EditPost';

class PageNewPost extends Component {
  createPost = async (values) => {
    const { history } = this.props;
    await axios.post('/posts', { post: values });
    // history.push(`/view-post/${data.post.id}`);
    history.push('/posts');
  };

  render() {
    return (
      <PageEditPost onSubmit={this.createPost} />
    );
  }
}

export default withRouter(PageNewPost);
