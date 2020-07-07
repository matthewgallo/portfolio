/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect } from 'react';

function debounce(func, wait = 100) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}

function useScroll() {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
	const [scrollY, setScrollY] = useState(bodyOffset.top);
	const [scrollDirection, setScrollDirection] = useState();

	const listener = () => {
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollY(-bodyOffset.top);
		setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
		setLastScrollTop(-bodyOffset.top);
	};

	const delay = 200;
	useEffect(() => {
		const debounceWrapper = debounce(listener, delay);
		window.addEventListener('scroll', debounceWrapper);
		return () => {
			window.removeEventListener('scroll', debounceWrapper);
		};
	});

	return {
		scrollY,
		scrollDirection,
	};
}

export default useScroll;
