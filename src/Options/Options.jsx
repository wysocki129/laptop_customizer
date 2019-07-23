import React, { Component } from 'react';
import './Options.css';

class Options extends Component {
	render() {
		const {
			allOptions,
			handleUpdateFeature,
			featureType
		} = this.props;
		const featureOptions = allOptions.map((item, index) => {
			const featureClass = 'feature__option ';

			return (
				<li key={index} className="feature__item">
					<div
						onClick={e =>
							handleUpdateFeature(featureType, item)
						}
						className={featureClass}
					>
						{item.name}(
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD'
						}).format(item.cost)}
						)
					</div>
				</li>
			);
		});

		return <> {featureOptions} </>;
	}
}

export default Options;
