import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox="0 0 850 400" {...props}>
			<defs>
				<linearGradient id="prefix__linear-gradient" x1={1} y1={200} x2={849} y2={200} gradientUnits="userSpaceOnUse">
					<stop offset={0} style={{ stopColor: 'var(--color-secondary)' }} />
					<stop offset={1} style={{ stopColor: 'var(--color-primary)' }} />
				</linearGradient>
				<linearGradient id="prefix__linear-gradient-3" y1={50} y2={50} xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-4" y1={350} y2={350} xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-5" y1={100} y2={100} xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-6" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-7" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-8" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
				<linearGradient id="prefix__linear-gradient-9" y1={300} y2={300} xlinkHref="#prefix__linear-gradient" />
				<style>{'.prefix__cls-1{fill:url(#prefix__linear-gradient)}'}</style>
			</defs>
			<title>MG Logo</title>
			<g id="prefix__Group">
				<path id="prefix__Rectangle" fill="url(#prefix__linear-gradient-8)" d="M0 0h100v400H0z" />
				<path id="prefix__Rectangle-Copy" fill="url(#prefix__linear-gradient-9)" d="M300 0h100v400H300z" />
				<path id="prefix__Rectangle-Copy-3" fill="url(#prefix__linear-gradient-3)" d="M450 0h400v100H450z" />
				<path id="prefix__Rectangle-Copy-4" fill="url(#prefix__linear-gradient-4)" d="M450 300h400v100H450z" />
				<path id="prefix__Rectangle-Copy-2" fill="url(#prefix__linear-gradient-5)" d="M150 0h100v200H150z" />
				<path id="prefix__Rectangle-Copy-6" fill="url(#prefix__linear-gradient-6)" d="M750 200h100v200H750z" />
				<path id="prefix__Rectangle-Copy-5" fill="url(#prefix__linear-gradient-7)" d="M650 150h200v100H650z" />
			</g>
		</svg>
	);
};

export default Logo;
