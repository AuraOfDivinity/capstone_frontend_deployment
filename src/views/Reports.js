import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  ButtonToolbar,
} from "reactstrap";
import { ViewReport } from "./ViewReport";
import DeleteReport from "./DeleteReport";
import { getReports } from "../state/actions/reportAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NotificationAlert from "react-notification-alert";

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DeleteReport: false,
      ViewReport: false,
      reports: [],
      selectedReport: "",
    };
  }

  notificationAlert = React.createRef();
  componentDidMount() {
    this.props.getReports();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reports) {
      this.setState({ reports: nextProps.reports.reports });
    }

    if (nextProps.notifications !== this.props.notifications) {
      const notificationObject = nextProps.notifications;
      if (this.state.notificationId !== notificationObject.notificationId) {
        let options = {};
        if (notificationObject.notificationType === "success") {
          options = {
            place: "br",
            message: (
              <div>
                <div>{notificationObject.notificationMessage}</div>
              </div>
            ),
            type: "success",
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7,
          };
          this.notificationAlert.current.notificationAlert(options);
        } else if (notificationObject.notificationType === "failure") {
          options = {
            place: "br",
            message: (
              <div>
                <div>{notificationObject.notificationMessage}</div>
              </div>
            ),
            type: "danger",
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7,
          };
          this.notificationAlert.current.notificationAlert(options);
        }

        // let newNotificationId = this.state.notificationId++;
        // this.setState({
        //   notificationId: newNotificationId,
        // });
      }
    }
  }

  render() {
    let DeleteReportClose = () => this.setState({ DeleteReportShow: false });
    let ViewReportClose = () => this.setState({ ViewReportShow: false });
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <div className="ml-auto mr-auto mb-1 mt-3">
                    <CardTitle tag="h5">Current Reports</CardTitle>
                    <hr />
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    {this.state.reports?.map((report, index) => {
                      return (
                        <Col key={index} lg="3" md="6" sm="6">
                          <Card style={{ width: "12rem" }}>
                            <CardImg top src={require("assets/img/pdf.png")} />
                            <CardBody>
                              <CardTitle>{report.title}</CardTitle>
                              <div className="button-container">
                                <Row>
                                  <Col className="ml-auto mr-auto">
                                    <ButtonToolbar>
                                      <a
                                        href={report.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Button
                                          className="btn-round btn-icon"
                                          size="md"
                                          color="info"
                                          // onClick={() =>
                                          //   this.setState({
                                          //     ViewReportShow: true,
                                          //   })
                                          // }
                                        >
                                          <i className="fa fa-download fa-lg" />
                                        </Button>
                                      </a>
                                    </ButtonToolbar>
                                  </Col>
                                  <Col className="ml-auto mr-auto">
                                    <ButtonToolbar>
                                      <Button
                                        className="btn-round btn-icon"
                                        size="md"
                                        color="danger"
                                        onClick={() =>
                                          this.setState(
                                            {
                                              selectedReport: report._id,
                                            },
                                            () => {
                                              this.setState({
                                                DeleteReportShow: true,
                                              });
                                            }
                                          )
                                        }
                                      >
                                        <i className="fa fa-times fa-lg" />
                                      </Button>
                                    </ButtonToolbar>
                                  </Col>
                                </Row>
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <ViewReport show={this.state.ViewReportShow} onHide={ViewReportClose} />
        <DeleteReport
          show={this.state.DeleteReportShow}
          onHide={DeleteReportClose}
          selectedReport={this.state.selectedReport}
        />
        <NotificationAlert ref={this.notificationAlert} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  documents: state.documents,
  error: state.error,
  notifications: state.notifications,
  reports: state.reports,
});

export default connect(mapStateToProps, { getReports })(withRouter(Reports));
