import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Logo from './Logo';
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
						<h3 className="mg--semibold">Matt Gallo</h3>
						<p className="mg--light-italic">Front end developer and designer*</p>
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
