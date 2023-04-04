import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Styled } from './Nav.styles';

const Nav = ({ style, toggleNavOpen }) => {
	const { colorMode } = useContext(ThemeContext);
	return (
		<Styled.NavMain style={style}
			$colorMode={colorMode}>
			<Styled.NavContent>
				<Styled.NavContentContainer>
					<h5>matt gallo</h5>
					<ul
						style={{
							listStyleType: 'none',
							padding: '0',
							margin: '0',
						}}
					>
						<li>
							<Styled.NavPageLink to="/"
								$colorMode={colorMode}
								onClick={() => toggleNavOpen()}>
								home
							</Styled.NavPageLink>
						</li>
						<li>
							<Styled.NavPageLink to="/about-me"
								$colorMode={colorMode}
								onClick={() => toggleNavOpen()}>
								about me
							</Styled.NavPageLink>
						</li>
					</ul>
					<Styled.Wave>
						<span role="img"
							aria-label="Hand wave">
							👋
						</span>
					</Styled.Wave>
				</Styled.NavContentContainer>
				<Styled.NavCloseButton onClick={() => toggleNavOpen()}
					type="button">
					<Styled.NavCloseIconPath $colorMode={colorMode} />
					<Styled.NavCloseIconPath $colorMode={colorMode} />
				</Styled.NavCloseButton>
			</Styled.NavContent>
		</Styled.NavMain>
	);
};

Nav.defaultProps = {
	style: null,
	toggleNavOpen: null,
};

Nav.propTypes = {
	style: PropTypes.shape({
		opacity: PropTypes.number,
		transform: PropTypes.string,
	}),
	toggleNavOpen: PropTypes.func,
};

export default Nav;
