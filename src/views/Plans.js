import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addSubscription } from "../state/actions/subscriptionAction";
import { getInstituteName } from "../state/actions/authAction";
// import "bootstrap/dist/css/bootstrap.min.css";
export class Plans extends Component {
  // constructor(props) {
  //   super(props);

  //   this.onSubmitFreePlan = this.onSubmitFreePlan.bind(this);
  //   this.onSubmitBasicPlan = this.onSubmitBasicPlan.bind(this);
  //   this.onSubmitStandardPlan = this.onSubmitStandardPlan.bind(this);
  //   const instituteId = this.props.institution;
  //   console.log(instituteId);
  //   const instituteN = this.props.getInstituteName(instituteId);

  //   this.state = {
  //     instituteName: instituteN,
  //     type: "",
  //     endDate: Date.now(),
  //     documentLimit: 0,
  //     templateLimit: 0,
  //     pricing: 0,
  //   };
  // }

  // onChangeInstitute(e) {
  //   this.setState({
  //     instituteName: e.target.value,
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps in plans ", nextProps);
  }

  // onSubmitFreePlan(e) {
  //   e.preventDefault();
  //   var date = new Date();
  //   this.setState({
  //     type: "FREE PLAN",
  //     endDate: date.setDate(date.getDate() + 30),
  //     documentLimit: 200,
  //     templateLimit: 50,
  //     pricing: 0,
  //   });

  //   const {
  //     instituteName,
  //     type,
  //     endDate,
  //     documentLimit,
  //     templateLimit,
  //     pricing,
  //   } = this.state;

  //   const subscriptionInfo = {
  //     instituteName: instituteName,
  //     type: type,
  //     endDate: endDate,
  //     documentLimit: documentLimit,
  //     templateLimit: templateLimit,
  //     pricing: pricing,
  //   };
  //   this.setState({
  //     formState: 2,
  //   });
  //   this.props.addSubscription(subscriptionInfo);
  // }

  // onSubmitBasicPlan(e) {
  //   e.preventDefault();
  //   var date = new Date();
  //   this.setState({
  //     type: "BASIC PLAN",
  //     endDate: date.setDate(date.getDate() + 30),
  //     documentLimit: 500,
  //     templateLimit: 100,
  //     pricing: 10,
  //   });
  //   const {
  //     instituteName,
  //     type,
  //     endDate,
  //     documentLimit,
  //     templateLimit,
  //     pricing,
  //   } = this.state;

  //   const subscriptionInfo = {
  //     instituteName: instituteName,
  //     type: type,
  //     endDate: endDate,
  //     documentLimit: documentLimit,
  //     templateLimit: templateLimit,
  //     pricing: pricing,
  //   };
  //   this.setState({
  //     formState: 2,
  //   });
  //   this.props.addSubscription(subscriptionInfo);
  // }

  // onSubmitStandardPlan(e) {
  //   e.preventDefault();
  //   var date = new Date();

  //   this.setState({
  //     type: "STANDARD PLAN",
  //     endDate: date.setDate(date.getDate() + 30),
  //     documentLimit: 1000,
  //     templateLimit: 200,
  //     pricing: 15,
  //   });
  //   const {
  //     instituteName,
  //     type,
  //     endDate,
  //     documentLimit,
  //     templateLimit,
  //     pricing,
  //   } = this.state;

  //   const subscriptionInfo = {
  //     instituteName: instituteName,
  //     type: type,
  //     endDate: endDate,
  //     documentLimit: documentLimit,
  //     templateLimit: templateLimit,
  //     pricing: pricing,
  //   };

  //   this.props.addSubscription(subscriptionInfo);
  //   this.setState({
  //     formState: 2,
  //   });
  // }

  render() {
    return (
      <>
        <div className="container">
          <div className="container-form3">
            <div className="row">
              <div className="col-6 my-5">
                <div className="form-group">
                  <input
                    type="disabled"
                    name="txtName"
                    placeholder="Institution"
                    //value={this.props.institution}
                    className="form-control"
                    onChange={this.onChangeInstitute}
                  />
                </div>
              </div>

              <div className="col-6 my-5">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="email"
                    //value={this.props.email}
                  />
                </div>
              </div>
            </div>
          </div>

          {/**please change this **/}
          <div className="pricing-header mx-auto text-center">
            <h3 className="display-5">SELECT SUBSCRPTION PLAN</h3>

            <div className="container">
              <div className="card-deck mb-3 text-center">
                <form className="card mt-1 mb-3 box-shadow bg-dark text-white d-flex justify-content-center">
                  <div className="card-body1">
                    <div className="card-header2 bg-danger ">
                      <h2 className="my-2 card-title font-weight-bold">FREE</h2>
                    </div>

                    <button
                      type="button"
                      className="my-5 btn btn-lg btn-outline-danger"
                      //onClick={this.onSubmitFreePlan}
                    >
                      SELECT
                    </button>
                  </div>
                </form>

                <form className="card mt-1 mb-3 box-shadow bg-dark text-white d-flex justify-content-center">
                  <div className="card-body1">
                    <div className="card-header2 bg-warning ">
                      <h2 className="my-2 card-title font-weight-bold">
                        BASIC
                      </h2>
                    </div>
                    <button
                      type="button"
                      className="my-5 btn btn-lg btn-outline-warning "
                      //onClick={this.onSubmitBasicPlan}
                    >
                      SELECT
                    </button>
                  </div>
                </form>

                <form className="card mt-1 mb-3 box-shadow bg-dark text-white d-flex justify-content-center">
                  <div className="card-body1">
                    <div className="card-header2 bg-primary ">
                      <h2 className="my-2 card-title font-weight-bold">
                        STANDARD
                      </h2>
                    </div>
                    <button
                      type="button"
                      className="my-5 btn btn-lg btn-outline-primary "
                      //onClick={this.onSubmitStandardPlan}
                    >
                      SELECT
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <p className="lead">
              Go to Pricing Tab to know more information about the plans
            </p>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  subscriptions: state.subscriptions,
  error: state.error,
});

export default connect(mapStateToProps, { addSubscription, getInstituteName })(
  withRouter(Plans)
);
