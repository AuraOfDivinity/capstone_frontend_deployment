import React from "react";
import { addDocument } from "../state/actions/documentAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NotificationAlert from "react-notification-alert";
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
import axios from "axios";
import { BASE_URL } from "../state/baseApi";

class AddDocument extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Set default state
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
        .post(`${BASE_URL}/api/file/fileUpload`, data)
        .then((response) => {
          if (200 === response.status) {
            if (response.data.error) {
              console.log(response.data);
            } else {
              // Success
              let fileName = response.data;
              console.log("fileName", fileName);

              this.props.addDocument();
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
    console.log(`${this.state.file.name}`);

    this.setState({
      title: "",
      category: "",
      file: null,
      file_key: Date.now(),
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
        <ModalHeader>Upload New Document</ModalHeader>
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
  documents: state.documents,
  error: state.error,
});

export default connect(mapStateToProps, { addDocument })(
  withRouter(AddDocument)
);
