import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="fw-bold">
          <td>#</td>
          <td>Subjects</td>
          <td>Status</td>
          <td>Opened Date</td>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};


TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
