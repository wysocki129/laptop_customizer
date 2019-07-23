import React, { Component } from 'react';
import './App.css';
import ELFBranding from './ELFBranding/ELFBranding';
import Features from './Features/Features';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: {
				Processor: {
					name:
						'17th Generation Intel Core HB (7 Core with donut spare)',
					cost: 700
				},
				'Operating System': {
					name: 'Ubuntu Linux 16.04',
					cost: 200
				},
				'Video Card': {
					name: 'Toyota Corolla 1.5v',
					cost: 1150.98
				},
				Display: {
					name:
						'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
					cost: 1500
				}
			}
		};
	}

	updateFeature(feat, newItem) {
		const selected = Object.assign({}, this.state.selected);

		selected[feat] = newItem;

		this.setState({
			selected
		});
	}

	render() {
		const summary = Object.keys(this.state.selected).map(key => (
			<div className="summary__option" key={key}>
				<div className="summary__option__label">{key} </div>
				<div className="summary__option__value">
					{this.state.selected[key].name}
				</div>
				<div className="summary__option__cost">
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(this.state.selected[key].cost)}
				</div>
			</div>
		));

		const total = Object.keys(this.state.selected).reduce(
			(acc, curr) => acc + this.state.selected[curr].cost,
			0
		);

		return (
			<div className="App">
				<ELFBranding />
				<main>
					<Features
						features={this.props.features}
						selectedOptions={this.state.selected}
						handleUpdateFeature={(feat, newItem) =>
							this.updateFeature(feat, newItem)
						}
					/>
					<section className="main__summary">
						<h3>NEW GREENLEAF 2018</h3>
						{summary}
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
				</main>
			</div>
		);
	}
}

export default App;
