import React from 'react'

import { Link } from 'react-router-dom'

import logo from 'assets/icons/logo.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';

function Index() {

	const activities = [
		'IT',
		'E-Commerce',
		'Общепит',
		'Торговля',
		'Услуги',
		'Производство',
		'Недвижимость',
		'Строительство',
		'Сельское хозяйство',
		'Искусство и развитие',
	];

	return (
		<>
			<img src={logo} alt="" className="logo" />

			<div className="auth-content align-items-center">

				<div className="row row-gap-10">
					{activities.map((item, index) => (
						<div key={index} className="col-md-6">
							<div className="activity-card">
								{item}
							</div>
						</div>
					))
					}
					<div className="col-md-12">
						<div className="activity-card">
							Другое
						</div>
					</div>

				</div>

				<div className="auth-buttons">
					<Link className="auth-btn start" to="/auth/activity/children">
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