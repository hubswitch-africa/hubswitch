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
      <section className="donate-section section-gap-two primary-soft-bg mb-5">
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
      
    </Layout>
  );
};

export default Donate;
