import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../utils/axios-default';
import AddComment from '../components/Part.AddComment';

class AddCommentContainer extends Component {
  /**
   * Submit a comment for the current post.
   */
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

AddCommentContainer.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  postId: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
};

AddCommentContainer.defaultProps = {
  postId: 0,
};

export default withRouter(AddCommentContainer);
