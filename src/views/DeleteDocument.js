import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { deleteDocument } from '../state/actions/documentAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DeleteDocument extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>Delete Document</ModalHeader>
                <ModalBody>
                    <div className="container">
                        Are you sure you want to delete this document ?
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="danger"  
                        onClick={()=>{
                                        this.props.deleteDocument(this.props.selectedDocument) 
                                        this.props.onHide()
                        }}>
                        Delete
                    </Button>{' '}
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
      }
}

const mapStateToProps = (state) => ({
	documents: state.documents,
	error: state.error,
});

export default connect(mapStateToProps, { deleteDocument })(
	withRouter(DeleteDocument)
);