import { BiSun, BiMoon } from "react-icons/bi";
import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";

export function ThemeSwitcher() {
  const {
    dispatch,
    state: { darkMode },
  } = useGlobalContext();

  return (
    <StyledThemeSwitcher>
      <div className="header">
        <h2>where in the world</h2>
        <div className="theme" onClick={() => dispatch({ type: "set_theme" })}>
          {darkMode ? <BiSun /> : <BiMoon />}
          <p>{darkMode ? "dark mode" : "light mode"}</p>
        </div>
      </div>
    </StyledThemeSwitcher>
  );
}

/****************** styled component ***************/
/****************** styled component ***************/

const StyledThemeSwitcher = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  width: 100vw;
  background-color: var(--Element);
  border: 2px solid var(--Element);

  .header {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .theme {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
`;
