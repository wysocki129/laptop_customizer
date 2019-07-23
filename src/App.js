import React, { Component } from 'react';
import './App.css';
import ELFBranding from './ELFBranding/ELFBranding';
import Features from './Features/Features';
import Summary from './Summary/Summary';

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
					<Summary selectedParts={this.state.selected} />
				</main>
			</div>
		);
	}
}

export default App;
