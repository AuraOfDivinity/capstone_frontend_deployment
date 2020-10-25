import React from "react";

//import Main from "../assets/img/Main.jpg";

// reactstrap components
import {
  //Button,
  Card,
  CardHeader,
  CardBody,
  //CardFooter,
  CardTitle,
  //FormGroup,
  //Form,
  //Input,
  Row,
  Col,
} from "reactstrap";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <div
          className="content"
          style={{
            // background: `url(${Main})`,
            // backgroundSize: "cover",
            // height: "100vh",
            // overflow: "hidden",

            background: "#F4F3EF",
          }}
        >
          <Row className="justify-content-md-center">
            {/* <Col md="4" style={{ margin: '10% auto' }}>
							<Card className="card-user">
								<CardBody>
									<div>
										<img alt="..." src={require('assets/img/abtUS.png')} />
									</div>
								</CardBody>
								<CardFooter>
									<hr />
								</CardFooter>
							</Card>
						</Col> */}

            <Col md="6" style={{ margin: "3% auto" }}>
              <Card className="card-user">
                <CardHeader className="text-center">
                  <h2 className="featurette-heading">ABOUT US</h2>
                </CardHeader>
                <CardBody>
                  <div>
                    <hr />
                    <p style={{ fontSize: 16 }} className="text-center">
                      Lecturer content validator is a web-based application
                      intended to serve the purpose of maintaining the
                      consistency of academic material. The system provides
                      cross-platform support, making it compatible with most of
                      the operating systems in current use. The lecturer content
                      validator is a new, self-contained product and will be
                      designed following the client-server architecture. The
                      final solution will be a cloud-based application.
                    </p>
                    <hr />

                    <div>
                      <img alt="..." src={require("assets/img/abtUS.png")} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default AboutUs;
