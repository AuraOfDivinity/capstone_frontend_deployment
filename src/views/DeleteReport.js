import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { deleteReport } from "../state/actions/reportAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class DeleteReport extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleDelete = () => {
    this.props.deleteReport(this.props.selectedReport);
    this.props.onHide();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>Delete Report</ModalHeader>
        <ModalBody>
          <div className="container">
            Are you sure you want to delete this report ?
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-round"
            color="danger"
            onClick={this.handleDelete}
          >
            Delete
          </Button>{" "}
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

export default connect(null, { deleteReport })(withRouter(DeleteReport));
