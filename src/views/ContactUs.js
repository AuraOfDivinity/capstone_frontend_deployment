import React, { Component } from "react";
import axios from "axios";
import Ico1 from "../assets/img/icons/round_call_icon.png";
import Ico2 from "../assets/img/icons/round_email_icon.png";
import Ico3 from "../assets/img/icons/round_location_icon.png";
import NotificationAlert from "react-notification-alert";
export class ContactUs extends Component {
  notificationAlert = React.createRef();

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      message: "",
      emailError: "",
      nameError: "",
      messageError: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  validateEmail = () => {
		var emailError: "";
		var nameError: "";
		var messageError: "";
    var emailPattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

		if (!this.state.name) {
			nameError = "name cannot be blank";
		}
  
		if (!this.state.message) {
			messageError = "message box cannot be blank";
		}
    
		if (!this.state.email) {
			emailError = "please enter an email";
		}
     
		if (!emailPattern.test(this.state.email)) {
			emailError = "Please enter a valid email";
		}

		if (emailError || nameError || messageError) {
			this.setState({ emailError, nameError, messageError });
			return false;
		}

		return true;
  };

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validateEmail();
    const { name, email, message } = this.state;

    if (!isValid) {
      console.log(this.state);
      let options = {};
      options = {
        place: "br",
        message: (
          <div>
            <div>Your message was not sent</div>
          </div>
        ),
        type: "danger",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7,
      };
      this.notificationAlert.current.notificationAlert(options);
    } else {
      this.setState = {
        name: name,
        email: email,
        message: message,
      };
      axios({
        method: "POST",
        url: "http://localhost:3000/api/contact",
        data: {
          name: name,
          email: email,
          message: message,
        },
      }).then((response) => {
        if (response.data.message === "fail") {
          let options = {};
          options = {
            place: "br",
            message: (
              <div>
                <div>
                  Message failed to send Please pardon the inconvenience and
                  retry later as this could be a server issue
                </div>
              </div>
            ),
            type: "danger",
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7,
          };
          this.notificationAlert.current.notificationAlert(options);
          this.resetContactForm();
        } else {
          let options = {};
          options = {
            place: "br",
            message: (
              <div>
                <div>
                  Your message has been sent. We will ensure that your message
                  will be looked into as soon as possible.
                </div>
              </div>
            ),
            type: "success",
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7,
          };
          this.notificationAlert.current.notificationAlert(options);
        }
      });
    }
  }

  resetContactForm() {
    document.getElementById("contact_form").reset();
  }

  render() {
    return (
      <div className="container">
        <NotificationAlert ref={this.notificationAlert} />
        <div className="pricing-header mx-auto text-center">
          <h2 className="featurette-heading">DROP US A MESSAGE</h2>
          <p className="lead">
            We are always ready to help with any questions regarding the site
          </p>
        </div>

        <div className="container-form">
          <form
            id="contact_form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="row">
              <div className="col-md-6 my-5">
                <div className="container-form1">
                  <div className="form-group">
                    <div className="card" style={{ width: "31rem" }}>
                      <ul className="list-group list-group-flush text-muted">
                        <li className="list-group-item">
                          <img
                            src={Ico1}
                            style={{ margin: "5px" }}
                            alt="Visa"
                          />
                          (+94)034 123 4567
                        </li>
                        <li className="list-group-item">
                          <img
                            src={Ico2}
                            style={{ margin: "5px" }}
                            alt="mastercard"
                          />
                          docvvalidator@gmail.com
                        </li>
                        <li className="list-group-item">
                          <img
                            src={Ico3}
                            style={{ margin: "5px" }}
                            alt="paypal"
                          />
                          SLIIT Malabe Campus, New Kandy Rd, Malabe 10115
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 my-2">
                <div className="container-form1">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="txtName"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      placeholder="Your Name "
                    />
                    {this.state.nameError ? (
                      <div style={{ color: "red", fontSize: 12 }}>
                        {this.state.nameError}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="txtEmail"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      placeholder="Email "
                    />
                    {this.state.emailError ? (
                      <div style={{ color: "red", fontSize: 12 }}>
                        {this.state.emailError}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <textarea
                      name="txtMsg"
                      id="message"
                      className="form-control"
                      value={this.state.message}
                      onChange={this.onChangeMessage}
                      placeholder="Message"
                      style={{ width: "27rem", height: "180px" }}
                    ></textarea>
                    {this.state.messageError ? (
                      <div style={{ color: "red", fontSize: 12 }}>
                        {this.state.messageError}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      id="btn_Submit"
                      name="btnSubmit"
                      className="btn btn-success"
                      value="Send Message"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
