import Link from "next/dist/client/link";
import { useState } from "react";
// import Slider from "react-slick";
// import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { imageTextBlockSlider } from "../src/sliderProps";


const Index2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout transparentHeader topSecondaryBg>
      {video && <VideoPopup close={setVideo} />}
      <section className="hero-area-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-11">
              <div className="hero-text">
                <h1 className="title wow fadeInLeft" data-wow-delay="0.2s">
                HUBSWITCH <span className="afri">AFRICA</span>
                </h1>
                <p className="wow fadeInLeft" data-wow-delay="0.3s">
                A community focused on bringing people into the tech space,
                 and helping them grow their careers by contributing to open-source.
                </p>
                <ul className="hero-btn">
                  <li className="wow fadeInUp" data-wow-delay="0.4s">
                    <Link href="/apply">
                      <a className="main-btn">
                        Apply <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.5s">
                    <a
                      href="#"
                      className="video-btn"
                      onClick={() => setVideo(true)}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-8 col-sm-10 mx-auto wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="hero-img text-lg-right">
                <img src="assets/img/hero/home1.jpg" alt="Img" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="hero-line-one">
            <img src="assets/img/hero/hand11.jpg" alt="Line" />
          </div>
          <div className="hero-line-two">
            <img src="assets/img/hero/hand11.jpg" alt="Line" />
          </div>
          <div className="dot-one" />
          <div className="dot-two" />
        </div>
      </section>
      {/*====== Hero Area End ======*/}
      {/*====== About Section Start ======*/}
      <section className="about-section-two">
        <div className="about-form-area">
          <div className="container">
            <div className="about-donation-form">
              <div className="donation-heading">
                <h3 className="title">Be a Partner or Sponsor</h3>
                <span className="shadow-text">Support</span>
              </div>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <div className="form-wrap">
                  <ul className="donation-amount">
                  <Link href ="/donate"><li>Support our laptop scholarship fund</li></Link>



                  {/* <Link href ="/donate"><li>$50</li></Link>
                  <Link href ="/donate"><li>$180</li></Link>
                  <Link href ="/donate"><li>$500</li></Link>
                  <Link href ="/donate"><li>$1000</li></Link> */}
                  </ul>
                  <Link href="/donate">
                  <button type="submit" className="main-btn btn-white">
                    Donate Now <i className="far fa-arrow-right" />
                   
                  </button>
                  </Link>
                </div>
              </form>
            </div>
            {/* <div className="about-video wow fadeInDown" data-wow-delay="0.2s">
              <a href="#" className="video-btn" onClick={() => setVideo(true)}>
                <i className="fas fa-play" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="about-text-area">
          <div className="container">
            <div className="row align-items-end justify-content-xl-start">
              <div className="col-xl-5 col-lg-7 col-md-8 order-xl-2">
                <div className="about-text">
                  <div className="common-heading mb-30">
                    <span className="tagline">
                      <i className="fas fa-plus" /> About us
                      <span className="heading-shadow-text">About Us</span>
                    </span>
                    <h2 className="title">
                      Changing Africa. Five lives at a time
                      </h2>
                  </div>
                  <p>
                  At Hubswitch Africa, we’re just as passionate about
                   changing lives for the better, as you are. 
                   That’s why we’re aiming to raise more money to directly benefit talented 
                   Africans with an interest in tech, than any other organization in Africa.
                    We hope you’ll continue to support us in our mission to bring young
                     Africans into the tech space.

                  </p>
                  
                  <Link href="/about">
                    <a className="main-btn btn-dark mt-40">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 order-xl-1 wow fadeInUp">
                <div className="about-curved-img">
                  <img src="assets/img/hero/home1.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="about-shape">
          <img src="assets/img/footer-bg.jpg" alt="Shape" />
        </div> */}
      </section>
      {/*====== About Section End ======*/}
      {/*====== Project Section Start ======*/}
      {/* <section className="project-section project-section-two">
        <div className="container fluid-extra-padding">
          <div className="common-heading text-center color-version-white mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Popular Projects
              <span className="heading-shadow-text">Our Projects</span>
            </span>
            <h2 className="title">Explore Our Projects</h2>
          </div>
          <div className="row justify-content-center project-items project-style-one">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-01.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Video &amp; Movies</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Best Romantic &amp; Action English Movie Release in
                        2022.
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">79%</span>
                    </div>
                    <div className="stats-bar" data-value={79}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-grid-02.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Educations</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>Needs Close Up Students Class Room In University</a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">87%</span>
                    </div>
                    <div className="stats-bar" data-value={87}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item mt-30">
                <div
                  className="thumb"
                    style={{
                      backgroundImage:
                        "url(assets/img/project/project-grid-03.jpg)",
                    }}
                />
                <div className="content">
                  <div className="cats">
                    <Link href="/project-1">Technology</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link href="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link href="/project-details">
                      <a>
                        Original Shinecon VR Pro Virtual Reality 3D Glasses
                        VRBOX
                      </a>
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">85%</span>
                    </div>
                    <div className="stats-bar" data-value={85}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section> */}
      {/*====== Project Section End ======*/}
      {/*====== Feature Section Start ======*/}
      <section className="feature-section feature-section-one section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-10">
              <div className="feature-content mb-md-50">
                <div className="common-heading mb-45">
                  <span className="tagline">
                    <i className="fas fa-plus" /> What we do
                    <span className="heading-shadow-text">What you get</span>
                  </span>
                  <h2 className="title">Why Jion us</h2>
                </div>
                {/* Fancy Icon List */}
                <div className="fancy-icon-list">
                  <div className="fancy-list-item">
                    <div className="icon">
                      {/* <i className="flaticon-debit-card" /> */}
                    </div>
                    <div className="content">
                      <h4 className="title">Structured Curriculum</h4>
                      <p>
                      Our curriculum is not just cutting-edge and industry relevant in terms of content, but also student focused in its approach.
                      </p>
                    </div>
                  </div>
                  <div className="fancy-list-item">
                    <div className="icon">
                      {/* <i className="flaticon-payment" /> */}
                    </div>
                    <div className="content">
                      <h4 className="title">Contibute to open source</h4>
                      <p>
                       We introduce members to open source projects they can contribute to, and guide them through the process.
                      </p>
                    </div>
                  </div>
                  <div className="fancy-list-item">
                    <div className="icon">
                      {/* <i className="flaticon-wallet-1" /> */}
                    </div>
                    <div className="content">
                      <h4 className="title">Technical growth</h4>
                      <p>
                      We provide you with everything you need to secure a full-time position in the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="funden-video with-video-shape">
                <img src="assets/img/video/02.jpg" alt="Image" />
                <a
                  href="#"
                  className="video-popup"
                  onClick={() => setVideo(true)}
                >
                  <i className="fas fa-play" />
                </a>
                {/* <img
                  src="assets/img/video/video-shape.png"
                  alt="Image"
                  className="video-shape"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}
      {/*====== Counter With Image Text Block Start ======*/}
      {/* <section className="counter-with-image-text-block">
        <div className="image-text-block-area">
          <div className="container">
            <Slider
              {...imageTextBlockSlider}
              className="image-text-block-slider"
            >
              <div className="single-slider">
                <div className="image-text-block text-block-one">
                  <div className="block-img">
                    <img src="assets/img/text-block/01.jpg" alt="Image" />
                  </div>
                  <div className="block-content">
                    <div className="common-heading mb-40">
                      <span className="tagline">
                        <i className="fas fa-plus" /> top Funding stories
                        <span className="heading-shadow-text">Top Stories</span>
                      </span>
                      <h2 className="title">Meet William &amp; Michael</h2>
                    </div>
                    <p className="mb-30">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo enim
                      ipsam voluptatem
                    </p>
                    <p className="italic-text">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized
                    </p>
                    <Link href="/company-overview">
                      <a className="main-btn bordered-btn mt-40">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-slider">
                <div className="image-text-block text-block-one">
                  <div className="block-img">
                    <img src="assets/img/text-block/01.jpg" alt="Image" />
                  </div>
                  <div className="block-content">
                    <div className="common-heading mb-40">
                      <span className="tagline">
                        <i className="fas fa-plus" /> top Funding stories
                        <span className="heading-shadow-text">Top Stories</span>
                      </span>
                      <h2 className="title">Meet William &amp; Michael</h2>
                    </div>
                    <p className="mb-30">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo enim
                      ipsam voluptatem
                    </p>
                    <p className="italic-text">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized
                    </p>
                    <Link href="/company-overview">
                      <a className="main-btn bordered-btn mt-40">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="counter-boxes-area primary-soft-bg">
          <div className="container">
            <div className="row counter-boxes justify-content-lg-between justify-content-center">
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-crowdfunding" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={3598} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">We’ve Project Complate</h6>
                    <p>
                      Sed ut perspiciatis unde <br /> menste natus error
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-ecological" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={9634} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Trusted Global Partners</h6>
                    <p>
                      Quis autem veleucmure <br /> reprehenderit quein
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-badges" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={8565} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Global Awards Winning</h6>
                    <p>
                      Sed ut perspiciatis unde <br /> menste natus error
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <Counter end={4756} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">24/7 Active Volunteer</h6>
                    <p>
                      Quis autem veleucmure <br /> reprehenderit quein
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Counter With Image Text Block End ======*/}
      {/*====== Testimonials Start ======*/}
      <section className="testimonials-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="common-heading text-center mb-30">
                <span className="tagline">
                  <i className="fas fa-plus" /> members Feedback
                  <span className="heading-shadow-text">Testimonials</span>
                </span>
                <h2 className="title">{`What People's Say`}</h2>
              </div>
              <div className="testimonial-boxes">
                <div
                  className="testimonial-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/07.png" alt="Thumb" />
                  </div>
                  <div>
                    <p className="testimonial-desc">
                      {`"Sed perspiciat unde omnis iste natus error voluptatem
                      accusantium dolorem audantium totam aperiam eaque quae
                      abillo inventore veritatis Quis autem vel eum iure
                      reprehenderit qui in ea voluptate"`}
                    </p>
                    <div className="author-info">
                      <h5 className="name">Howard A. Guest</h5>
                      <p className="position">Web Developer</p>
                    </div>
                  </div>
                  <div className="rating-wrap">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="testimonial-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/08.png" alt="Thumb" />
                  </div>
                  <div>
                    <p className="testimonial-desc">
                      {`"On the other hands denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee"`}
                    </p>
                    <div className="author-info">
                      <h5 className="name">Randall S. Rosenow</h5>
                      <p className="position">CEO &amp; Founder</p>
                    </div>
                  </div>
                  <div className="rating-wrap">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="testimonial-box-two mt-30 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="author-img">
                    <img src="assets/img/author-thumbs/09.png" alt="Thumb" />
                  </div>
                  <div>
                    <p className="testimonial-desc">
                      {`"At vero eoset accusamus et iusto odio dignissimos ducimus
                      blandit praesentium voluptatum deleniti atque corrupti
                      quos dolores et quastiy molestias excepturi sint occaecati
                      cupiditate"`}
                    </p>
                    <div className="author-info">
                      <h5 className="name">Christopher D. Greer</h5>
                      <p className="position">Senior Manager</p>
                    </div>
                  </div>
                  <div className="rating-wrap">
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Testimonials End ======*/}
      {/*====== Partners Section With CTA Start ======*/}
      <section>
        <div className="cta-boxes">
          <div className="container">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div
                  className="cta-box cta-primary-overly"
                >
                  <h2 className="cta-title">Partnership</h2>
                  <p>
                    Do you want to show your care for tech talent in Africa?
                  </p>
                  <Link href="mailto:hubswitchafrica@gmail.com?subject=Hubswitch Partnership">
                    <a className="main-btn btn-white">
                      Become a partner <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div
                  className="cta-box mt-40"
                >
                  <h2 className="cta-title">Donations</h2>
                  <p>
                      You can support the growth of an African techie via sponsorship
                  </p>
                  <Link href="/donate">
                    <a className="main-btn">
                      Donate <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partners-logos">
          <div className="container">
            <div className="row partners-logos-two">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/01.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/02.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/03.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/04.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/05.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/06.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/07.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="logo mb-30">
                  {/* <Link href="/testimonial">
                    <a>
                      <img src="assets/img/partners/08.png" alt="Image" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/*====== Latest News End ======*/}
      {/*====== Footer Start ======*/}
    </Layout>
  );
};

export default Index2;
