/* eslint-disable react/prop-types */
import { withFormik } from 'formik';
import get from 'lodash/get';
import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string()
    .required('Cannot be empty')
    .min(2, 'Must be longer than 2 characters')
    .default(''),
  body: yup.string()
    .required('Cannot be empty')
    .min(2, 'Must be longer than 2 characters')
    .default(''),
});

const setInitialFormValues = (props) => {
  const title = get(props, 'post.title');
  const body = get(props, 'post.body');
  return { title, body };
};

const useOnSubmit = (values, formikBag) => {
  formikBag.setSubmitting(false);
  formikBag.props.onSubmit(values);
};

const addFormik = withFormik({
  displayName: 'EditPost',
  handleSubmit: useOnSubmit,
  mapPropsToValues: setInitialFormValues,
  mapValuesToPayload: (x) => x,
  validationSchema: schema,
});

const PostForm = ({
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  author = 'Anonymous',
}) => (
  <Container fluid className="p-0">
    <h1>Edit Post</h1>
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="Form.Title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a title for your post"
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
      </Form.Group>
      <Form.Group controlId="Form.Body">
        <Form.Label>Entry</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          name="body"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your thoughts here"
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
      </Form.Group>
      <Form.Group>
        <Button
          variant="outline-info"
          type="submit"
          disabled={isSubmitting}
        >
            Submit
        </Button>
        <Form.Label className="ml-2">
          <em>{`Submitting as ${author}`}</em>
        </Form.Label>
      </Form.Group>
    </Form>
  </Container>
);

const PageEditPost = addFormik(PostForm);

export default PageEditPost;
