import { withFormik } from 'formik';
import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const schema = yup.object({
  body: yup.string()
    .required('Cannot be empty')
    .min(2, 'Must be longer than 2 characters')
    .default(''),
});

const useOnSubmit = (values, formikBag) => {
  formikBag.setSubmitting(false);
  formikBag.props.onSubmit(values, formikBag.props.postId);
};

const addFormik = withFormik({
  displayName: 'AddComment',
  handleSubmit: useOnSubmit,
  mapValuesToPayload: (x) => x,
  validationSchema: schema,
});

const CommentForm = ({
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit} className="mb-3">
    <Form.Row controlid="Form.Comment">
      <Col xs={12} md>
        <Form.Control
          type="text"
          name="body"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your comment"
          className={
            errors.body && touched.body ? (
              'text-input error'
            ) : (
              'text-input'
            )
          }
        />
        {errors.body
        && touched.body && (
        <div className="input-feedback">{errors.body}</div>
        )}
      </Col>
      <Col xs={12} md="auto" className="my-1 my-md-auto">
        <Button
          variant="outline-info"
          type="submit"
          disabled={isSubmitting}
        >
          Add Comment
        </Button>
      </Col>
    </Form.Row>
  </Form>
);

CommentForm.propTypes = {
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.shape({
    body: PropTypes.string,
  }).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

CommentForm.defaultProps = {};

const PartAddComment = addFormik(CommentForm);

export default PartAddComment;
