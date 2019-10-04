/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../utils/axios-default';
import PageEditPost from '../components/Page.EditPost';

class PageUpdatePost extends Component {
  updatePost = async (values) => {
    const { history } = this.props;
    await axios.put('/view-post/:id', { post: values });
    // history.push(`/view-post/${data.post.id}`);
    history.push('/view-post/:id');
  };

  render() {
    return (
      <PageEditPost onSubmit={this.updatePost} />
    );
  }
}

export default withRouter(PageUpdatePost);
