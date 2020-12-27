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
	border-left: 3px solid $blue_medium;
	margin: 25px 0;
	padding: 5px 15px;
	background-color: $blue_light;

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
	font-size: $font_size_code;
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
	border-bottom: 1px dotted $hr_color;
	margin: 45px 0;

}

:root {
	--content-max-width: 840px
}
  @media (max-width: $viewport_small) {
    :root {
      font-size: 100%;
    }
  }

  @media (min-width: $viewport_small) and (max-width: $viewport_medium) {
    :root {
      font-size: 110%;
    }
  }

  @media (min-width: $viewport_medium) and (max-width: $viewport_large) {
    :root {
      font-size: 120%;
      --content-max-width: 750px
    }
  }

  @media (min-width: $viewport_large) and (max-width: $viewport_extra_large) {
    :root {
      font-size: 120%;
      --content-max-width: 1000px
    }
  }

  @media (min-width: $viewport_extra_large) {
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
