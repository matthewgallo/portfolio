import styled from 'styled-components';
import { COLORS } from '../../theme';

const AboutContainer = styled.div`
	align-items: flex-start;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	max-width: 1140px;
  width: 90%;
  
  @media (min-width: 1220px) {
    width: 100%;
    max-width: 1170px;
  }
`;

const Bento = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
  gap: 0; /* Space between grid items */
  width: 100%;

  /* For smaller screens, stack columns */
  @media (max-width: 768px) {
      grid-template-columns: 1fr; /* Single column layout */
  }
`;

const BentoItem = styled.div`
  height: 10rem;
  border-right: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  border-top: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  border-bottom: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  background-color: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  backdrop-filter: blur(10px);

  &:first-of-type {
    border-left: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  }
`;

export const Styled = {
	AboutContainer,
  Bento,
  BentoItem
};
