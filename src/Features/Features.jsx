import React, { Component } from 'react';
import './Features.css';
import Options from '../Options/Options';

class Features extends Component {
	render() {
		const {
			features,
			handleUpdateFeature,
			selectedOptions
		} = this.props;
		const featList = Object.keys(features).map(key => {
			const options = (
				<Options
					selectedOptions={selectedOptions}
					featureType={key}
					allOptions={features[key]}
					handleUpdateFeature={handleUpdateFeature}
				/>
			);
			return (
				<div className="feature" key={key}>
					<div className="feature__name">{key}</div>
					<ul className="feature__list">{options}</ul>
				</div>
			);
		});
		return (
			<section className="main__form">
				<h3>TECH SPECS AND CUSTOMIZATIONS</h3>
				{featList}
			</section>
		);
	}
}

Features.defaultProps = {
	features: {
		Processor: [],
		'Operating Sytstem': [],
		'Video Card': [],
		Display: []
	}
};

export default Features;
