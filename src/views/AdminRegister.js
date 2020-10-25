import React from "react";
import { registerAdmin, confirmOtp } from "../state/actions/authAction";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import {
  Card,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

class AdminRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      institution: "",
      email: "",
      password: "",
      otp: "",
      formState: 1,
    };
  }
  notificationAlert = React.createRef();

  componentWillReceiveProps(nextProps) {
    console.log("nextProps in register ", nextProps);

    if (nextProps.user?.userValidated === 1) {
      let options = {};
      options = {
        place: "br",
        message: (
          <div>
            <div>
              Your account has been successfully created! Please login through
              the login page to continue!
            </div>
          </div>
        ),
        type: "success",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7,
      };
      this.notificationAlert.current.notificationAlert(options);
    } else if (nextProps.error?.msg) {
      let options = {};
      options = {
        place: "br",
        message: (
          <div>
            <div>Invalid OTP. Please try again!</div>
          </div>
        ),
        type: "danger",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7,
      };
      this.notificationAlert.current.notificationAlert(options);
    }
  }

  onSubmit = (e) => {
		console.log("on submit ", this.props.children.valueOf.name);
		this.props.history.push("/app/plans");
    e.preventDefault();
  };

  handleRegisterUser = () => {
    const { firstName, lastName, institution, email, password } = this.state;

    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      institution: institution,
      email: email,
      password: password,
    };
    this.setState({
      formState: 2,
    });

    this.props.registerAdmin(userInfo);
  };

  handleConfirm = () => {
    const { email, otp } = this.state;

    const otpInfo = {
      email: email,
      otp: otp,
    };
    this.props.confirmOtp(otpInfo);
    console.log("This state in admin reg", this.state);
    console.log("This history in Admin reg", this.props.history);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

	render() {
		const { formState, email } = this.state;
		return (
			<>
				<div
					className="content"
					style={{
						background: '#F4F3EF',
					}}
				>
					<NotificationAlert ref={this.notificationAlert} />
					<Row>
						<Col
							lg="4"
							md="6"
							sm="12"
							style={{
								margin: '1% auto',
							}}
						>
							{formState === 1 ? (
								<Card>
									<CardHeader>
										<CardTitle className="text-center" tag="h3">
											Admins Sign Up here...
										</CardTitle>
									</CardHeader>
									<CardBody>
										<form onSubmit={this.onSubmit}>
											<FormGroup>
												<Label for="exampleFName">First Name</Label>
												<Input
													name="firstName"
													id="exampleFName"
													placeholder="Enter first name"
													onChange={this.onChange}
												/>
											</FormGroup>
											<FormGroup>
												<Label for="exampleLName">Last Name</Label>
												<Input
													name="lastName"
													id="exampleLName"
													placeholder="Enter last name"
													onChange={this.onChange}
												/>
											</FormGroup>
											<FormGroup>
												<Label for="exampleOrg">Organization Name</Label>
												<Input
													name="institution"
													id="exampleOrg"
													placeholder="Enter organization Name"
													onChange={this.onChange}
												/>
											</FormGroup>
											<FormGroup>
												<Label for="exampleEmail">Email address</Label>
												<Input
													type="email"
													name="email"
													id="exampleEmail"
													placeholder="Enter email"
													onChange={this.onChange}
												/>
												<FormText color="muted">
													We'll never share your email with anyone else.
												</FormText>
											</FormGroup>
											<FormGroup>
												<Label for="examplePassword">Password</Label>
												<Input
													type="password"
													name="password"
													id="examplePassword"
													placeholder="Enter password"
													onChange={this.onChange}
												/>
											</FormGroup>

                      <br></br>
                      <Button
                        color="primary"
                        type="submit"
                        size="lg"
                        block
                        onClick={() => this.handleRegisterUser()}
                      >
                        Register
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Confirm Account</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <form onSubmit={this.onSubmit}>
                      <FormGroup>
                        <FormText color="muted">
                          We have sent a confirmation email to {`${email}`}.
                          Please re-enter the code here to confirm the account
                        </FormText>
                        <Input
                          name="otp"
                          id="otp"
                          placeholder="Code"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                      <FormGroup check>
                        {/* <FormText color="muted">
                          Continue to
                          <Link to={{ pathname: "/app/login" }}>
                            Login Page
                          </Link>
							</FormText>*/}
                      </FormGroup>
                      <Button
                        color="primary"
                        type="submit"
                        onClick={this.handleConfirm}
                      >
                        Confirm
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              )}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error,
});

export default connect(mapStateToProps, { registerAdmin, confirmOtp })(
  withRouter(AdminRegister)
);
