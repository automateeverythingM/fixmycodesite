import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";

function PreInput({ label, errorMessage, mb, ...rest }, ref) {
  return (
    <Form.Group className={mb}>
      <Form.Label>{label}</Form.Label>
      <Form.Control ref={ref} {...rest} />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default forwardRef(PreInput);
