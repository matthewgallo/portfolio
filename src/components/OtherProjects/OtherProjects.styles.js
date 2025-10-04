import styled from 'styled-components';
import { COLORS } from '../../theme';

const ProjectContainer = styled.div`
	align-items: flex-start;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	max-width: 1140px;
	width: 100%;
`;

const ProjectOuter = styled.div`
  width: 100%;
  border-top: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  border-bottom: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
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

const BentoItem = styled.a`
  text-decoration: none;
  height: 10rem;
  border-right: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  background-color: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:first-of-type {
    border-left: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid ${({ colorMode }) => colorMode === 'dark' ? COLORS.backgroundSecondary.dark : COLORS.backgroundSecondary.light};
  }
`;

const CardContent = styled.div`
`;

const BentoOverlay = styled.div`
    backdrop-filter: blur(10px);
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
`;

const BentoImage = styled.div`
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  &:hover {
    opacity: 1;
  }
`;

const BentoContent = styled.div`
  z-index: 1;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const Styled = {
	ProjectContainer,
  Bento,
  BentoItem,
  ProjectOuter,
  CardContent,
  BentoOverlay,
  BentoContent,
  BentoImage
};
