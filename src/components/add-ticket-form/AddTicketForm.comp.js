import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./addticket.style.css";
import PropTypes from "prop-types";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmDt,
  frmDataErro,
}) => {
  console.log(frmDt);
  return (
    <div className="jumbotron mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
              // minLength="3"
              // maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
            />
            <Form.Text className="text-danger">
              {frmDataErro.subject && "subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Password
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              placeholder="password"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Issue Found</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmDt.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataErro: PropTypes.object.isRequired,
};
