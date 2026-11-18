import Bold from '../Text/Bold';
import Text from '../Text/Text';
import GradientLink from '../GradientLink/GradientLink';
import styles from './OtherProjects.module.css';

interface Project {
	name: string;
	description: string;
	links: { label: string; url: string }[];
}

const PROJECTS: Project[] = [
	{
		name: 'react-ol-map',
		description: 'Composable map built with Open Layers and Radix',
		links: [
			{ label: 'GitHub', url: 'https://github.com/matthewgallo/react-ol-map' },
			{ label: 'Storybook', url: 'https://matthewgallo.github.io/react-ol-map/' },
		],
	},
	{
		name: 'Wordle',
		description: 'The daily word game, rebuilt with Lit web components',
		links: [{ label: 'Play', url: 'https://lit-wordle.netlify.app/' }],
	},
];

export const OtherProjects = () => (
	<div className={styles.outer}>
		<ul className={styles.grid}>
			{PROJECTS.map(({ name, description, links }) => (
				<li key={name} className={styles.card}>
					<div>
						<Bold margin="0.5rem">{name}</Bold>
						<Text margin="0">{description}</Text>
					</div>
					<ul className={styles.links}>
						{links.map(({ label, url }) => (
							<li key={url}>
								<GradientLink external bold url={url}>
									{label} <span aria-hidden="true">↗</span>
								</GradientLink>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</div>
);
