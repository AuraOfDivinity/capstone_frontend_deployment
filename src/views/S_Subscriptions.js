import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class S_Subscriptions extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Current Subscription Plans Available
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>SUBSCRIPTION</th>
                      <th>PERIOD FROM</th>
                      <th>PERIOD TO</th>
                      <th>NUMBER OF DOCUMENTS</th>
                      <th>VIEW</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>STANDARD PLAN</td>
                      <td>28 July 2020</td>
                      <td>28 August 2020</td>
                      <td>200</td>
                      <td>
                        <button className="btn btn-info">
                          <span align="center">
                            <i class="fa fa-eye"></i>
                          </span>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-warning">
                          <span align="center">
                            <i class="fa fa-trash"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>BASIC PLAN</td>
                      <td>21 August 2019</td>
                      <td>22 September 2019</td>
                      <td>100</td>
                      <td>
                        <button className="btn btn-info">
                          <span align="center">
                            <i class="fa fa-eye"></i>
                          </span>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-warning">
                          <span align="center">
                            <i class="fa fa-trash"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>STANDARD PLAN</td>
                      <td>21 January 2019</td>
                      <td>22 February 2019</td>
                      <td>200</td>
                      <td>
                        <button className="btn btn-info">
                          <span align="center">
                            <i class="fa fa-eye"></i>
                          </span>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-warning">
                          <span align="center">
                            <i class="fa fa-trash"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">BASIC PLAN</CardTitle>
                <p className="card-category">
                  Number of Documents - Number of documents that can be
                  validated per day
                </p>
              </CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col">
                    <div className="card w-80">
                      <div className="card-body text-secondary">
                        <div className="row">
                          <div className="col-sm-5">
                            <br />
                            <h6>&nbsp;&nbsp; Status</h6>
                            <br />
                            <h6>&nbsp;&nbsp; Period Start</h6>
                            <br />
                            <h6>&nbsp;&nbsp; Period End</h6>
                            <br />
                            <h6>&nbsp;&nbsp; Used Turns</h6>
                            <br />
                            <h6>&nbsp;&nbsp; Available Turns</h6>
                          </div>
                          <div className="col-sm-1">
                            <br />
                            <h6> :</h6>
                            <br />
                            <h6> :</h6>
                            <br />
                            <h6> :</h6>
                            <br />
                            <h6> :</h6>
                            <br />
                            <h6> :</h6>
                            <br />
                          </div>
                          <div className="col-sm-5">
                            <br />
                            <h6> Active</h6>
                            <br />
                            <h6> 21 July 2019</h6>
                            <br />
                            <h6> 22 September 2019</h6>
                            <br />
                            <h6> 50 </h6>
                            <br />
                            <h6> 50 </h6>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card w-100 text-white bg-dark">
                      <div className="card-body text-secondary">
                        <div className="row">
                          <div className="col-sm-9">
                            <br />
                            <h6>&nbsp;&nbsp;total documents validated today</h6>

                            <br />
                            <h6>
                              &nbsp;&nbsp;total documents validated this month
                            </h6>
                            <br />
                          </div>

                          <div className="col-sm-3">
                            <br />
                            <h6> 25</h6>
                            <br />
                            <h6> 450 </h6>
                            <br />
                            <br />
                          </div>
                          <h6>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total documents
                            that can be validated
                          </h6>
                          <br />
                          <div className="text-danger">
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;250</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default S_Subscriptions;
