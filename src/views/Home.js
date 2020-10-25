import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import HomeIco from "../assets/img/home-pic.jpg";
import Ico1 from "../assets/img/icons/subscriptions_icon.png";
import Ico2 from "../assets/img/icons/credit_card_icon.png";
import Ico3 from "../assets/img/icons/verified_icon.png";
import "../assets/demo/style.css";
export class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">WELCOME TO DOCV</h2>
              <p className="lead">
                This website can be used by organisations to upload and validate
                documents according to a given template. Registered members are
                allowed to validate documents according to the templates
                provided by a registered institute administrator or manager who
                is able to upload templates of documents and presentations.
              </p>
              <button className="btn btn-success">
                VIEW POSSIBLE TEMPLATES AND MORE INFO
              </button>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={HomeIco} className="homePhoto" alt="HomeIco" />
            </div>
          </div>
          <hr className="featurette-divider"></hr>
        </div>

        <div className="container marketing">
          <div className="row">
            <div
              className="card card-block d-flex bg-dark text-center mx-auto"
              style={{ width: "18rem", height: "12rem" }}
            >
              <div className="card-body text-white align-items-center justify-content-center">
                <h2>Step 1</h2>
                <img src={Ico1} alt="subscriptionIco" />
                <p>Choose a Subscription Plan for your Institute</p>
              </div>
            </div>

            <div
              className="card card-block d-flex bg-dark text-center mx-auto"
              style={{ width: "18rem", height: "12rem" }}
            >
              <div className="card-body text-white align-items-center justify-content-center">
                <h2>Step 2</h2>
                <img src={Ico2} alt="creditIco" />
                <p>Institute Administrator may upload necessary templates</p>
              </div>
            </div>

            <div
              className="card card-block d-flex bg-dark text-center mx-auto"
              style={{ width: "18rem", height: "12rem" }}
            >
              <div className="card-body text-white align-items-center justify-content-center">
                <h2>Step 3</h2>
                <img src={Ico3} alt="safeIco" />
                <p>
                  All users under the institute have access to validate your
                  documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
