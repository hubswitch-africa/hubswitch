import Link from "next/dist/client/link";
const Footer = ({ footerSolidBg }) => {
  return (
    <footer
      className={`site-footer ${
        footerSolidBg ? "" : "with-footer-cta with-footer-bg"
      }`}
    >
      {!footerSolidBg && (
        <div className="footer-cta">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-lg-7 col-md-8 col-sm-10">
                <span className="cta-tagline">
                Be a sponsor for our next event via a donation or partner with our organisation to reach more people in tech across africa

                </span>
                <h3 className="cta-title">
                Be a Partner or Sponsor
                </h3>
              </div>
              <div className="col-lg-auto col-md-6">
                <Link href="/donate">
                  <a className="main-btn bordered-btn bordered-white mt-md-30">
                    Donate <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="footer-content-area">
        <div className="container">
          <div className="footer-widgets">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="widget about-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo2-trans.png" alt="Hubswitch" />
                  </div>
                  <p>
                    Changing Africa. Five lives a time
                  </p>
                  {/* <div className="newsletter-form">
                    <h5 className="form-title">Join Newsletters</h5>
                    <form onSubmit={(e) => e.preventDefault()} action="#">
                      <input type="text" placeholder="Email Address" />
                      <button type="submit">
                        <i className="far fa-arrow-right" />
                      </button>
                    </form>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Our Projects</h4>
                  <ul>
                    <li>
                      <Link href="/project-1">Medical &amp; Health</Link>
                    </li>
                    <li>
                      <Link href="/project-2">Educations</Link>
                    </li>
                    <li>
                      <Link href="/project-1">Technology</Link>
                    </li>
                    <li>
                      <Link href="/project-3">Web Development</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Support</h4>
                  <ul>
                    <li>
                      <Link href="/team">The Team</Link>
                    </li>
                    <li>
                      <Link href="mailto:hubswitchafrica@gmail.com?subject=Hubswitch Partnership">Partnership</Link>
                    </li>
                    <li>
                      <Link href="/donate">Donate</Link>
                    </li>
                    <li>
                      <Link href="/faq">Faq</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-auto col-md-5 col-sm-8">
                <div className="widget apply-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="info-list">
                    <li>
                      <span className="icon">
                        <i className="far fa-phone" />
                      </span>
                      <span className="info">
                        <span className="info-title">Phone Number</span>
                        <a href="#">+234 902 581 6370</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-envelope-open" />
                      </span>
                      <span className="info">
                        <span className="info-title">Email Address</span>
                        <a href="#">hubswitchafrica@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span className="info">
                        <span className="info-title">Locations</span>
                        <a href="#">Metaverse</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row flex-md-row-reverse">
              <div className="col-md-6">
                <ul className="social-icons">
                  
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  
                
                </ul>
              </div>
              <div className="col-md-6">
                <p className="copyright-text">
                  © {new Date().getFullYear()} <a href="#">Hubswitch</a>. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
