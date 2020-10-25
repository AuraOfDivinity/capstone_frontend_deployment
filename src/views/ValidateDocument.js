import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { getTemplates } from "../state/actions/templateAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { validateDocument } from "../state/actions/documentAction";

class ValidateDocument extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val_saveAs: "",
      val_template: "",
      temp: [],
    };

    this.onChangeValSaveAs = this.onChangeValSaveAs.bind(this);
    this.onChangeValTemplate = this.onChangeValTemplate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTemplates();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.templates) {
      this.setState({
        temp: nextProps.templates.templates,
      });
    }
  }

  onChangeValSaveAs(e) {
    this.setState({
      val_saveAs: e.target.value,
    });
  }

  onChangeValTemplate(e) {
    this.setState({
      val_template: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { val_saveAs, val_template } = this.state;

    const valInfo = {
      val_document: this.props.selectedDocument,
      val_saveAs: val_saveAs,
      val_template: val_template,
    };

    console.log(valInfo);

    this.props.validateDocument(valInfo);

    console.log(`Submitted`);
    console.log(`${this.state.val_saveAs}`);
    console.log(`${this.state.val_template}`);

    this.setState({
      val_saveAs: "",
      val_template: "",
    });

    this.props.onHide();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>Validate Document</ModalHeader>
        <ModalBody>
          <div className="container">
            <Form>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Save As</label>
                    <Input
                      placeholder="Give a unique name to the report"
                      type="text"
                      value={this.state.val_saveAs}
                      onChange={this.onChangeValSaveAs}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Choose Template</label>
                    <Input
                      type="select"
                      value={this.state.val_template}
                      onChange={this.onChangeValTemplate}
                    >
                      <option value="">N/A</option>
                      {this.state.temp?.map((templates, index) => {
                        return (
                          (() => {
                            switch (templates.fileType) {
                              case this.props.selectedType:
                                return (
                                  <option key={index} value={templates.file}>
                                    {templates.title}
                                  </option>
                                );
                              default:
                            }
                          })()
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-round" color="primary" onClick={this.onSubmit}>
            Validate
          </Button>{" "}
          <Button
            className="btn-round"
            color="secondary"
            onClick={this.props.onHide}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  templates: state.templates,
  error: state.error,
});

export default connect(mapStateToProps, { getTemplates, validateDocument })(
  withRouter(ValidateDocument)
);
