import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Logo from './Logo';
import Bold from '../Text/Bold';
import { Styled } from './Intro.styles';

const Intro = () => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<Styled.IntroContainer colorMode={colorMode}>
			<Styled.IntroInner>
				<Styled.IntroContent>
					<Styled.IntroLogoContainer>
						<Logo
							style={{
								width: '100%',
							}}
						/>
					</Styled.IntroLogoContainer>
					<div>
						<h3
							style={{
								marginBottom: 0,
							}}
						>
							<Bold>Matt Gallo</Bold>
						</h3>
						<p
							style={{
								fontStyle: 'italic',
								marginTop: 0,
							}}
						>
							Front end developer and designer*
						</p>
					</div>
				</Styled.IntroContent>
				<Styled.IntroPartTime>
					*part time saxophonist{' '}
					<span role="img"
						aria-label="Saxophone emoji">
						🎷
					</span>
				</Styled.IntroPartTime>
			</Styled.IntroInner>
		</Styled.IntroContainer>
	);
};

export default Intro;
