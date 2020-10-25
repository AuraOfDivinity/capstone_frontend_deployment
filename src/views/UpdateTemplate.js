import React from 'react';
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
} from 'reactstrap';
import { updateTemplate } from '../state/actions/templateAction';
import { getTemplateInfo } from '../state/actions/templateAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UpdateTemplate extends React.Component {
	constructor(props) {
		super(props);

		// Setting up functions
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		//Setting up state
		this.state = {
			title: '',
			category: '',
			template: {},
		};
	}

	onChangeTitle(e) {
		let template = this.state.template;
		template.title = e.target.value;
		this.setState({
			template: template,
		});
	}

	onChangeCategory(e) {
		let template = this.state.template;
		template.category = e.target.value;
		this.setState({
			template: template,
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps in update templates ', nextProps);
		if (nextProps.template) {
			this.setState(
				{
					template: nextProps.template.template,
				},
				() => {
					console.log(this.state.template);
				}
			);
		}
	}

	componentDidUpdate(prev) {
		if (this.props.selectedTemplateUpdate !== prev.selectedTemplateUpdate) {
			this.props.getTemplateInfo(this.props.selectedTemplateUpdate);
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const { template } = this.state;

		const templateInfo = {
			title: template.title,
			category: template.category,
		};
		this.props.updateTemplate(
			this.props.selectedTemplateUpdate,
			templateInfo
		);

		console.log(`Submitted`);
		console.log(`${this.state.title}`);
		console.log(`${this.state.category}`);

		this.setState({
			title: '',
			category: ''
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
				<ModalHeader>Update Template</ModalHeader>
				<ModalBody>
					<div className="container">
						<Form>
							<Row>
								<Col md="12">
									<FormGroup>
										<label>Title</label>
										<Input
											value={this.state.template.title}
											onChange={this.onChangeTitle}
											placeholder={this.state.template.title}
											type="text"
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col md="12">
									<FormGroup>
										<label>Category</label>
										<Input
											value={this.state.template.category}
											onChange={this.onChangeCategory}
											placeholder={this.state.template.category}
											type="text"
										/>
									</FormGroup>
								</Col>
							</Row>
						</Form>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button className="btn-round" color="primary" onClick={this.onSubmit}>
						Update
					</Button>{' '}
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
	template: state.template,
	error: state.error,
});

export default connect(mapStateToProps, { updateTemplate, getTemplateInfo })(
	withRouter(UpdateTemplate)
);
