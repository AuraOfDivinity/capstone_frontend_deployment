import React from 'react';
import { /*matchPath,*/ Route, Switch } from 'react-router-dom';
import ContactUs from 'views/ContactUs';
import Pricing from 'views/Pricing';
import AboutUs from 'views/AboutUs';
import Navbar from 'components/Navbars/navbar.component';
import Home from 'views/Home';
import Footer from 'components/Footer/Footer';
import { PropTypes } from 'prop-types';
import Plans from 'views/Plans';
import PaymentForm from 'views/PaymentForm';
import LoginNew from 'views/LoginNew';
import AdminRegister from 'views/AdminRegister';
import RegisterLay from 'views/RegisterLay';

class HomeLayout extends React.Component {
	render() {
		const { match } = this.props;
		return (
			<>
				<div className="">
					<Navbar />
					<Switch>
						<Route
							exact
							path={`${match.path}`}
							render={(props) => <Home {...props} />}
						/>
						<Route path={`${match.path}/home`} component={Home} />
						<Route path={`${match.path}/pricing`} component={Pricing} />
						<Route path={`${match.path}/contact`} component={ContactUs} />
						<Route path={`${match.path}/about`} component={AboutUs} />

						<Route path={`${match.path}/Login`} component={LoginNew} />

						<Route path={`${match.path}/plans`} component={Plans} />
						<Route path={`${match.path}/paymentform`} component={PaymentForm} />
						<Route
							path={`${match.path}/adminRegister`}
							component={AdminRegister}
						/>
						<Route path={`${match.path}/register`} component={RegisterLay} />
					</Switch>
					<Footer />
				</div>
			</>
		);
	}
}
HomeLayout.propTypes = {
	match: PropTypes.any.isRequired,
};

export default HomeLayout;
