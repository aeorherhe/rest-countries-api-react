import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 *,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --box-shadow: 0 0 10px 1px rgb(194, 194, 194, 0.8);
  --transition: all 0.3s linear;
  --transition-2: all 0.5s linear;
  --border-radius: 0.5rem;
  --border-radius-2: 1rem;
  --line-3: 2px solid rgb(9, 224, 88);
  --White: #ffffff;
  --Orange:rgb(236, 99, 14);
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);
--line: 3px solid hsl(217, 16%, 45%);
--line-2: 3px solid #23630d;
--max-width: 100rem;
--btn-border: 1px solid hsl(217, 16%, 45%);

    /* colors from the project */
    --Text: hsl(200, 15%, 8%);
    --Input: hsl(0, 0%, 52%);
    --Background: hsl(0, 0%, 98%);
    --Element: hsl(0, 0%, 100%);
  --box-shadow: 0 0 5px 1px rgba(194, 194, 194, 0.8);
  --box-shadow-hover: 0 0 5px 1px rgba(194, 194, 194, 0.4);
}

.dark-mode {
 --Text: hsl(0, 0%, 100%);
 --Element: hsl(209, 23%, 22%);
 --Background : hsl(207, 26%, 17%);
--box-shadow: 0 0 10px 1px rgba(12, 12, 12, 0.4);
--box-shadow-hover: 0 0 10px 1px rgba(12, 12, 12, 0.9);
}


body {
  display: grid;
  font-family: "Nunito Sans", "Open Sans", Arial, Helvetica, sans-serif;
  height: 100vh;
  color: var(--Text);
  background: var(--Background);

  > * ::first-letter{
    text-transform: uppercase;
  }
}

.btn{
  background: none;
  color: var(--Text);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.125rem;
  transition: var(--transition);
  outline: none;
  cursor: pointer;

  &:hover{
    transform: scale(1.01);
    transition: var(--transition);
  }
}

a{
  text-decoration: none;
  color: var(--Text);
  font-weight: 500;

   &:hover{
    transform: scale(1.01);
    transition: var(--transition);
  }
}

`;

export default GlobalStyles;
