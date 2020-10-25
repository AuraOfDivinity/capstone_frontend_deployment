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
import { TemplateView } from "./TemplateView";
import { getStaffTemplates } from "../state/actions/templateAction";

class Templates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TemplateViewShow: false,
      temp: [],
      selectedTemplate: null,
      selectedFile: "",
    };
  }

  notificationAlert = React.createRef();
  intervalID;

  componentDidMount() {
    this.props.getStaffTemplates();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.templates) {
      this.setState({
        temp: nextProps.templates.templates,
      });
    }
  }

  render() {
    let TemplateViewClose = () => this.setState({ TemplateViewShow: false });
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <br></br>
              <Card>
                <CardHeader>
                  <div className="ml-auto mr-auto mb-1 mt-3">
                    <CardTitle tag="h5">Current Templates</CardTitle>
                    <hr />
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    {this.state.temp?.map((templates, index) => {
                      return (
                        <Col key={index} lg="3" md="6" sm="6">
                          <Card style={{ width: "12rem" }}>
                            {(() => {
                              switch (templates.fileType) {
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
                              <CardTitle>{templates.title}</CardTitle>
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
                                            TemplateViewShow: true,
                                            selectedFile: templates.file,
                                          })
                                        }
                                      >
                                        <i className="fa fa-ellipsis-v fa-lg" />
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
          <TemplateView
            show={this.state.TemplateViewShow}
            selectedFile={this.state.selectedFile}
            onHide={TemplateViewClose}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  templates: state.templates,
  error: state.error,
  //status: state.status,
});

export default connect(mapStateToProps, { getStaffTemplates })(
  withRouter(Templates)
);
