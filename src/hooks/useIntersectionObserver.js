import { useState, useRef, useEffect } from 'react';

const useIntersectionObserver = ({ threshold, rootMargin = '0px' }) => {
	const [inView, setInView] = useState();
	const ref = useRef();
	const iObserverRef = useRef();

	useEffect(() => {
		const options = {
			root: null,
			rootMargin,
			threshold,
		};

		iObserverRef.current = new IntersectionObserver(entries => {
			if (inView !== entries[0].isIntersecting) {
				setInView(entries[0].isIntersecting);
			}
		}, options);
	}, [inView, rootMargin, threshold]);

	useEffect(() => {
		const refElement = ref.current;
		if (refElement) iObserverRef.current.observe(refElement);
		return () => {
			if (refElement) {
				iObserverRef.current.unobserve(refElement);
				iObserverRef.current.disconnect();
			}
		};
	}, []);

	return { inView, ref };
};

export default useIntersectionObserver;
