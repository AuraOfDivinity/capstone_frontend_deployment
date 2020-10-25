import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	getUserDetails,
	getAdminDetails,
	adminUpdate,
} from '../state/actions/authAction';
import { connect } from 'react-redux';
import NotificationAlert from 'react-notification-alert';

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	FormGroup,
	Form,
	Input,
	Row,
	Col,
} from 'reactstrap';

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: '',
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			detail: {},
			notificationId: 0,
		};
	}

	notificationAlert = React.createRef();

	componentDidMount() {
		const {
			companyName,
			email,
			firstName,
			lastName,
			password,
		} = this.props.auth.user;
		this.setState({
			companyName: companyName,
			email: email,
			firstName: firstName,
			lastName: lastName,
			password: password,
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps in register ', nextProps);

		if (nextProps.auth?.user) {
			const {
				companyName,
				email,
				firstName,
				lastName,
				password,
			} = nextProps.auth.user;
			this.setState({
				companyName: companyName,
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			});
		}

		if (nextProps.notifications !== this.props.notifications) {
			const notificationObject = nextProps.notifications;
			if (this.state.notificationId !== notificationObject.notificationId) {
				let options = {};
				if (notificationObject.notificationType === 'success') {
					options = {
						place: 'br',
						message: (
							<div>
								<div>{notificationObject.notificationMessage}</div>
							</div>
						),
						type: 'success',
						icon: 'nc-icon nc-bell-55',
						autoDismiss: 7,
					};
					this.notificationAlert.current.notificationAlert(options);
				} else if (notificationObject.notificationType === 'failure') {
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

				let newNotificationId = this.state.notificationId++;
				this.setState({
					notificationId: newNotificationId,
				});
			}
		}
	}

	handleUpdate = () => {
		let userObj = this.props.auth.user;

		userObj.firstName = this.state.firstName;
		userObj.lastName = this.state.lastName;
		userObj.email = this.state.email;
		userObj.password = this.state.password;

		this.props.adminUpdate(localStorage.getItem('userId'), userObj);
	};

	onChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<>
				<div className="content">
					<Row>
						<Col md="4">
							<Card className="card-user">
								<div className="image">
									<img
										alt="..."
										src={require('assets/img/damir-bosnjak.jpg')}
									/>
								</div>
								<CardBody>
									<div className="author">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="avatar border-gray"
												src={require('assets/img/icon.png')}
											/>
											<h5 className="title">
												Hello {this.state.firstName}_{this.state.lastName}
											</h5>
										</a>
									</div>

									<br></br>

									<hr />
									<br></br>
									<br></br>
									<br></br>
									{/* <div className="button-container">
										<Row>
											<Col>
												<Button
													className="btn-round"
													color="primary"
													type="submit"
												>
													Update Profile Picture
												</Button>
											</Col>
										</Row>
									</div> */}
									<hr />
									<br></br>
								</CardBody>
							</Card>
						</Col>

						<Col md="8">
							<Card className="card-user">
								<CardHeader>
									<CardTitle tag="h5">Edit Profile</CardTitle>
								</CardHeader>
								<CardBody>
									<Form>
										<Row>
											<Col className="pr-1" md="6">
												<FormGroup>
													<label>Company/Institute</label>
													<Input
														value={this.state.companyName}
														disabled
														name="Company"
														placeholder="Company"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col className="pl-1" md="6">
												<FormGroup>
													<label>Username</label>
													<Input
														value={this.state.email}
														disabled
														name="Username"
														placeholder="Username"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col className="pr-1" md="6">
												<FormGroup>
													<label htmlFor="exampleInputEmail1">Email</label>
													<Input
														value={this.state.email}
														placeholder="Email"
														type="email"
														name="email"
														onChange={this.onChange}
													/>
												</FormGroup>
											</Col>
											<Col className="pl-1" md="6">
												<FormGroup>
													<label>Password</label>
													<Input
														//value=""
														// value=""{this.state.password}""
														placeholder="Password"
														type="password"
														//type="text"
														name="password"
														onChange={this.onChange}
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col className="pr-1" md="6">
												<FormGroup>
													<label>First Name</label>
													<Input
														value={this.state.firstName}
														placeholder="First Name"
														name="firstName"
														type="text"
														onChange={this.onChange}
													/>
												</FormGroup>
											</Col>
											<Col className="pl-1" md="6">
												<FormGroup>
													<label>Last Name</label>
													<Input
														value={this.state.lastName}
														placeholder="Last Name"
														name="lastName"
														type="text"
														onChange={this.onChange}
													/>
												</FormGroup>
											</Col>
										</Row>

										{/* <Row>
											<Col md="12">
												<FormGroup>
													<label>About Me</label>
													<Input type="textarea" />
												</FormGroup>
											</Col>
										</Row> */}
										<Row>
											<div className="update ml-auto mr-auto">
												<Button
													className="btn-round"
													color="primary"
													onClick={this.handleUpdate}
												>
													Update Profile
												</Button>
											</div>
										</Row>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
				<NotificationAlert ref={this.notificationAlert} />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	admin: state.admin,
	error: state.error,
	notifications: state.notifications,
});

export default connect(mapStateToProps, {
	getUserDetails,
	getAdminDetails,
	adminUpdate,
})(withRouter(UserProfile));
