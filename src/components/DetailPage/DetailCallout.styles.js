import styled from 'styled-components';
import { COLORS } from '../../theme';

const DetailCallout = styled.div`
	background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light)};
	color: $text;
	padding: 4rem 0;
`;

const DetailCalloutHeader = styled.h4`
	font-weight: 300;
`;

const DetailCalloutOverview = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 3rem;
`;

export const Styled = {
	DetailCallout,
	DetailCalloutHeader,
	DetailCalloutOverview,
};
