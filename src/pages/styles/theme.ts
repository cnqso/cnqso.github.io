// theme.ts
import { createGlobalStyle } from 'styled-components';

export const lightTheme: any = {
  body: '#FFFFFF',
  text: '#242424',
  background: "#fff",
  paper: "#cecece",
  textSecondary: "#3c3c3c",
  accent: "#666eff",
  accentDark: "#535bf2",
  accentLight: "#7a7aff",
  accentLighter: "#b3b3ff",
  accentLightest: "#ece5ff",
  halo: "#e7dfff",
  haloHover: "#b3b3ff",
};

export const darkTheme: any = {
    body: '#242424',
    text: '#fff',
    background: "#242424",
    paper: "#2e2e2e",
    textSecondary: "#adadad",
    accent: "#666eff",
    accentDark: "#535bf2",
    accentDarkDesat: "#3a3fa8",
    accentLight: "#7a7aff",
    accentLighter: "#b3b3ff",
    accentLightest: "#b3b3ff",
    halo: "#3a3fa8",
    haloHover: "#535bf2",
};

export const GlobalStyle = createGlobalStyle<any>`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.25s linear;
  }

  #root {
    /* max-width: 1280px; */
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    width: 100vw;
    overflow: hidden;
  }
  
  .fullWidth {
    width: 100vw;
  }
  
  .App {
    overflow: visible;
    font-family: 'Roboto', sans-serif;
    width: 850px;
    margin: 0 auto;
    
  }
  
  .card {
    width: 12em;
    display: inline-block;
    margin: 1em;
    padding: 1em;
    border-radius: 0.4em;
  }
  
  .NavButton {
    font-size: 1.2em;
    width: 7em;
    margin: 0.4em;
    padding: 0.4em;
    cursor: pointer;
  }
  
  .NavButton:hover {
    
    background: ${(props) => props.theme.paper};
    color: ${(props) => props.theme.text};

    transition: all 0.25s linear;
  }
  
  .NavBar {
    margin-bottom: 1em;
    margin-inline: auto;
    width: 100%;
  }
  
  
  @media (max-width: 900px) {
    .App {
      width: 100%;
    }
    .fullWidth {
      width: 100%;
    }
  }
  
  @media (max-width: 740px) {
    .NavBar {
      max-width:400px;
    }
  }


  .textBlock {
	font-size: 1.35em;
	text-align: justify;
    max-height: 100%;
}

.textBlock p > ol > li {
    margin-bottom:1em;
}

.textBlock p > ol > li > ol > li {
    margin-bottom:0.5em;
}
.textBlock p > ol > li > ol > li > ol > li {
    margin-bottom:0.3em;
}

.footnote {
	font-size: 0.95em;
	padding-left: 5%;
	padding-right: 5%;
	max-width: 100%;
	max-height: 100%;
}
.footnoteButton {
	cursor: pointer;
}


.Home .homeCard:hover, .Home .blogCard:hover {
    font-style: oblique;
    background-color: ${(props) => props.theme.paper};
    transition: background-color 0.3s ease-out;
}


.BlogPost img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-inline: auto;
    margin-block: 40px;
}


/** Otherwise */



.BlogHome {
    display: grid;
    grid-template-columns: 1fr;
}

.BlogPost {
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    width: 140%;
    margin-left: -20%;

}

.blogPostBtn  {
   margin-bottom: 10px;
}

.monthBlock {
    /* background-color: ${(props) => props.theme.paper}; */
}

.BlogBody {
    grid-column: 2;
    margin-bottom: 20px;
    padding-inline: 20px;
}

.BlogPost img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}


.blogNavHome {
    background-color: ${(props) => props.theme.paper};
    font-size: 1.3em; 
    padding-bottom: 20px;
}

.blogNavHome > .blogPostBtn {
    display: block;
}

.blogNavPost {
    margin-top: 40px;
    grid-column: 1;
    grid-row: 1;
    background-color: none;
    padding-block: 15px;
    padding-inline: 5px;
}

.postTitle {
    margin-bottom: 10px;
}
.postDate {
    font-size: 1.2em;
    margin-bottom: 15px;
    font-style: italic;
}

.blogNavPost > .blogPostBtn {
    display: block;
}



/** Hire me */

.skill, .largeSkill {
	background-color: ${(props) => props.theme.halo};
  color: ${(props) => props.theme.text};
}

.skill:hover, .largeSkill:hover {
  background-color: ${(props) => props.theme.haloHover};
  transition: background-color 0.3s ease-out;
  color: ${(props) => props.theme.text};
}



/** Contact */

/* Styles for the error messages */
.form-error {
  color: red;
}

/* Style for the submit button */
.form-submit {
  background-color: ${(props) => props.theme.halo};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s;

  &:disabled {
    background-color: #adadad;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${(props) => props.theme.accentLight};
  }
}





@media (max-width: 1200px) {
    .BlogPost {
        width: 100%;
        grid-template-columns: 20% 77%;
        
        margin-left: 0;
    
    }
    .blogNavPost {
        background-color: ${(props) => props.theme.paper};
        padding-block: 15px;
        padding-inline: 5px;
    }
    
}


@media (max-width: 900px) {
    .BlogHome {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr
    }
    .BlogPost {
        display: block;
    }
    .BlogPost > .blogPostBtn  {
        padding-block: 5px;
        margin: 10px;
        padding-inline: 20px;
        border: 1px solid rgba(255, 255, 255, 0.411);
        border-radius: 5px;
        background-color: ${(props) => props.theme.paper};
     }

     .BlogBody {
        grid-column: 2;
        margin-bottom: 20px;
        padding-inline: 0px;
    }



     h1 {
        margin-top: 10px;
     }

     
  }
`;

// :root {
//     --background: #242424;
//     --paper: #2e2e2e;
//     --text: #fff;
//     --text-secondary: #aaa;
//     --accent: #666eff;
//     --accent-dark: #535bf2;
//     --accent-light: #7a7aff;
//     --accent-lighter: #b3b3ff;
//   }
  