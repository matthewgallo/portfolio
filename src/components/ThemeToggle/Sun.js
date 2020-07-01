import React from 'react';

const Sun = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="300"
			height="300"
			className="sun active-view-mode"
			viewBox="0 0 300 300"
		>
			<defs>
				<circle id="path-1"
					cx="150"
					cy="150"
					r="150" />
			</defs>
			<g fill="none"
				fillRule="evenodd"
				stroke="none"
				strokeWidth="1">
				<g>
					<mask id="mask-2"
						fill="#fff">
						<use xlinkHref="#path-1" />
					</mask>
					<use fill="#FFDD59"
						xlinkHref="#path-1" />
					<circle cx="131"
						cy="128"
						r="150"
						fill="#FFE994"
						mask="url(#mask-2)" />
				</g>
			</g>
		</svg>
	);
};

export default Sun;
