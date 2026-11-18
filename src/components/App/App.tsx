import { useContext, useEffect, useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../Footer/Footer';
import { ThemeContext } from '../ThemeContext/ThemeContext';

/** Root layout: rendered by the root route, with the matched page in <Outlet />. */
const App = () => {
	const [navOpen, toggleNavOpen] = useState(false);
	const { colorMode } = useContext(ThemeContext);

	useEffect(() => {
		let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.head.appendChild(link);
		}

		link.href = colorMode === 'dark' ? '/dark__favicon.ico' : '/favicon.ico';
	}, [colorMode]);

	return (
		<>
			<PageContainer>
				<Header />
				<Nav open={navOpen} toggleNavOpen={() => toggleNavOpen(!navOpen)} />
				<Outlet />
			</PageContainer>
			<Footer />
		</>
	);
};

export default App;
