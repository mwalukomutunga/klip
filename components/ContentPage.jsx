import Link from "next/link";

const ContentPage = ({ children,Title }) => {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Acre Africa</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link href="/">
                      <a >Home</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                     <Link  href="/">
                     <a>Portal</a></Link>
                    </li>
                    <li className="breadcrumb-item active">Acre Africa</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="custom-accordion">
                      <div className="mt-4">
                        <h5 className="position-relative mb-0">
                          <a
                            href="task-list.html#taskcollapse3"
                            className="text-dark d-block"
                            data-bs-toggle="collapse"
                          >
                           {Title} 
                           {/* <span className="text-muted">(03)</span> */}
                            <i className="mdi mdi-chevron-down accordion-arrow"></i>
                          </a>
                        </h5>
                        <div className="collapse show" id="taskcollapse3">
                          <div className="table-responsive mt-3">{children}</div>
                        </div>
                      </div>
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
              <script>document.write(new Date().getFullYear())</script>
              &copy;KLIP
            </div>
            <div className="col-md-6">
              <div className="text-md-end footer-links d-none d-sm-block">
                <a href=";">About Us</a>
                <a href=";">Help</a>
                <a href=";">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContentPage;
