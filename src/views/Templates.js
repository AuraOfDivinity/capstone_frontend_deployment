import React from 'react';
import {
	Card,
	CardHeader,
	CardImg,
	CardBody,
	CardTitle,
	Row,
	Col,
	Button,
	ButtonToolbar,
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TemplateView } from './TemplateView';
import AddTemplate from './AddTemplate';
import UpdateTemplate from './UpdateTemplate';
import DeleteTemplate from './DeleteTemplate';
import { getTemplates } from '../state/actions/templateAction';
import NotificationAlert from 'react-notification-alert';

class Templates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			AddTemplateShow: false,
			TemplateViewShow: false,
			UpdateTemplateShow: false,
			DeleteTemplateShow: false,
			temp: [],
			selectedTemplate: null,
			selectedFile: '',
		};
	}

	notificationAlert = React.createRef();
	intervalID;

	componentDidMount() {
		this.props.getTemplates();
	}

	componentWillReceiveProps(nextProps) {

		if (nextProps.templates) {
			this.setState(
				{
					temp: nextProps.templates.templates,
				}
			);
		}

		if(nextProps.notifications !== this.props.notifications){
			const notificationObject = nextProps.notifications
			if(this.state.notificationId !==notificationObject.notificationId){
				let options = {};
				if(notificationObject.notificationType === 'success'){
					options = {
						place: 'br',
						message: (
							<div>
								<div>
									{notificationObject.notificationMessage}
								</div>
							</div>
						),
						type: 'success',
						icon: 'nc-icon nc-bell-55',
						autoDismiss: 7,
					};
					this.notificationAlert.current.notificationAlert(options);
				}
				else if(notificationObject.notificationType === 'failure'){
					options = {
						place: 'br',
						message: (
							<div>
								<div>{notificationObject.notificationMessage}</div>
							</div>
						),
						type: 'danger',
						icon: 'nc-icon nc-bell-55',
						autoDismiss: 7,
					};
					this.notificationAlert.current.notificationAlert(options);
				}
			}
		}
	}

	render() {
		let AddTemplateClose = () => this.setState({ AddTemplateShow: false });
		let TemplateViewClose = () => this.setState({ TemplateViewShow: false });
		let UpdateTemplateClose = () =>
			this.setState({ UpdateTemplateShow: false });
		let DeleteTemplateClose = () =>
			this.setState({ DeleteTemplateShow: false });
		return (
			<>
				<div className="content">
					<Row>
						<Col md="12">
							<br></br>
							<Card>
								<CardHeader>
									<div className="ml-auto mr-auto mb-6">
										<ButtonToolbar>
											<Button
												className="btn-round btn-md"
												color="primary"
												type="submit"
												size="md"
												onClick={() => this.setState({ AddTemplateShow: true })}
											>
												Upload Template
											</Button>
										</ButtonToolbar>
									</div>
									<div className="ml-auto mr-auto mb-1 mt-3">
										<CardTitle tag="h5">Current Templates</CardTitle>
										<hr />
									</div>
								</CardHeader>
								<CardBody>
									<Row>
										{this.state.temp?.map((templates, index) => {
											return (
												<Col lg="3" md="6" sm="6">
													<Card key={index} style={{ width: '12rem' }}>
														{(() => {
															switch (templates.fileType) {
																case 'pdf':
																	return (
																		<CardImg
																			top
																			src={require('assets/img/pdf.png')}
																		/>
																	);
																case 'docx':
																case 'doc':
																	return (
																		<CardImg
																			top
																			src={require('assets/img/word.png')}
																		/>
																	);
																case 'pptx':
																case 'ppt':
																	return (
																		<CardImg
																			top
																			src={require('assets/img/ppoint.png')}
																		/>
																	);
																default:
																	return null;
															}
														})()}

														<CardBody>
															<CardTitle>{templates.title}</CardTitle>
															<div className="button-container">
																<Row>
																	<Col className="ml-auto mr-auto">
																		<ButtonToolbar>
																			<Button
																				className="btn-round btn-icon"
																				size="md"
																				color="info"
																				onClick={() =>
																					this.setState({
																						TemplateViewShow: true,
																						selectedFile: templates.fileLocation,
																					})
																				}
																			>
																				<i className="fa fa-ellipsis-v fa-lg" />
																			</Button>
																		</ButtonToolbar>
																	</Col>
																	<Col className="ml-auto mr-auto">
																		<ButtonToolbar>
																			<Button
																				className="btn-round btn-icon"
																				size="md"
																				color="success"
																				onClick={() =>
																					this.setState(
																						{
																							selectedTemplateUpdate:
																								templates._id,
																						},
																						() => {
																							this.setState({
																								UpdateTemplateShow: true,
																							});
																						}
																					)
																				}
																			>
																				<i className="fa fa-edit" />
																			</Button>
																		</ButtonToolbar>
																	</Col>
																	<Col className="ml-auto mr-auto">
																		<ButtonToolbar>
																			<Button
																				className="btn-round btn-icon"
																				size="md"
																				color="danger"
																				onClick={() => {
																					this.setState({
																						DeleteTemplateShow: true,
																						selectedTemplate: templates._id,
																					});
																				}}
																			>
																				<i className="fa fa-times fa-lg" />
																			</Button>
																		</ButtonToolbar>
																	</Col>
																</Row>
															</div>
														</CardBody>
													</Card>
												</Col>
											);
										})}
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<AddTemplate
						show={this.state.AddTemplateShow}
						onHide={AddTemplateClose}
					/>
					<TemplateView
						show={this.state.TemplateViewShow}
						selectedFile={this.state.selectedFile}
						onHide={TemplateViewClose}
					/>
					<UpdateTemplate
						show={this.state.UpdateTemplateShow}
						selectedTemplateUpdate={this.state.selectedTemplateUpdate}
						onHide={UpdateTemplateClose}
					/>
					<DeleteTemplate
						show={this.state.DeleteTemplateShow}
						selectedTemplate={this.state.selectedTemplate}
						onHide={DeleteTemplateClose}
					/>
				</div>
				<NotificationAlert ref={this.notificationAlert} />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	templates: state.templates,
	error: state.error,
	notifications: state.notifications
});

export default connect(mapStateToProps, { getTemplates })(
	withRouter(Templates)
);
