import Head from "next/head";
import ContentPage from "./ContentPage";
import NavBar from "./NavBar";
import RightBar from "./RightBar";
import SideMenu from "./SideMenu";
import Wrapper from "./Wrapper";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <SideMenu />
        {children}
      </Wrapper>
    </>
  );
};

export default Layout;
