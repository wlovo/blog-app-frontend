/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../utils/axios-default';
import AddComment from '../components/Part.AddComment';

class PageViewPostContainer extends Component {
  submitComment = async (values) => {
    const { history } = this.props;
    const { postId } = this.props;
    await axios.post('/comments', { comment: { ...values, postId } });
    history.push(`/view-post/${postId}/refresh`);
    history.goBack();
  };

  render() {
    return (
      <AddComment onSubmit={this.submitComment} />
    );
  }
}

export default withRouter(PageViewPostContainer);
