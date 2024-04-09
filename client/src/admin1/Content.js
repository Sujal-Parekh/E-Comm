import React from 'react'

function Content() {
  return (
    <div>
        <br></br>
      <div className="row">
                      {/* task, page, download counter  start */}
                      <div className="col-xl-3 col-md-6">
                       
                      </div>
                      <div className="col-xl-3 col-md-6">
                       
                      </div>
                      <div className="col-xl-3 col-md-6">
                       
                      </div>
                      <div className="col-xl-3 col-md-6">
                       
                      </div>
                   
                      {/*  sale analytics end */}
                      {/*  project and team member start */}
                      <div className="col-xl-8 col-md-12">
                        <div className="card table-card">
                          <div className="card-header">
                            <h5></h5>
                            <div className="card-header-right">
                              <ul className="list-unstyled card-option">
                                <li>
                                  <i className="fa fa fa-wrench open-card-option" />
                                </li>
                                <li>
                                  <i className="fa fa-window-maximize full-card" />
                                </li>
                                <li>
                                  <i className="fa fa-minus minimize-card" />
                                </li>
                                <li>
                                  <i className="fa fa-refresh reload-card" />
                                </li>
                        
                        
                              </ul>
                            </div>
                          </div>
                          <div className="card-block">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>
                                      {/* <div className="chk-option">
                                        <div className="checkbox-fade fade-in-primary">
                                          <label className="check-task">
                                            <input
                                              type="checkbox"
                                              defaultValue=""
                                            />
                                            <span className="cr">
                                              <i className="cr-icon fa fa-check txt-default" />
                                            </span>
                                          </label>
                                        </div>
                                      </div> */}
                                      Assigned
                                    </th>
                                    <th>Name</th>
                                    <th>Due Date</th>
                                    <th className="text-right">Priority</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="chk-option">
                                        <div className="checkbox-fade fade-in-primary">
                                          <label className="check-task">
                                            <input
                                              type="checkbox"
                                              defaultValue=""
                                            />
                                            <span className="cr">
                                              <i className="cr-icon fa fa-check txt-default" />
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="d-inline-block align-middle">
                                        <img
                                          src="assets/images/avatar-4.jpg"
                                          alt="user image"
                                          className="img-radius img-40 align-top m-r-15"
                                        />
                                        <div className="d-inline-block">
                                          <h6>John Deo</h6>
                                          <p className="text-muted m-b-0">
                                            Graphics Designer
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Able Pro</td>
                                    <td>Jun, 26</td>
                                    <td className="text-right">
                                      <label className="label label-danger">
                                        Low
                                      </label>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="chk-option">
                                        <div className="checkbox-fade fade-in-primary">
                                          <label className="check-task">
                                            <input
                                              type="checkbox"
                                              defaultValue=""
                                            />
                                            <span className="cr">
                                              <i className="cr-icon fa fa-check txt-default" />
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="d-inline-block align-middle">
                                        <img
                                          src="assets/images/avatar-5.jpg"
                                          alt="user image"
                                          className="img-radius img-40 align-top m-r-15"
                                        />
                                        <div className="d-inline-block">
                                          <h6>Jenifer Vintage</h6>
                                          <p className="text-muted m-b-0">
                                            Web Designer
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Mashable</td>
                                    <td>March, 31</td>
                                    <td className="text-right">
                                      <label className="label label-primary">
                                        high
                                      </label>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="chk-option">
                                        <div className="checkbox-fade fade-in-primary">
                                          <label className="check-task">
                                            <input
                                              type="checkbox"
                                              defaultValue=""
                                            />
                                            <span className="cr">
                                              <i className="cr-icon fa fa-check txt-default" />
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="d-inline-block align-middle">
                                        <img
                                          src="assets/images/avatar-3.jpg"
                                          alt="user image"
                                          className="img-radius img-40 align-top m-r-15"
                                        />
                                        <div className="d-inline-block">
                                          <h6>William Jem</h6>
                                          <p className="text-muted m-b-0">
                                            Developer
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Flatable</td>
                                    <td>Aug, 02</td>
                                    <td className="text-right">
                                      <label className="label label-success">
                                        medium
                                      </label>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="chk-option">
                                        <div className="checkbox-fade fade-in-primary">
                                          <label className="check-task">
                                            <input
                                              type="checkbox"
                                              defaultValue=""
                                            />
                                            <span className="cr">
                                              <i className="cr-icon fa fa-check txt-default" />
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="d-inline-block align-middle">
                                        <img
                                          src="assets/images/avatar-2.jpg"
                                          alt="user image"
                                          className="img-radius img-40 align-top m-r-15"
                                        />
                                        <div className="d-inline-block">
                                          <h6>David Jones</h6>
                                          <p className="text-muted m-b-0">
                                            Developer
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Guruable</td>
                                    <td>Sep, 22</td>
                                    <td className="text-right">
                                      <label className="label label-primary">
                                        high
                                      </label>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="text-right m-r-20">
                                <a
                                  href="#!"
                                  className=" b-b-primary text-primary"
                                >
                                  View all Projects
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-12">
                       
                      </div>
                      {/*  project and team member end */}
                    </div>
    </div>
  )
}

export default Content
