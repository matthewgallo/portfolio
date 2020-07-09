import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Logo from '../Intro/Logo';
import { Styled } from './NotFound.styles';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const NotFound = () => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<div>
			<Header />
			<Styled.NotFoundContainer colorMode={colorMode}>
				<div>
					<Logo
						style={{
							height: '50px',
							transition: 'fill 0.8s ease',
							width: '88px',
						}}
					/>
					<h4>Page not found</h4>
				</div>
			</Styled.NotFoundContainer>
		</div>
	);
};

export default withRouter(NotFound);
