import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Donate = () => {
  return (
    <Layout>
      <PageBanner pageName="Donate" />
      <section className="donate-section section-gap-two primary-soft-bg">
        <div className="container">
          <div className="row donate-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="donate-box mb-30">
                <h6 className="plan-name">as Individual</h6>
                <span className="plan-subtitle">Payment options</span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Card Payment
                  </li>
                  <li>
                    <i className="fas fa-check" /> Wire Transfer
                  </li>
                  <li>
                    <i className="fas fa-check" /> Crypto Payment
                  </li>
                </ul>
                <a href="#" className="donate-btn">
                  Donate <i className="fas fa-arrow-right" />
                </a>
                <div className="plan-shape">
                  <img src="assets/img/donate-shape.png" alt="shape" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="donate-box featured-plan mb-30">
                <h6 className="plan-name">Scholarship Fund</h6>
                <div className="price">
                  <span className="currency">
                    <img src="assets/img/naira.png" />
                  </span>
                  <span>300,000</span>
                </div>
                <span className="plan-subtitle">Payment Options</span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Card Payment
                  </li>
                  <li>
                    <i className="fas fa-check" /> Wire Transfer
                  </li>
                  <li>
                    <i className="fas fa-check" /> Crypto Payment
                  </li>
                </ul>
                <a href="#" className="donate-btn">
                  Donate <i className="fas fa-arrow-right" />
                </a>
                <div className="plan-shape">
                  <img src="assets/img/donate-shape.png" alt="shape" />
                </div>
                <span className="plan-tag">Donations so far</span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="donate-box mb-30">
                <h6 className="plan-name">as Organization</h6>
                <span className="plan-subtitle">Payment Options</span>
                <ul className="plan-feature">
                  <li>
                    <i className="fas fa-check" /> Card Payment
                  </li>
                  <li>
                    <i className="fas fa-check" /> Wire Transfer
                  </li>
                  <li>
                    <i className="fas fa-check" /> Crypto Payment
                  </li>
                </ul>
                <a href="#" className="donate-btn">
                  Donate <i className="fas fa-arrow-right" />
                </a>
                <div className="plan-shape">
                  <img src="assets/img/donate-shape.png" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Donate Area End ======*/}
      {/*====== Latest News Start ======*/}
      <section className="latest-blog-section section-gap-extra-bottom">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Latest News &amp; Blog
              <span className="heading-shadow-text">News Blog</span>
            </span>
            <h2 className="title">Get Every Single Update</h2>
          </div>
          <div className="row justify-content-center latest-blog-posts style-two">
            <div className="col-lg-4 col-md-6 col-sm-9 col-11">
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/01.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>Standing Out From Crowds mproving Mobile Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9 col-11">
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/02.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>
                        Five Rules Of App Localization China Money Dating And
                        App Store
                      </a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9 col-11">
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/03.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link href="/news-details">
                      <a>How To Use Underlined Text Improve User Experience</a>
                    </Link>
                  </h6>
                  <Link href="/news-details">
                    <a className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
