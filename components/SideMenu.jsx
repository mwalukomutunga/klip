import Link from "next/link";

const SideMenu = () => {
  return (
    <div className="left-side-menu">
      <div className="logo-box">
       {/* <Link  href="/">
       <a className="logo logo-dark text-center">
          <span className="logo-sm">
            <image src="https://www.zep-re.com/images/headers/logo-new.png" alt="" height="42" />
            <span className="logo-lg-text-light" style={{color:'red'}}>KLIP</span>
          </span>
          <span className="logo-lg">
            <image src="https://www.zep-re.com/images/headers/logo-new.png" alt="" height="42" />
            <span className="logo-lg-text-light"  style={{color:'red'}}>KLIP</span>
          </span>
        </a>
       </Link> */}

        <Link href="/">
        <a  className="logo logo-light text-center">
          <span className="logo-sm">
          <a    className="text-reset h2 mt-2 mb-1 d-block logo-lg-text-light">KLIP</a>
          </span>
          <span className="logo-lg">
            <a    className=" h2 mt-2 mb-1 d-block logo-lg-text-light">KLIP</a>
            {/* <img src="https://acreafrica.com/wp-content/uploads/2020/07/Logo-2.png" alt="" height="50" /> */}
          </span>
        </a>
        </Link>
      </div>

      <div className="h-100" data-simplebar>
        <div className="user-box text-center">
          <img
            src="/assets/images/users/avatar-1.jpg"
            alt="user-img"
            title="Mat Helme"
            className="rounded-circle avatar-md"
          />
          <div className="dropdown">
            <a
              href="pages-starter.html#"
              className="text-reset dropdown-toggle h5 mt-2 mb-1 d-block"
              data-bs-toggle="dropdown"
            >
              Admin
            </a>
            <div className="dropdown-menu user-pro-dropdown">
              <Link  href="account">
              <a className="dropdown-item notify-item">
                <i className="fe-user me-1"></i>
                <span>My Account</span>
              </a>
              </Link>

              <Link  href="settings">
              <a className="dropdown-item notify-item">
                <i className="fe-settings me-1"></i>
                <span>Settings</span>
              </a>
              </Link>

              {/* <a href=";" className="dropdown-item notify-item">
                <i className="fe-lock me-1"></i>
                <span>Lock Screen</span>
              </a> */}

              <Link href="logout">
              <a  className="dropdown-item notify-item">
                <i className="fe-log-out me-1"></i>
                <span>Logout</span>
              </a>
              </Link>
            </div>
          </div>
          <p className="text-reset">Admin Head</p>
        </div>

        <div id="sidebar-menu">
          <ul id="side-menu">
            <li className="menu-title">Navigation</li>
            <li>
              <Link href="/">
                <a>
                <i className="ri-task-line"></i>
                  <span>Profile </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="bio">
                <a>
                <i className="ri-task-line"></i>
                  <span>Update Bio </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="bank">
                <a>
                <i className="ri-profile-line"></i>
                  <span> Add Bank info </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="location">
                <a>
                <i className="ri-pencil-ruler-2-line"></i>
                  <span> Farmer location </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="animals">
                <a>
                <i className="ri-layout-line"></i>
                  <span>Insured animals </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="nextkin">
                <a>
                <i className="ri-dashboard-line"></i>
                  <span> Next of Kin </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default SideMenu;