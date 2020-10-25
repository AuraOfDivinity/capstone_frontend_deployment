import React, { Component } from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Table,
	Row,
	Col,
} from 'reactstrap';
import {
	deleteSubscription,
	updateSubscription,
	getSubscriptions,
} from '../state/actions/subscriptionAction';
import { withRouter } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class A_Subscriptions extends Component {
	componentDidMount() {
		this.props.getSubscriptions();
	}

	onDeleteClick = (id) => {
		this.props.deleteSubscription(id);
	};

	render() {
		const { subscriptions } = this.state;
		const subscriptionList = subscriptions.length ? (
			subscriptions.map((subscription) => {
				return (
					<tr key={subscription._id}>
						<td>{subscription.type}</td>
						<td>{subscription.endDate.substring(0, 10)}</td>
						<td>{subscription.pricing}</td>
						<td>Active</td>
						<td>
							<button className="btn btn-info">
								<span align="center">
									<i className="fa fa-eye"></i>
								</span>
							</button>
						</td>
					</tr>
				);
			})
		) : (
			<tr>
				<td>No subscriptions yet</td>
			</tr>
		);
		return (
			<div className="content">
				<Row>
					<Col md="12">
						<Card>
							<CardHeader>
								<CardTitle tag="h4">Manage Subscription Plans</CardTitle>
							</CardHeader>

							<CardBody>
								<Table responsive>
									<thead className="text-primary">
										<tr>
											<th>SUBSCRIPTION</th>
											<th>NEXT PAYMENT</th>
											<th>TOTAL</th>
											<th>STATUS</th>
											<th>VIEW</th>
										</tr>
									</thead>
									<tbody>{subscriptionList}</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
					<Col md="12">
						<Card className="card-plain">
							<CardHeader>
								<CardTitle tag="h4">Plan</CardTitle>
								<p className="card-category">Basic Plan</p>
							</CardHeader>
							<CardBody>
								<div className="row">
									<div className="card w-55">
										<h4 className="text-right">
											TOTAL AMOUNT PAYABLE&nbsp;&nbsp;
										</h4>
										<h3 className="text-right">$30&nbsp;&nbsp;</h3>
										<div className="text-right">
											<button className="btn btn-danger">
												CANCEL SUBSCRIPTION
											</button>
											&nbsp;&nbsp;
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

const mapStateToProps = (state) => ({
	user: state.user,
	subscriptions: state.subscriptions,
	error: state.error,
});

export default connect(mapStateToProps, {
	deleteSubscription,
	updateSubscription,
	//viewSubscription,
	getSubscriptions,
})(withRouter(A_Subscriptions));
