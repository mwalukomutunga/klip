import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import requests from "../agent";
// import { useSelector } from "react-redux";

const ContentDetail = ({data}) => {
  // const user = useSelector((state) => state.user);
  // const [data, useInputs] = useState({});

  // useEffect(() => {
  //   requests.get("Auth/" + user?.user?.email).then((res) => {
  //     useInputs(res);
  //   });
  // }, [user?.user?.email]);
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Farmer Detail</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link href=";">
                        <a>KLIP</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="">
                        <a>Farmer</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Detail</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-bottom bg-transparent">
                  <h5 className="header-title mb-0">
                    Farmer #ID{data?.idNumber}
                  </h5>
                </div>
                <div className="card-body">
                  <div>
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex mb-2">
                          <div className="me-2 align-self-center">
                            <i className="ri-hashtag h2 m-0 text-muted"></i>
                          </div>
                          <div className="flex-1">
                            <p className="mb-1">ID No.</p>
                            <h5 className="mt-0">{data?.idNumber}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex mb-2">
                          <div className="me-2 align-self-center">
                            <i className="ri-user-2-line h2 m-0 text-muted"></i>
                          </div>
                          <div className="flex-1">
                            <p className="mb-1">Full name</p>
                            <h5 className="mt-0">{data?.fullName}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex mb-2">
                          <div className="me-2 align-self-center">
                            <i className="ri-medal-fill h2 m-0 text-muted"></i>
                          </div>
                          <div className="flex-1">
                            <p className="mb-1">Gender</p>
                            <h5 className="mt-0">
                              {data?.gender}
                              {/* Male <small className="text-muted"></small> */}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex mb-2">
                          <div className="me-2 align-self-center">
                            <i className="ri-map-pin-time-line h2 m-0 text-muted"></i>
                          </div>
                          <div className="flex-1">
                            <p className="mb-1">Age</p>
                            <h5 className="mt-0">{data?.age}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex mb-2">
                          <div className="me-2 align-self-center">
                            <i className="ri-customer-service-line h2 m-0 text-muted"></i>
                          </div>
                          <div className="flex-1">
                            <p className="mb-1">Phone number</p>
                            <h5 className="mt-0"> {data?.phoneNumber}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex mb-2">
                          <div className="me-2 align-self-center">
                            <i className="ri-contrast-drop-line h2 m-0 text-muted"></i>
                          </div>
                          <div className="flex-1">
                            <p className="mb-1">Household size</p>
                            <h5 className="mt-0">{data?.houseHoldSize}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="d-flex mb-2">
                          <div className="me-2 align-self-center">
                            <i className="ri-calendar-event-line h2 m-0 text-muted"></i>
                          </div>
                          <div className="flex-1">
                            <p className="mb-1">Created date</p>
                            <h5 className="mt-0">
                              {new Date(data?.createdAt).toDateString()}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <h4 className="header-title mb-3">Farmer next of kin</h4>
                    <div className="row">
                      <div className="col-lg-12">
                        <div>
                          <div className="table-responsive">
                            <table className="table table-striped dt-responsive nowrap w-100">
                              <thead className="bg-light">
                                <tr>
                                  <th>Fullname</th>
                                  <th>Relationship</th>
                                  {/* <th>Phone</th> */}
                                  <th>IDNO</th>
                                  <th>Bank Name</th>
                                  <th>Bank Branch</th>
                                  <th>Bank Account No</th>
                                  <th>Payment Method</th>
                                  <th>Region</th>
                                  <th>County</th>
                                  <th>Sub county</th>
                                  <th>Ward</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{data?.nextOfKin?.fullname}</td>
                                  <td>{data?.nextOfKin?.relationShip}</td>
                                  <td>{data?.nextOfKin?.idno}</td>
                                  <td>{data?.nextOfKin?.bankName}</td>
                                  <td>{data?.nextOfKin?.bankBranch}</td>
                                  <td>{data?.nextOfKin?.bankAccountNo}</td>
                                  <td>{data?.nextOfKin?.paymentMethod}</td>
                                  <td>{data?.nextOfKin?.region}</td>
                                  <td>{data?.nextOfKin?.county}</td>
                                  <td>{data?.nextOfKin?.subCounty}</td>
                                  <td>{data?.nextOfKin?.ward}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-4">
                  <div>
                    <h4 className="font-15 mb-2">Banking Information</h4>

                    <div className="card p-2 mb-lg-0">
                      <table className="table table-borderless table-sm mb-0">
                        <tbody>
                          <tr>
                            <th colSpan="2">
                              <h5 className="font-15 m-0">{data?.fullName}</h5>
                            </th>
                          </tr>
                          <tr>
                            <th scope="row">Bank name:</th>
                            <td>{data?.bankInfo?.bankName}</td>
                          </tr>
                          <tr>
                            <th scope="row">Bank branch :</th>
                            <td>{data?.bankInfo?.bankBranch}</td>
                          </tr>
                          <tr>
                            <th scope="row">Bank Account no.:</th>
                            <td> {data?.bankInfo?.bankAccountNo}</td>
                          </tr>
                          <tr>
                            <th scope="row">Payment method:</th>
                            <td> {data?.bankInfo?.paymentMethod}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <div className="table-responsive">
                      <table className="table table-centered border mb-0">
                        <thead className="bg-light">
                          <tr>
                            <th colSpan="2">Farmer location</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Region:</th>
                            <td>{data?.farmerLocation?.region}</td>
                          </tr>
                          <tr>
                            <th scope="row">County :</th>
                            <td>{data?.farmerLocation?.county}</td>
                          </tr>
                          <tr>
                            <th scope="row">Sub county :</th>
                            <td>{data?.farmerLocation?.subCounty}</td>
                          </tr>
                          <tr>
                            <th scope="row">Ward :</th>
                            <td>{data?.farmerLocation?.ward}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <h4 className="font-15 mb-2">Farmer animals</h4>

                    <div className="card p-2 mb-lg-0">
                      <table className="table table-borderless table-sm mb-0">
                        <tbody>
                          {/* <tr>
                            <th colspan="2">
                              <h5 className="font-15 m-0">{data?.fullName}</h5>
                            </th>
                          </tr> */}
                          {data?.insured?.map((item, index) => (
                            <tr key={index}>
                              <th scope="row">{item.name}:</th>
                              <td>{item.number}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4">
                  <div>
                    <div className="table-responsive">
                      <table className="table table-centered border mb-0">
                        <thead className="bg-light">
                          <tr>
                            <th colspan="2">Farmer Animals</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Ox :</th>
                            <td>2</td>
                          </tr>
                          <tr>
                            <th scope="row">Cow :</th>
                            <td>4</td>
                          </tr>
                          <tr>
                            <th scope="row">Goat :</th>
                            <td>12</td>
                          </tr>
                          <tr>
                            <th scope="row">Total :</th>
                            <td>18</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-4">
                  <div>
                    <h4 className="font-15 mb-2">Delivery Info</h4>

                    <div className="card p-2 mb-lg-0">
                      <div className="text-center">
                        <div className="my-2">
                          <i className="mdi mdi-truck-fast h1 text-muted"></i>
                        </div>
                        <h5>
                          <b>UPS Delivery</b>
                        </h5>
                        <div className="mt-2 pt-1">
                          <p className="mb-1">
                            <span className="fw-semibold">Order ID :</span>{" "}
                            xxxx048
                          </p>
                          <p className="mb-0">
                            <span className="fw-semibold">Payment Mode :</span>{" "}
                            COD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
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
              {/* <a href="ecommerce-orders-detail.html">Coderthemes</a> */}
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

export default ContentDetail;
