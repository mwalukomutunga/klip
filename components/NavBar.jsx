import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../context/user.slice";
const NavBar = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    router.push("/login");
  };
    return (
        <div className="navbar-custom">
        <div className="container-fluid">
          <ul className="list-unstyled topnav-menu float-end mb-0">
            <li className="dropdown notification-list topbar-dropdown">
              <a
                className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                data-bs-toggle="dropdown"
                href="pages-starter.html#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/user.png"
                  alt="user-image"
                  className="rounded-circle"
                />
                <span className="pro-user-name ms-1">
                {user?.user?.name} <i className="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                <a
                  href=";"
                  className="dropdown-item notify-item"
                >
                  <i className="ri-account-circle-line"></i>
                  <span>My Account</span>
                </a>

                <a
                  href=";"
                  className="dropdown-item notify-item"
                >
                  <i className="ri-settings-3-line"></i>
                  <span>Settings</span>
                </a>

                <div className="dropdown-divider"></div>

                <a
                  onClick={() => handleSignOut()}
                  className="dropdown-item notify-item"
                >
                  <i className="ri-logout-box-line"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>

         

          <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button className="button-menu-mobile waves-effect waves-light">
                <i className="fe-menu"></i>
              </button>
            </li>

            <li>
              <a
                className="navbar-toggle nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#topnav-menu-content"
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </li>

            <li className="dropdown d-none d-xl-block">
              <a
                className="nav-link dropdown-toggle waves-effect waves-light"
                data-bs-toggle="dropdown"
                href="pages-starter.html#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                Create New
                <i className="mdi mdi-chevron-down"></i>
              </a>
              <div className="dropdown-menu">
                <a href=";" className="dropdown-item">
                  <i className="fe-briefcase me-1"></i>
                  <span>New FSC</span>
                </a>
                <a href=";" className="dropdown-item">
                <i className="fe-headphones me-1"></i>
                  <span>New FSC Stream</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href=";" className="dropdown-item">
                  <i className="fe-user me-1"></i>
                  <span>Create Users</span>
                </a>
              </div>
            </li>

          </ul>
          <div className="clearfix"></div>
        </div>
      </div>
      );
}
 
export default NavBar;