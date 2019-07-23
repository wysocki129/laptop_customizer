import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
	render() {
		const { selectedParts } = this.props;
		const laptopSummary = Object.keys(selectedParts).map(key => (
			<div className="summary__option" key={key}>
				<div className="summary__option__label">{key} </div>
				<div className="summary__option__value">
					{selectedParts[key].name}
				</div>
				<div className="summary__option__cost">
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(selectedParts[key].cost)}
				</div>
			</div>
		));
		const total = Object.keys(selectedParts).reduce(
			(acc, curr) => acc + selectedParts[curr].cost,
			0
		);
		return (
			<section className="main__summary">
				<h3>NEW GREENLEAF 2018</h3>
				{laptopSummary}
				<div className="summary__total">
					<div className="summary__total__label">
						Your Price:{' '}
					</div>
					<div className="summary__total__value">
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD'
						}).format(total)}
					</div>
				</div>
			</section>
		);
	}
}
Summary.defaultProps = {
	selectedParts: []
};

export default Summary;
