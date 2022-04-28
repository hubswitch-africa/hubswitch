import Link from "next/dist/client/link";
import { useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import DonateBtn from "../src/components/CustomToggle";
import {
  paymentOptions,
  secondOptions,
  thirdOptions,
} from "../src/components/paymentOptions";

const Donate = () => {
  const [detail, setDetail] = useState("Card");
  const [detail2, setDetail2] = useState("Card");
  const [detail3, setDetail3] = useState("Card");

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
                <h6 className="plan-name">as an</h6>
                <div className="price">
                  <span>Individual</span>
                </div>
                <span className="plan-subtitle">Select Payment options</span>
                <ul className="plan-feature">
                  {paymentOptions.map((option) => (
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        setDetail(option.name);
                      }}
                      key={option.uid}
                    >
                      {detail == option.name ? (
                        <i className="fas fa-check" />
                      ) : null}
                      {option.name} Payment
                    </li>
                  ))}
                </ul>
                <DonateBtn children={detail} individual mode={detail} />
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
                  <span>₦300,000</span>
                </div>
                <span className="plan-subtitle">Payment Options</span>
                <ul className="plan-feature">
                  {secondOptions.map((option) => (
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        setDetail2(option.value);
                      }}
                      key={option.uid}
                    >
                      {detail2 == option.value ? (
                        <i className="fas fa-check" />
                      ) : null}
                      {option.value} Payment
                    </li>
                  ))}
                </ul>
                <DonateBtn children={detail2} mode={detail2} />
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
                <h6 className="plan-name">as an</h6>
                <div className="price">
                  <span className="text-center">Organization</span>
                </div>
                <span className="plan-subtitle">Payment Options</span>
                <ul className="plan-feature">
                  {thirdOptions.map((option) => (
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        setDetail3(option.value);
                      }}
                      key={option.uid}
                    >
                      {detail3 == option.value ? (
                        <i className="fas fa-check" />
                      ) : null}
                      {option.value} Payment
                    </li>
                  ))}
                </ul>
                <DonateBtn children={detail3} organization mode={detail3} />
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
