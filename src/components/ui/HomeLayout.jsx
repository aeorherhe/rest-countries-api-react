import { Outlet } from "react-router-dom";
import { createPortal } from "react-dom";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { MyProfile } from "../others/MyProfile";
import "../../styles/styles.css";
import styled from "styled-components";

const HomeLayout = () => {
  return (
    <StyledHomeLayout>
      <ThemeSwitcher />
      <Outlet />
      {createPortal(<MyProfile />, document.body)}
    </StyledHomeLayout>
  );
};
export default HomeLayout;

// /****************** styled component ***************/
// /****************** styled component ***************/

const StyledHomeLayout = styled.main``;
