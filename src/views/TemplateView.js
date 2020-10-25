import React from 'react';
import {
	Modal,
	Card,
	CardBody,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Row,
	Button,
} from 'reactstrap';
import '../assets/css/styles.css';

import GoogleDocsViewer from 'react-google-docs-viewer';

export class TemplateView extends React.Component {
	render() {
		var str = this.props.selectedFile;
		//var Entities = require('html-entities').XmlEntities;
		//var entities = new Entities();
		var url = str;

		return (
			<Modal
				isOpen={this.props.show}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<ModalHeader>View Template</ModalHeader>
				<ModalBody>
					<div className="content">
						<Row>
							<Card>
								<CardBody>
									<GoogleDocsViewer
										width="730px"
										height="600px"
										fileUrl= {url}
									/>
								</CardBody>
							</Card>
						</Row>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button
						className="btn-round"
						color="secondary"
						onClick={this.props.onHide}
					>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}
