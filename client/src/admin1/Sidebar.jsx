import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (

    <>

      <nav className="pcoded-navbar">
        <div className="sidebar_toggle">
          <a href="#">
            <i className="icon-close icons" />
          </a>
        </div>
        <div className="pcoded-inner-navbar main-menu">
          <div className="">
            <div className="main-menu-header">
              <img
                className="img-80 img-radius"
                src="assets/images/download.png"
                alt="User-Profile-Image"
              />
              <div className="user-details">
                <span id="more-details">
                  shk group
                  <i className="fa fa-caret-down" />
                </span>
              </div>
            </div>
            <div className="main-menu-content">
              <ul>
                <li className="more-details">
                  <a href="user-profile.html">
                    <i className="ti-user" />
                    View Profile
                  </a>
                  <a href="#!">
                    <i className="ti-settings" />
                    Settings
                  </a>
                  <a href="auth-normal-sign-in.html">
                    <i className="ti-layout-sidebar-left" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-15 p-b-0">
            <form className="form-material">
              <div className="form-group form-primary">

                <span className="form-bar" />

              </div>
            </form>
          </div>
          {/* <div
                className="pcoded-navigation-label"
                data-i18n="nav.category.navigation"
              >   
                Layout
              </div> */}
          <ul className="pcoded-item pcoded-left-item">
            <li className="active">
              <Link to="/home" className="waves-effect waves-dark">
                <span className="pcoded-micon">
                  <i className="ti-home" />
                  <b>D</b>
                </span>
                <span className="pcoded-mtext" data-i18n="nav.dash.main">
                  Dashboard
                </span>
                <span className="pcoded-mcaret" />
              </Link>
            </li>
            <br></br>
            <li className="pcoded-hasmenu">
              <a
                href="javascript:void(0)"
                className="waves-effect waves-dark"
              >
                <span className="pcoded-micon">
                  <i className="ti-layout-grid2-alt" />
                </span>
                <span
                  className="pcoded-mtext"
                  data-i18n="nav.basic-components.main"
                >
                  product
                </span>
                <span className="pcoded-mcaret" />
              </a>
              <ul className="pcoded-submenu">
              {/* <li className="">
                  <Link to="/updatelogo" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                      update product
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li> */}
                {/* <li className=" ">
                      <a href="button.html" className="waves-effect waves-dark">
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.alert"
                        >
                          Button
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li> */}
                     <li className="">
                  <Link to="/viewproduct" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                      view product
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                  
                </li>
                <li className="">
                  <Link to="/Addproduct" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                      add product
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>
                <li className="">
                  <Link to="/category" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       add category product
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>
                <li className="">
                  <Link to="/subcategory" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       add subcategory product
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>

                {/* <li className=" ">
                      <a href="color.html" className="waves-effect waves-dark">
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.alert"
                        >
                          Color
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li> */}
                {/* <li className=" ">
                      <a
                        href="label-badge.html"
                        className="waves-effect waves-dark"
                      >
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.breadcrumbs"
                        >
                          Label Badge
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="tooltip.html"
                        className="waves-effect waves-dark"
                      >
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.alert"
                        >
                          Tooltip
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li> */}
                {/* <li className=" ">
                      <a
                        href="typography.html"
                        className="waves-effect waves-dark"
                      >
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.breadcrumbs"
                        >
                          Typography
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="notification.html"
                        className="waves-effect waves-dark"
                      >
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.alert"
                        >
                          Notification
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="icon-themify.html"
                        className="waves-effect waves-dark"
                      >
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.breadcrumbs"
                        >
                          Themify
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li> */}
              </ul>
            </li>
            {/*   +*/}
          </ul>
          <ul className="pcoded-item pcoded-left-item">
            <li className="pcoded-hasmenu ">
              <a
                href="javascript:void(0)"
                className="waves-effect waves-dark"
              >
                <span className="pcoded-micon">
                  <i className="ti-direction-alt" />
                  <b>M</b>
                </span>
                <span
                  className="pcoded-mtext"
                  data-i18n="nav.menu-levels.main"
                >
                  orders
                </span>
                <span className="pcoded-mcaret" />
              </a>
              <ul className="pcoded-submenu">
               
              <li className="">
                  <Link to="/orderpending" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       order pending
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>
                <li className="">
                  <Link to="/orderdispatch" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       order dispatch
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>
                <li className="">
                  <Link to="/orderarrived" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       order arrived
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>
                {/* <li className="">
                  <Link to="/allorder" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       all order
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li> */}
                 {/* =====
                <li className="pcoded-hasmenu ">
                  <a
                    href="javascript:void(0)"
                    className="waves-effect waves-dark"
                  >
                    <span className="pcoded-micon">
                      <i className="ti-direction-alt" />
                    </span>
                    <span
                      className="pcoded-mtext"
                      data-i18n="nav.menu-levels.menu-level-22.main"
                    >
                      category
                    </span>
                    <span className="pcoded-mcaret" />
                  </a>
                  <ul className="pcoded-submenu">
                    <li className="">
                      <a
                        href="javascript:void(0)"
                        className="waves-effect waves-dark"
                      >
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.menu-levels.menu-level-22.menu-level-31"
                        >
                          sub category
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                </li> */}
               
              </ul>
            </li>
          </ul>
          <ul className="pcoded-item pcoded-left-item">
            <li className="pcoded-hasmenu ">
              <a
                href="javascript:void(0)"
                className="waves-effect waves-dark"
              >
                <span className="pcoded-micon">
                  <i className="ti-direction-alt" />
                  <b>M</b>
                </span>
                <span
                  className="pcoded-mtext"
                  data-i18n="nav.menu-levels.main"
                >
                  categories
                </span>
                <span className="pcoded-mcaret" />
              </a>
              <ul className="pcoded-submenu">
               
              <li className="">
                  <Link to="/managecat" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       manage catagories
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>
                <li className="">
                  <Link to="/managesubcat" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       manage subcategories
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li>
               
                {/* <li className="">
                  <Link to="/allorder" className="waves-effect waves-dark">
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">
                       all order
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                </li> */}
                 {/* =====
                <li className="pcoded-hasmenu ">
                  <a
                    href="javascript:void(0)"
                    className="waves-effect waves-dark"
                  >
                    <span className="pcoded-micon">
                      <i className="ti-direction-alt" />
                    </span>
                    <span
                      className="pcoded-mtext"
                      data-i18n="nav.menu-levels.menu-level-22.main"
                    >
                      category
                    </span>
                    <span className="pcoded-mcaret" />
                  </a>
                  <ul className="pcoded-submenu">
                    <li className="">
                      <a
                        href="javascript:void(0)"
                        className="waves-effect waves-dark"
                      >
                        <span className="pcoded-micon">
                          <i className="ti-angle-right" />
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.menu-levels.menu-level-22.menu-level-31"
                        >
                          sub category
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                </li> */}
               
              </ul>
            </li>
          </ul>
          {/* <div
                className="pcoded-navigation-label"
                data-i18n="nav.category.forms"
              >
                Forms &amp; Tables
              </div>  */}
          <ul>
            {/* <li>
              <a
                href="form-elements-component.html"
                className="waves-effect waves-dark"
              >
                <span className="pcoded-micon">
                  <i className="ti-layers" />
                  <b>FC</b>
                </span>
                <span
                  className="pcoded-mtext"
                  data-i18n="nav.form-components.main"
                >
                  Form Components
                </span>
                <span className="pcoded-mcaret" />
              </a>
            </li> */}
            {/* <li>
              <a
                href="bs-basic-table.html"
                className="waves-effect waves-dark"
              >
                <span className="pcoded-micon">
                  <i className="ti-layers" />
                  <b>FC</b>
                </span>
                <span
                  className="pcoded-mtext"
                  data-i18n="nav.form-components.main"
                >
                  Basic Table
                </span>
                <span className="pcoded-mcaret" />
              </a>
            </li> */}
          </ul>

          {/* <ul className="pcoded-item pcoded-left-item">
            
            <li className="pcoded-hasmenu">
              <a
                href="javascript:void(0)"
                className="waves-effect waves-dark"
              >
                <span className="pcoded-micon">
                  <i className="ti-layout-grid2-alt" />
                </span>
                <span
                  className="pcoded-mtext"
                  data-i18n="nav.basic-components.main"
                >
                  Pages
                </span>
                <span className="pcoded-mcaret" />
              </a>
              <ul className="pcoded-submenu">
                <li className=" ">
                  <a
                    href="auth-normal-sign-in.html"
                    className="waves-effect waves-dark"
                  >
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span
                      className="pcoded-mtext"
                      data-i18n="nav.basic-components.alert"
                    >
                      Login
                    </span>
                    <span className="pcoded-mcaret" />
                  </a>
                </li>
                <li className=" ">
                  <a
                    href="auth-sign-up.html"
                    className="waves-effect waves-dark"
                  >
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    <span
                      className="pcoded-mtext"
                      data-i18n="nav.basic-components.breadcrumbs"
                    >
                      Register
                    </span>
                    <span className="pcoded-mcaret" />
                  </a>
                </li>
                <li className=" ">
                  <a
                    href="sample-page.html"
                    className="waves-effect waves-dark"
                  >
                    <span className="pcoded-micon">
                      <i className="ti-angle-right" />
                    </span>
                    
                    <span className="pcoded-mcaret" />
                  </a>
                </li>
              </ul>
            </li>
          </ul> */}
        </div>
      </nav>

    </>
  )
}

export default Sidebar
