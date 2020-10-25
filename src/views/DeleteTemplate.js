import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {deleteTemplate } from '../state/actions/templateAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DeleteTemplate extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>Delete Template</ModalHeader>
                <ModalBody>
                    <div className="container">
                        Are you sure you want to delete this template ?
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="danger"  onClick={()=>{this.props.deleteTemplate(this.props.selectedTemplate)
                        this.props.onHide()
                    }} >Delete</Button>
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
      }
}

const mapStateToProps = (state) => ({
	templates: state.templates,
	error: state.error,
});

export default connect(mapStateToProps, { deleteTemplate })(
	withRouter(DeleteTemplate)
);