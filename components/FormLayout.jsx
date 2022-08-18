import Link from "next/link";
const FormLayout = ({ children, Page }) => {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Farmer Information</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link href="">
                        <a>Farmer</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="">
                        <a>Info</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Input</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title">{Page}</h4>
                  {/* <p className="sub-header">
                                    Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                                </p> */}

                  <div className="row">
                    <div className="col-12">
                      <div className="p-2">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <script>document.write(new Date().getFullYear())</script> &copy;
              Zep-Re
            </div>
            <div className="col-md-6">
              <div className="text-md-end footer-links d-none d-sm-block">
                <Link href="">
                  <a>About Us</a>
                </Link>
                <Link href="">
                  <a>Help</a>
                </Link>
                <Link href="">
                  <a>Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormLayout;
