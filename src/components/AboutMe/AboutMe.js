import React from 'react';
import { Styled } from './AboutMe.styles';
import Bold from '../Text/Bold';
import { Styled as TextStyles } from '../Text/Text.styles';

export const AboutMe = () => {
	return (
		<Styled.AboutContainer>
			<Bold size="expressive-heading-04"
				margin="1rem">
				About
			</Bold>
			<TextStyles.ContentText medium
				margin="0.5rem">
				I focus on creating scalable, reusable UI components and patterns that help teams build consistent, accessible products faster. I enjoy working at the
				intersection of design and code—translating ideas into clean, maintainable systems that grow with the product. Whether it’s setting up a shared
				component library, or improving dev workflows, I’m all about making the front-end more efficient and enjoyable for everyone.
			</TextStyles.ContentText>
			<TextStyles.ContentText medium
				margin="6rem">
				My current role includes leading a team of front end developers in delivering flexible, consumable, and composable components for products across all of
				IBM, with support for both React and web components.
			</TextStyles.ContentText>
			{/*  */}
			<Bold size="expressive-heading-04"
				margin="1rem">
				Other projects
			</Bold>
		</Styled.AboutContainer>
	);
};
