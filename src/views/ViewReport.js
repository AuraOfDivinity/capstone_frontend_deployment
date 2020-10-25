import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Document, Page } from "react-pdf";

export class ViewReport extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>08-07-2020 - SE_Tutorial</ModalHeader>
        <ModalBody>
          <Document file="https://docv-docs.s3.ap-south-1.amazonaws.com/Sample2.pdf">
            <Page pageNumber={1} />
          </Document>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-round"
            color="secondary"
            onClick={this.props.onHide}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
