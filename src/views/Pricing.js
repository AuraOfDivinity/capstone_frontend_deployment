import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
export class Pricing extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="pricing-header mx-auto text-center">
             <h2 className="featurette-heading">SUBSCRIPTION PLANS</h2>
            <p className="lead">
              Quickly validate all you documents according to a standard. Choose
              a subscription plan for your organisation today
            </p>
          </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
              <div className="card mt-2 mb-5 box-shadow bg-dark text-white d-flex justify-content-center">
                <div className="card-header1 bg-danger ">
                  <h2 className="my-4 card-title font-weight-bold">FREE</h2>

                  <h1 className="card-subtitle pricing-card-title">
                    <sup>$</sup>0<small>/ mo</small>
                  </h1>
                </div>

                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Validate up to 200 documents</li>
                    <li>Upload 50 templates</li>
                  </ul>
                  <button
                    type="button"
                    className="my-5 btn btn-lg btn-danger font-weight-bold"
                  >
                    CHOOSE
                  </button>
                </div>
              </div>
              <div className="card mt-2 mb-5 box-shadow bg-dark text-white d-flex justify-content-center">
                <div className="card-header1 bg-warning">
                  <h2 className="my-4 card-title font-weight-bold">BASIC</h2>
                  <h1 className="card-title pricing-card-title">
                    <sup>$</sup>10 <small>/ mo</small>
                  </h1>
                </div>

                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Validate up to 500 documents</li>
                    <li>Upload 100 templates</li>
                  </ul>
                  <button
                    type="button"
                    className="my-5 btn btn-lg btn-warning font-weight-bold"
                  >
                    CHOOSE
                  </button>
                </div>
              </div>
              <div className="card mt-2 mb-5 box-shadow bg-dark text-white d-flex justify-content-center">
                <div className="card-header1 bg-primary">
                  <h2 className="my-4 card-title font-weight-bold">STANDARD</h2>
                  <h1 className="card-title pricing-card-title">
                    <sup>$</sup>15 <small>/ mo</small>
                  </h1>
                </div>

                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Validate up to 1000 documents</li>
                    <li>Upload 200 templates</li>
                  </ul>
                  <button
                    type="button"
                    className="my-5 btn btn-lg btn-primary font-weight-bold"
                  >
                    CHOOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Pricing;
