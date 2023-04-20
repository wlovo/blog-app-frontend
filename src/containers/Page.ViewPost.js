import React, { Component, Suspense } from "react";
import get from "lodash/get";
import { confirmAlert } from "react-confirm-alert";
import PropTypes from "prop-types";
import axios from "../utils/axios-default";
import PageViewPost from "../components/Page.ViewPost";
import "react-confirm-alert/src/react-confirm-alert.css";

class PageViewPostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  async componentDidMount() {
    await this.getPost();
  }

  /**
   * Displays a prompt to confirm the deletion of the post.
   */
  promptDelete = () => {
    confirmAlert({
      title: "Delete Post",
      message: "Are you sure you want to delete this post?",
      closeOnEscape: true,
      closeOnClickOutside: true,
      buttons: [
        {
          label: "Delete",
          onClick: this.deletePost,
        },
        {
          label: "Cancel",
          onClick: () => false,
        },
      ],
    });
  };

  /**
   * Deletes the current post.
   */
  deletePost = async () => {
    const { history } = this.props;
    const { match } = this.props;
    const postId = get(match, "params.id");
    await axios.delete(`/posts/${postId}`);
    history.push("/");
  };

  /**
   * Requests the post.
   */
  getPost = async () => {
    const { match } = this.props;
    const postId = get(match, "params.id");
    const { data } = await axios.get(`/posts/${postId}`);
    this.setState({ post: data });
  };

  render() {
    const { post } = this.state;
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <PageViewPost post={post} deletePost={this.promptDelete} />
        </Suspense>
      </>
    );
  }
}

PageViewPostContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
};

PageViewPostContainer.defaultProps = {};

export default PageViewPostContainer;
