import React, { Component } from "react";
import Ico1 from "../assets/img/paymentImg/im1.png";
import Ico2 from "../assets/img/paymentImg/im2.png";
import Ico3 from "../assets/img/paymentImg/im3.webp";
import Check from "../assets/img/paymentImg/check-mark.png";
import "../assets/demo/style.css";

export class PaymentForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="pricing-header mx-auto text-center">
          <h3 className="display-5">PAYMENT DETAILS</h3>
        </div>

        <div className="container-form mt-1">
          <form method="post">
            <div className="row">
              <div className="col">
                <div className="cardPay">
                  <div class="row">
                    <div className="col mb-3">
                      <img src={Ico1} alt="visa" />
                    </div>
                    <div class="col mb-3">
                      <img src={Ico3} alt="mastercard" />
                    </div>
                    <div className="col mb-3">
                      <img src={Ico2} alt="paypal" />
                    </div>
                  </div>
                  <h6 className="text-white">Pay with a credit card</h6>
                </div>

                <div className="container-form1">
                  <div className="form-group">
                    <img
                      src={Check}
                      className="subPhoto1 float-left"
                      alt="check"
                    />

                    <h5 style={{ color: "white" }}>Billing Information</h5>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="txtEmail"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="row">
                    <div className="col mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div class="col mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                  <select className="form-control">
                    <option selected>Country </option>
                    <option>...</option>
                  </select>
                </div>
              </div>

              <div className="col">
                <div className="container-form1">
                  <div className="form-group">
                    <img
                      src={Check}
                      className="subPhoto1 float-left"
                      alt="ckeck2"
                    />

                    <h5 style={{ color: "white" }}>Credit Card Information</h5>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control"
                      placeholder="Full Name "
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="cardNumber"
                      className="form-control"
                      placeholder="Card Number "
                    />
                  </div>
                  <div class="row">
                    <div className="col mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Exp. Month"
                      />
                    </div>
                    <div class="col mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Exp. Year"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="ccv"
                      className="form-control"
                      placeholder="CCV"
                    />
                  </div>
                  <div className="form-group float-right">
                    <input
                      type="submit"
                      name="btnSubmit"
                      className="btn btn-success btn-lg"
                      value="PROCEED"
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

export default PaymentForm;
