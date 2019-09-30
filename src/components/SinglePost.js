import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import userPhoto from '../images/user.svg'

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
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
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>List-based media object</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
              sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
              turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
              in faucibus.
            </p>
          </Media.Body>
        </Media>
      </>
    );
  }
}

export default SinglePost;
