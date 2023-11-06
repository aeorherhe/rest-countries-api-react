import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";

const Overlay = () => {
  const { dispatch } = useGlobalContext();
  return (
    <StyledOverlay
      className="overlay"
      onClick={() => dispatch({ type: "set_hideFilters" })}
    ></StyledOverlay>
  );
};

export default Overlay;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledOverlay = styled.div`
  background-color: transparent;
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
