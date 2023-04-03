import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);

  const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataErro]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataErro({
      ...initialFrmError,
      subject: !isSubjectValid,
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            frmDt={frmData}
            frmDataErro={frmDataErro}
          />
        </Col>
      </Row>
    </Container>
  );
};
