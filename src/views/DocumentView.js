import React from "react";
import { Modal, Card, CardBody, ModalHeader, ModalBody, ModalFooter, Row, Button } from 'reactstrap';
import "../assets/css/styles.css";

import GoogleDocsViewer from 'react-google-docs-viewer';

export class DocumentView extends React.Component {
    render() {
        var url = this.props.selectedFile;

        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>View Document</ModalHeader>
                <ModalBody>
                    <div className="content">
                        <Row>
                            <Card>
                                <CardBody>
                                    <GoogleDocsViewer
                                        width="720px"
                                        height="600px"
                                        fileUrl= {url}
                                    />
                                </CardBody>
                            </Card>
                        </Row>              
                    </div> 
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Close</Button>
                </ModalFooter>
            </Modal>
        );
      }
};