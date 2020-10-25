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
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { DocumentView } from "./DocumentView";
import AddDocument from "./AddDocument";
import ValidateDocument from "./ValidateDocument";
import DeleteDocument from "./DeleteDocument";
import { getDocuments } from "../state/actions/documentAction";
import NotificationAlert from "react-notification-alert";

class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AddDocumentShow: false,
      DocumentViewShow: false,
      ValidateDocumentShow: false,
      DeleteDocumentShow: false,
      doc: [],
      selectedDocument: null,
      selectedFile: "",
      notificationId: 1,
      selectedKey: "",
      selectedType:"",
    };
  }

  notificationAlert = React.createRef();

  componentDidMount() {
    this.props.getDocuments();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps?.documents) {
      this.setState({
        doc: nextProps.documents.documents,
      });
    }
    const notificationObject = nextProps.notifications;

    if (nextProps.notifications !== this.props.notifications) {
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
    }
  }

  handleValidateClicked = (key, fileType) => {
    this.setState({
      ValidateDocumentShow: true,
      selectedKey: key,
      selectedType:fileType,
    });
  };

  render() {
    let AddDocumentClose = () => this.setState({ AddDocumentShow: false });
    let DocumentViewClose = () => this.setState({ DocumentViewShow: false });
    let ValidateDocumentClose = () =>
      this.setState({ ValidateDocumentShow: false });
    let DeleteDocumentClose = () =>
      this.setState({ DeleteDocumentShow: false });
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <br></br>
              <Card>
                <CardHeader>
                  <div className="ml-auto mr-auto mb-6">
                    <ButtonToolbar>
                      <Button
                        className="btn-round btn-md"
                        color="primary"
                        type="submit"
                        size="md"
                        onClick={() => this.setState({ AddDocumentShow: true })}
                      >
                        Upload Document
                      </Button>
                    </ButtonToolbar>
                  </div>
                  <div className="ml-auto mr-auto mb-1 mt-3">
                    <CardTitle tag="h5">Current Documents</CardTitle>
                    <hr />
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    {this.state.doc?.map((documents, index) => {
                      return (
                        <Col key={index} lg="3" md="6" sm="6">
                          <Card style={{ width: "12rem" }}>
                            {(() => {
                              switch (documents.fileType) {
                                case "pdf":
                                  return (
                                    <CardImg
                                      top
                                      src={require("assets/img/pdf.png")}
                                    />
                                  );
                                case "docx":
                                case "doc":
                                  return (
                                    <CardImg
                                      top
                                      src={require("assets/img/word.png")}
                                    />
                                  );
                                case "pptx":
                                case "ppt":
                                  return (
                                    <CardImg
                                      top
                                      src={require("assets/img/ppoint.png")}
                                    />
                                  );
                                default:
                                  return null;
                              }
                            })()}
                            <CardBody>
                              <CardTitle>{documents.title}</CardTitle>
                              <div className="button-container">
                                <Row>
                                  <Col className="ml-auto mr-auto">
                                    <ButtonToolbar>
                                      <Button
                                        className="btn-round btn-icon"
                                        size="md"
                                        color="info"
                                        onClick={() =>
                                          this.setState({
                                            DocumentViewShow: true,
                                            selectedFile: documents.fileLocation,
                                          })
                                        }
                                      >
                                        <i className="fa fa-ellipsis-v fa-lg" />
                                      </Button>
                                    </ButtonToolbar>
                                  </Col>
                                  <Col className="ml-auto mr-auto">
                                    <ButtonToolbar>
                                      <Button
                                        className="btn-round btn-icon"
                                        size="md"
                                        color="success"
                                        onClick={() =>
                                          this.handleValidateClicked(
                                            documents.file,
                                            documents.fileType,
                                          )
                                        }
                                      >
                                        <i className="fa fa-check fa-lg" />
                                      </Button>
                                    </ButtonToolbar>
                                  </Col>
                                  <Col className="ml-auto mr-auto">
                                    <ButtonToolbar>
                                      <Button
                                        className="btn-round btn-icon"
                                        size="md"
                                        color="danger"
                                        onClick={() => {
                                          this.setState({
                                            DeleteDocumentShow: true,
                                            selectedDocument: documents._id,
                                          });
                                        }}
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
          <AddDocument
            show={this.state.AddDocumentShow}
            onHide={AddDocumentClose}
          />
          <DocumentView
            show={this.state.DocumentViewShow}
            selectedFile={this.state.selectedFile}
            onHide={DocumentViewClose}
          />
          <ValidateDocument
            show={this.state.ValidateDocumentShow}
            selectedDocument={this.state.selectedKey}
            selectedType={this.state.selectedType}
            onHide={ValidateDocumentClose}
          />
          <DeleteDocument
            show={this.state.DeleteDocumentShow}
            selectedDocument={this.state.selectedDocument}
            onHide={DeleteDocumentClose}
          />
        </div>
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
});

export default connect(mapStateToProps, { getDocuments })(
  withRouter(Documents)
);
