import React from 'react'

import { Link } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

import activity_1 from 'assets/images/activity_1.png'
import activity_2 from 'assets/images/activity_2.png'
import activity_3 from 'assets/images/activity_3.png'
import activity_4 from 'assets/images/activity_4.png'
import activity_5 from 'assets/images/activity_5.png'

function Index() {

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">

				<div className="row row-gap-10">
					<div className="col-md-4">
						<div className="activity-card second">
							<img src={activity_1} alt="" />
							Wildberries
						</div>
					</div>

					<div className="col-md-4">
						<div className="activity-card second">
							<img src={activity_2} alt="" />
							UZUM Market
						</div>
					</div>

					<div className="col-md-4">
						<div className="activity-card second">
							<img src={activity_3} alt="" />
							Ozon
						</div>
					</div>

					<div className="col-md-6">
						<div className="activity-card second">
							<img src={activity_4} alt="" />
							ZoodMall
						</div>
					</div>

					<div className="col-md-6">
						<div className="activity-card second">
							<img src={activity_5} alt="" />
							Sello
						</div>
					</div>
				</div>

				<div className="auth-buttons">
					<Link className="auth-btn start" to="/auth/activity/success">
						Продолжить
						<div className="devider" />
						<ArrowRightIcon />
					</Link>
				</div>
			</div>

			<div></div>
		</>
	)
}

export default Index