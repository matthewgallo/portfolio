import Bold from '../Text/Bold';
import Text from '../Text/Text';
import styles from './AboutMe.module.css';

export const AboutMe = () => {
	return (
		<div className={styles.container}>
			<Bold size="expressive-heading-04" margin="1rem">
				About
			</Bold>
			<Text small={false} medium margin="0.5rem">
				I focus on creating scalable, reusable UI components and patterns that help teams build consistent, accessible products faster. I enjoy working at the
				intersection of design and code—translating ideas into clean, maintainable systems that grow with the product. Whether it’s setting up a shared
				component library, or improving dev workflows, I’m all about making the front-end more efficient and usable for everyone.
			</Text>
			<Text small={false} medium margin="6rem">
				I have experience building design systems and component libraries that can scale across enterprises, utilizing tools like React, web components (Lit and
				StencilJS), and Angular. Some of my more recent work has centered around creating and maintaining a new system for Fidelity Investments that is
				composable and flexible enough to support the wide range of products and teams across the organization.
			</Text>
			{/*  */}
			<Bold size="expressive-heading-04" margin="1rem">
				Other projects
			</Bold>
		</div>
	);
};
