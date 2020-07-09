import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../theme';
import KarlaReg from '../../assets/fonts/Karla-Regular.woff';
import KarlaRegWoff2 from '../../assets/fonts/Karla-Regular.woff2';
import KarlaItalic from '../../assets/fonts/Karla-Italic.woff';
import KarlaItalicWoff2 from '../../assets/fonts/Karla-Italic.woff2';
import KarlaBold from '../../assets/fonts/Karla-Bold.woff';
import KarlaBoldWoff2 from '../../assets/fonts/Karla-Bold.woff2';
import KarlaBoldItalic from '../../assets/fonts/Karla-BoldItalic.woff';
import KarlaBoldItalicWoff2 from '../../assets/fonts/Karla-BoldItalic.woff2';

const GlobalStyles = createGlobalStyle`
  // Karla fonts
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: url(${KarlaReg}) format('woff'), url(${KarlaRegWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'Karla';
    font-style: italic;
    font-weight: 400;
    src: url(${KarlaItalic}) format('woff'), url(${KarlaItalicWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    src: url(${KarlaBold}) format('woff'), url(${KarlaBoldWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'Karla';
    font-style: italic;
    font-weight: 700;
    src: url(${KarlaBoldItalic}) format('woff'), url(${KarlaBoldItalicWoff2}) format('woff2');
  }
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Karla', Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
    font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.secondary.dark : COLORS.secondary.light)};
  }
  #root {
		background-color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.background.dark : COLORS.background.light)};
		color: ${props => (props.colorMode && props.colorMode === 'dark' ? COLORS.text.dark : COLORS.text.light)};
		height: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
		margin-bottom: 1rem;
		margin-top: 0;
	}

	h1 {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 2.5625rem;
		font-style: normal;
		font-weight: 500;
		line-height: 3.2rem;
	}
	@media ( min-width: 640px ) {

		h1 {
			font-size: 5.875rem;
			line-height: 6.5rem;
		}
	}
	@media ( min-width: 1056px ) {

		h1 {
			font-size: 6.5rem;
			line-height: 7.25rem;
		}
	}
	@media ( min-width: 640px ) {

		h1 {
			font-size: 3.25rem;
			line-height: 4rem;
		}
	}
	@media ( min-width: 1056px ) {

		h1 {
			font-size: 6.5rem;
			line-height: 7.25rem;
		}
	}

	h2 {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 2.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 3.5rem;
	}
	@media ( min-width: 640px ) {

		h2 {
			font-size: 3.25rem;
			line-height: 4rem;
		}
	}
	@media ( min-width: 1056px ) {

		h2 {
			font-size: 3.625rem;
			line-height: 4.5rem;
		}
	}

	h3 {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 2rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2.5rem;
	}
	@media ( min-width: 640px ) {

		h3 {
			font-size: 2.25rem;
			line-height: 2.8125rem;
		}
	}
	@media ( min-width: 1056px ) {

		h3 {
			font-size: 2.5rem;
			line-height: 3.25rem;
		}
	}

	h4 {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.5rem;
	}
	@media ( min-width: 640px ) {

		h4 {
			font-size: 1.5rem;
			line-height: 1.8rem;
		}
	}
	@media ( min-width: 1056px ) {

		h4 {
			font-size: 1.625rem;
			line-height: 2rem;
		}
	}

	h5 {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.5rem;
	}

	h6 {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.3125rem;
	}

	small {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.01rem;
		line-height: 1.3125rem;
	}

	p {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5rem;
	}

	strong, .mg--semibold {
		font-family: 'Karla', 'Lato', 'Helvetica', 'Arial', 'Verdana', 'Tahoma', sans-serif;
		font-style: normal;
		font-weight: 600;
	}
`;

export default GlobalStyles;
