import React from 'react';

const Moon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="300"
			height="300"
			className="moon"
			viewBox="0 0 300 300">
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
					<use fill="#27373E"
						xlinkHref="#path-1" />
					<circle cx="127"
						cy="124"
						r="150"
						fill="#344852"
						mask="url(#mask-2)" />
					<circle cx="88"
						cy="181"
						r="31"
						fill="#27373E"
						mask="url(#mask-2)" />
					<circle cx="94"
						cy="87"
						r="17"
						fill="#27373E"
						mask="url(#mask-2)" />
					<circle cx="161"
						cy="208"
						r="11"
						fill="#27373E"
						mask="url(#mask-2)" />
					<circle cx="225.5"
						cy="132.5"
						r="23.5"
						fill="#27373E"
						mask="url(#mask-2)" />
				</g>
			</g>
		</svg>
	);
};

export default Moon;
