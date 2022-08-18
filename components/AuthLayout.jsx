
const AuthLayout = ({ children }) => {
  return (
    <div className="loading auth-fluid-pages pb-0">
      <div className="auth-fluid">
        <div className="auth-fluid-right">
          <div className="auth-user-testimonial">
            <h3 className="mb-3 text-white">Risk Management Survey</h3>
            <p className="lead fw-normal">
              <i className="mdi mdi-format-quote-open"></i> We help unlock the
              full potential of agriculture by eliminating the stress and
              potential damage of climate variables for farmers across Africa.{" "}
              <i className="mdi mdi-format-quote-close"></i>
            </p>
            <h5 className="text-white"></h5>
          </div>
        </div>

        <div className="auth-fluid-form-box">
          <div className="align-items-center d-flex h-100">
            <div className="card-body">
              <div className="auth-brand text-center text-lg-start">
                <div className="auth-logo">
                  <a href="index.html" className="logo logo-dark text-center">
                    <span className="logo-lg">
                      <img src="/assets/images/logo.png" alt="" height="42" />
                    </span>
                  </a>

                  <a href="index.html" className="logo logo-light text-center">
                    <span className="logo-lg">
                      <img src="/assets/images/logo.png" alt="" height="42" />
                    </span>
                  </a>
                </div>
              </div>
              {children}             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
