import React from 'react';
import UserRegister from 'views/UserRegister';
import AdminRegister from 'views/AdminRegister';

// reactstrap components
import { Button, Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

class RegisterLay extends React.Component {
	state = {
		Adminvisible: false,
		userVisible: true,
	};

	render() {
		const bluebtn = {
			color: 'white',
			backgroundColor: '#51cbce',
			width: '210px',
			height: '50px',
		};

		return (
			<>
				<div
					className="content"
					style={{
						background: '#F4F3EF',
					}}
				>
					<Row>
						<Col
							lg="4"
							md="6"
							sm="12"
							style={{
								margin: '5% auto',
							}}
						>
							<Card>
								<div></div>
								<CardHeader className="text-center" tag="h3">
									Are You....
								</CardHeader>

								<CardBody>
									<div>
										<Col className="text-center">
											<Button
												type="submit"
												size="lg"
												style={bluebtn}
												onClick={() =>
													this.setState({
														userVisible: true,
														Adminvisible: false,
													})
												}
											>
												a User ?
											</Button>

											<Button
												type="submit"
												size="lg"
												style={bluebtn}
												onClick={() =>
													this.setState({
														Adminvisible: true,
														userVisible: false,
													})
												}
											>
												an Admin ?
											</Button>
										</Col>
									</div>
								</CardBody>
								<div></div>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col style={{ marginTop: '-97px' }}>
							<div>{this.state.Adminvisible ? <AdminRegister /> : null}</div>
							<div>{this.state.userVisible ? <UserRegister /> : null}</div>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default RegisterLay;
