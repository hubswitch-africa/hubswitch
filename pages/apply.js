import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName="Apply" />
      <section className="apply-section section-gap-extra-bottom">
        <div className="container">
        
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsqWPI7sV5s6adHE0rf4aODmEK-gpUZ-gLp7lxoV5WUpU0eQ/viewform?embedded=true" width="100%" height="2100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


        <div className="row align-items-center justify-content-center mt-5">
            <div className="col-lx-4 col-lg-5 col-sm-10">
              <div className="apply-info-text mb-md-70">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" />  a community designed for your success
                    <span className="heading-shadow-text">Hubswitch</span>
                  </span>
                  <h2 className="title">Drive forward your IT career with us.</h2>
                </div>
                <p>
                </p>
                <Link href="/faq">
                  <a className="main-btn mt-35">
                    Read our FAQ <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1">
              <div className="apply-info-boxes">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 col-sm-10">
                    <div
                      className="info-box text-center wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon">
                        <i className="flaticon-place" />
                      </div>
                      <div className="info-content">
                        <h5>Our Location</h5>
                        <p>4, Raji Aliu Street, Ajao Estate, Isolo Lagos</p>
                      </div>
                    </div>
                    <div
                      className="info-box text-center mt-30 mb-sm-30 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-envelope" />
                      </div>
                      <div className="info-content">
                        <h5>Email Address</h5>
                        <p>
                          hubswitchafrica@gmail.com <br />
                          www.hubswitch.org
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-10">
                    <div
                      className="info-box text-center wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="flaticon-phone-call-1" />
                      </div>
                      <div className="info-content">
                        <h5>Support 24/7</h5>
                        <p>
                          +234 818 456 4709 <br />
                          +234 902 581 6370
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

      </section>



    </Layout>
  );
};

export default Contact;
