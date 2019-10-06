/* eslint-disable react/prop-types */
import { withFormik } from 'formik';
import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
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
    <Form.Row controlId="Form.Comment">
      <Col xs={12} md>
        <Form.Control
          type="text"
          name="body"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your comment"
          className={
            errors.title && touched.title ? (
              'text-input error'
            ) : (
              'text-input'
            )
          }
        />
        {errors.title
        && touched.title && (
        <div className="input-feedback">{errors.title}</div>
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

const PartAddComment = addFormik(CommentForm);

export default PartAddComment;
