import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { COLORS } from '../../theme';

const Logo = props => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<svg viewBox="0 0 850 400"
			{...props}>
			<defs>
				<linearGradient id="prefix__linear-gradient"
					x1={1}
					y1={200}
					x2={849}
					y2={200}
					gradientUnits="userSpaceOnUse">
					<stop offset={0}
						stopColor={colorMode && colorMode === 'dark' ? COLORS.secondary.dark : COLORS.secondary.light} />
					<stop offset={1}
						stopColor={colorMode && colorMode === 'dark' ? COLORS.primary.dark : COLORS.primary.light} />
				</linearGradient>
				<linearGradient id="prefix__linear-gradient-3"
					y1={50}
					y2={50}
					xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-4"
					y1={350}
					y2={350}
					xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-5"
					y1={100}
					y2={100}
					xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-6"
					y1={300}
					y2={300}
					xlinkHref="#prefix__linear-gradient" />
				<style>{'.prefix__cls-1{fill:url(#prefix__linear-gradient)}'}</style>
			</defs>
			<title>MG Logo</title>
			<g id="prefix__Layer_2"
				data-name="Layer 2">
				<g id="prefix__Layer_1-2"
					data-name="Layer 1">
					<g id="prefix__Layer_2-2"
						data-name="Layer 2">
						<g id="prefix__Layer_1-2-2"
							data-name="Layer 1-2">
							<g id="prefix__Page-1">
								<g id="prefix__Group">
									<path id="prefix__Rectangle"
										className="prefix__cls-1"
										d="M0 0h100v400H0z" />
									<path id="prefix__Rectangle-Copy"
										className="prefix__cls-1"
										d="M300 0h100v400H300z" />
									<path id="prefix__Rectangle-Copy-3"
										fill="url(#prefix__linear-gradient-3)"
										d="M450 0h400v100H450z" />
									<path id="prefix__Rectangle-Copy-4"
										fill="url(#prefix__linear-gradient-4)"
										d="M450 300h400v100H450z" />
									<path id="prefix__Rectangle-Copy-2"
										fill="url(#prefix__linear-gradient-5)"
										d="M150 0h100v200H150z" />
									<path id="prefix__Rectangle-Copy-6"
										fill="url(#prefix__linear-gradient-6)"
										d="M750 200h100v200H750z" />
									<path id="prefix__Rectangle-Copy-5"
										className="prefix__cls-1"
										d="M650 150h200v100H650z" />
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default Logo;
