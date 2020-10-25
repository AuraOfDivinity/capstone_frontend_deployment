import React from "react";
import { registerUser, confirmOtp } from "../state/actions/authAction";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import { getcompanyList } from "../state/actions/organizationAction";
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

class UserRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      companySelect: "",
      email: "",
      org: [],
      password: "",
      otp: "",
      formState: 1,
    };
  }
  notificationAlert = React.createRef();

  componentDidMount() {
    this.props.getcompanyList();
  }

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

    //console.log('nextProps in documents ', nextProps);

    if (nextProps.organization) {
      this.setState({
        org: nextProps.organization,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  handleRegisterUser = () => {
    const { firstName, lastName, companySelect, email, password } = this.state;

    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      companyName: companySelect,
      email: email,
      password: password,
    };
    this.setState({
      formState: 2,
    });

    this.props.registerUser(userInfo);
  };

  handleConfirm = () => {
    const { email, otp } = this.state;

    const otpInfo = {
      email: email,
      otp: otp,
    };

    this.props.confirmOtp(otpInfo);
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
											Users Sign Up here...
										</CardTitle>
									</CardHeader>
									<CardBody>
										<form onSubmit={this.onSubmit}>
											<FormGroup>
												<Label for="exampleFname">First Name</Label>
												<Input
													name="firstName"
													id="exampleFname"
													placeholder="Enter first Name"
													onChange={this.onChange}
												/>
											</FormGroup>
											<FormGroup>
												<Label for="exampleLname">Last Name</Label>
												<Input
													name="lastName"
													id="exampleLname"
													placeholder="Enter last Name"
													onChange={this.onChange}
												/>
											</FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect1">Select Organization</Label>
                        <Input
                          type="select"
                          name="companySelect"
                          id="exampleSelect1"
                          onChange={this.onChange}
                        >
                          <option>Select Organization here</option>
                          {this.state.org?.organization?.map((org, index) => {
                            return (
                              <option key={index}>{org.instituteName}</option>
                            );
                          })}
                        </Input>
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
                      <FormGroup check>
                        <FormText color="muted">
                          Already have an account?{" "}
                          <Link to={{ pathname: "/app/login" }}>
                            Login here!
                          </Link>
                        </FormText>
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
                        <FormText color="muted">
                          Continue to
                          <Link to={{ pathname: "/app/login" }}>
                            Login Page
                          </Link>
                        </FormText>
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
  organization: state.organization,
});

export default connect(mapStateToProps, {
  registerUser,
  confirmOtp,
  getcompanyList,
})(withRouter(UserRegister));
