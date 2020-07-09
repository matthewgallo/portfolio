import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import GradientLink from '../GradientLink/GradientLink';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import { Styled } from './Header.styles';

const Header = ({ toggleNavOpen }) => {
	const { colorMode } = useContext(ThemeContext);
	const location = useLocation();
	return (
		<Styled.Header colorMode={colorMode}>
			<Styled.HeaderContent>
				<Styled.HeaderLogo>
					<GradientLink bold
						url="/"
						color={colorMode && colorMode === 'dark' ? '#fff' : '#121619'}>
						matt gallo
					</GradientLink>
				</Styled.HeaderLogo>
				<Styled.HeaderActions>
					<ThemeToggle />
					<Styled.HeaderToggleNavButton onClick={toggleNavOpen}
						type="button">
						<Styled.HeaderNavMenuLine colorMode={colorMode} />
						<Styled.HeaderNavMenuLine colorMode={colorMode} />
					</Styled.HeaderToggleNavButton>
				</Styled.HeaderActions>
			</Styled.HeaderContent>
			{location && location.pathname !== '/' && <ScrollProgress />}
		</Styled.Header>
	);
};

Header.propTypes = {
	toggleNavOpen: PropTypes.func.isRequired,
};

export default Header;
