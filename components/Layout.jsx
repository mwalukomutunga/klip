import NavBar from "./NavBar";
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
