import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";

function PreInput({ label, errorMessage, ...rest }, ref) {
  console.log(
    "🚀 ~ file: PreInput.js ~ line 5 ~ PreInput ~ errorMessage",
    errorMessage
  );
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control ref={ref} {...rest} />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default forwardRef(PreInput);
