import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName="Apply" />
      <section className="apply-section section-gap-extra-bottom">
        <div className="container">
        
          {/* Contact Info End */}
          <div className="apply-from-area">
            <div className="row no-gutters">
            
              <div className="col-lg-12">
                <div className="apply-form">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <h3 className="form-title">Tell us about Yourself</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            id="name" name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="phone-number">Phone Number</label>
                          <input
                            type="number"
                            placeholder=""
                            id="phone-number"
                            name="number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            placeholder="support@gmail.com"
                            id="email"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="subject">Country of Origin</label>
                          <select name="country" required>
                              <option>Nigeria</option>
                              <option>Ghana</option>
                              <option>kenya</option>
                              <option>Cameroon</option>
                          </select>
                        </div>
                      </div>


                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="subject">Are you currently employed?</label>
                          <select name="employed" required>
                          <option>No</option>
                              <option>Yes</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-field mb-25">
                          <label htmlFor="subject">What's your preferred track?</label>
                          <select name="track" required>
                          <option>Web</option>
                              <option>Mobile</option>
                          </select>
                        </div>
                      </div>




                      <div className="col-12">
                        <div className="form-field mb-30">
                          <label htmlFor="message">Tell us why u should be selected</label>
                          <textarea
                            id="message"
                            placeholder="Hello"
                            defaultValue={""}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-field">
                          <button className="main-btn">
                            Apply <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>



        {/* Contact Info Start */}
        <div className="row align-items-center justify-content-center mt-5">
            <div className="col-lx-4 col-lg-5 col-sm-10">
              <div className="apply-info-text mb-md-70">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> Donate Projects
                    <span className="heading-shadow-text">Donate</span>
                  </span>
                  <h2 className="title">Ready to Get More Information</h2>
                </div>
                <p>
                  Sedut perspiciatis unde omnis natus voluptatem accusantium
                  dolore dantiumy totam apeam eaquey quaventore veritatis
                  architecto beatae.
                </p>
                <Link href="/events">
                  <a className="main-btn mt-35">
                    Get Free Quote <i className="far fa-arrow-right" />
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
                        <p>Metaverse</p>
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
