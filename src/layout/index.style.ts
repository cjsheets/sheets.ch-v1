import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const defaultTheme = {
  fontFamily: "'Open Sans', sans-serif;",

  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightBold: '600',

  fontSizeXLarge: '1.8rem',
  fontSizeLarge: '1.6rem',

  blue1: '#23507A',
  blue2: '#2467A5',
  blue3: '#7FB9EF',
  gray1: '#35383A',
  gray2: '#464D53',
  gray3: '#6E7781',
  gray4: '#98989F',
  gray5: '#D8D8E0',
  gray6: '#EAEAF2',

  viewportSmall: 600,
  viewportMedium: 800,
  viewportLarge: 1100,
  viewportXLarge: 1400,
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    padding: 0;
    min-height: 100%;
    min-width: 100%;
    font-family: ${defaultTheme.fontFamily}
  }

  #___gatsby #gatsby-focus-wrapper {
    min-height: 100vh;
    min-width: 100vw;
  }

h1, h2, h3, h4, h5, h6 {
	color: ${defaultTheme.fontFamily};
	text-decoration: none;
	font-size: ${defaultTheme.fontSizeLarge};
	font-weight: ${defaultTheme.fontWeightRegular};
	text-transform: none;
	margin: 1rem 0;
}

h1 {
	font-size: ${defaultTheme.fontSizeXLarge};
	margin: 0.5em 0em 0.5em;
}

p {
	margin: 0 0 1.2rem;
}

a {
	color: ${defaultTheme.blue1};
	text-decoration: none;
}

blockquote {
	border-left: 3px solid ${defaultTheme.blue2};
	margin: 25px 0;
	padding: 5px 15px;
	background-color: ${defaultTheme.blue3};

	p {
		display: block;
		margin: 0;
		width: 100%;
	}
}

img {
	display: block;
	width: auto;
	max-width: 100%;

}

pre {
	background: #F1F0EA;
	border-right: 1px solid #DDDBCC;
	border-bottom: 1px solid #DDDBCC;
	border-left: 1px solid #DDDBCC;
	margin: 0 0 40px;
	padding: 15px 0px;
	font-size: 0.75rem
	line-height: 16.8px;

}

pre ol {
	padding-left: 10px;
	margin-left: 20px;

}

code ol li,
pre ol li {
	list-style : none;
	list-style-image : none;
	list-style-position : outside;
	list-style-type : disc;
	line-height: 16.8px;
	padding: 0px;
	margin: 0px;

}

hr {
	border: none;
	border-bottom: 1px dotted ${defaultTheme.gray2};
	margin: 45px 0;

}

:root {
	--content-max-width: 840px
}
  @media (max-width: ${defaultTheme.viewportSmall}) {
    :root {
      font-size: 100%;
    }
  }

  @media (min-width: ${defaultTheme.viewportSmall}) and (max-width: ${defaultTheme.viewportMedium}) {
    :root {
      font-size: 110%;
    }
  }

  @media (min-width: ${defaultTheme.viewportMedium}) and (max-width: ${defaultTheme.viewportLarge}) {
    :root {
      font-size: 120%;
      --content-max-width: 750px
    }
  }

  @media (min-width: ${defaultTheme.viewportLarge}) and (max-width: ${defaultTheme.viewportXLarge}) {
    :root {
      font-size: 120%;
      --content-max-width: 1000px
    }
  }

  @media (min-width: ${defaultTheme.viewportXLarge}) {
    :root {
      font-size: 130%;
      --content-max-width: 1200px
    }
  }
`;

export const BodyContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`;
