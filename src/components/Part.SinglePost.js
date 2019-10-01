import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import get from 'lodash/get';
import formatDate from '../utils/format-date';
import userPhoto from '../images/user.svg'

class SinglePost extends Component {
  constructor(props) {
    super(props);
    const post = get(props, 'post', { title: 'Title', body: 'Words'});
    this.state = { post };
  }

  render() {
    return (
      <>
        <Media as="li">
          <img
            width={64}
            height={64}
            className="mr-3"
            src={userPhoto}
            alt="User pic"
          />
          <Media.Body>
            <h5>{this.state.post.title}</h5>
            <h6><em>Written by author on {formatDate(this.state.post.updatedAt)}</em></h6>
            <p>
              {this.state.post.body}
            </p>
          </Media.Body>
        </Media>
      </>
    );
  }
}

export default SinglePost;
