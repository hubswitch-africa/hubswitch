import Link from "next/dist/client/link";
import { useEffect, Fragment } from "react";
import { stickyNav } from "../utils";
import { Home, News, Pages, Project } from "./menus";

const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""}`}
      id="header-sticky"
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? "topbar-secondary-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <ul className="apply-info">
                <li>
                  <a href="#">
                    <i className="far fa-envelope" /> hubswitchafrica@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-map-marker-alt" /> 
                    4, Raji Aliu Street, Ajao Estate, Isolo Lagos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto d-none d-md-block">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo2-trans.png" alt="Hubswitch" />
                </a>
              </Link>
            </div>
            <div className="nav-menu" id="menu">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <Fragment>
                <li>
                  <Link href="/team">
                    Team
                  </Link>
                </li>
                </Fragment>
                <Fragment>
                <li>
                  <Link href="/donate">
                    Donate
                  </Link>
                </li>
                </Fragment>
                
               
                
                {/* <li>
                  <a href="#">
                    News
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{News}</ul>
                </li> */}
                {/* <li>
                  <a href="#">
                    Pages
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Pages}</ul>
                </li> */}
                <li>
                  <Link href="/apply">Apply</Link>
                </li>
               
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>



              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              <Link href="/donate">
                <a className="main-btn nav-btn d-none d-sm-inline-block">
                  Donate Now <i className="far fa-arrow-right" />
                </a>
              </Link>
              <a href="#" className="nav-toggler">
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
