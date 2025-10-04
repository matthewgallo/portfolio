import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Bold from '../Text/Bold';
import { Styled } from './Intro.styles';
import { Styled as TextStyles } from '../Text/Text.styles';
import GradientLink from '../GradientLink/GradientLink';

const Intro = () => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<Styled.IntroContainer colorMode={colorMode}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<Styled.IntroInner>
				<Styled.IntroContent>
					<div>
						<h3
							style={{
								marginBottom: 0,
							}}
						>
							<TextStyles.ContentText medium margin>Hi! 👋🏻 My name is</TextStyles.ContentText>
							<Bold margin="0.5rem" size="expressive-heading">Matt Gallo</Bold>
							<Bold size="expressive-heading-03" margin="2rem" secondary>Building design systems at IBM</Bold>
							<TextStyles.ContentText medium contained>I&apos;m a senior front end engineering lead currently working on the <GradientLink url="https://carbondesignsystem.com/"
														external
														bold>
														Carbon Design System
													</GradientLink> at IBM.</TextStyles.ContentText>
						</h3>
					</div>
				</Styled.IntroContent>
			</Styled.IntroInner>
		</Styled.IntroContainer>
	);
};

export default Intro;
