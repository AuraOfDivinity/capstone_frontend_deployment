import React from "react";
import { addTemplate } from "../state/actions/templateAction";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import { BASE_URL } from "../state/baseApi";
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

class AddTemplate extends React.Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: "",
      category: "",
      file: null,
      file_key: Date.now(),
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeFile(e) {
    this.setState({
      file: e.target.files[0],
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { title, category, file } = this.state;

    const data = new FormData();

    if (this.state.file) {
      data.append("file", this.state.file, this.state.file.name);
      data.append("title", title);
      data.append("category", category);
      data.append("fileType", file.name.split(".").pop());
      data.append("user", localStorage.getItem("userId"));

      axios
        .post(`${BASE_URL}/api/file/templateUpload`, data)
        .then((response) => {
          if (200 === response.status) {
            if (response.data.error) {
              console.log(response.data);
            } else {
              this.props.addTemplate();
            }
          }
        })
        .catch((error) => {
          console.log("error");
        });
    } else {
      console.log("error");
    }

    console.log(`Submitted`);
    console.log(`${this.state.title}`);
    console.log(`${this.state.category}`);

    this.setState({
      title: "",
      category: "",
      file: null,
      file_key: Date.now(),
    });

    this.props.onHide();
  }

  render() {
    console.log(this.state);
    return (
      <Modal
        isOpen={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>Upload New Template</ModalHeader>
        <ModalBody>
          <div className="container">
            <Form>
              <NotificationAlert ref={this.notificationAlert} />
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Title</label>
                    <Input
                      placeholder="Title"
                      type="text"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Category</label>
                    <Input
                      placeholder="Category"
                      type="text"
                      value={this.state.category}
                      onChange={this.onChangeCategory}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <div className="form-group files">
                      <label>Upload File</label>
                      <Input
                        type="file"
                        className="form-control"
                        key={this.state.file_key}
                        onChange={this.onChangeFile}
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-round" color="primary" onClick={this.onSubmit}>
            Upload
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
  templates: state.templates,
  error: state.error,
});

export default connect(mapStateToProps, { addTemplate })(
  withRouter(AddTemplate)
);
