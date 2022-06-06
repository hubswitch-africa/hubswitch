import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const TeamMember = () => {
  const members = [
    {
      name: 'Michael Osoba',
      role: 'Community Manager',
      img: 'chief-priest.jpg',
      github: 'mickela'
    },
    {
      name: 'Nnaemeka Onukwube',
      role: 'Engineering Lead',
      img: 'emeka.jpeg',
      github: 'ErnestCodes'
    },
    {
      name: 'Izuchukwu Onukwube',
      role: 'General Counsel (DevRel)',
      img: 'izu.jpg',
      github: 'izuchukwu-eric'
    },
    {
      name: 'Jewel Osafile',
      role: 'React-native Mentor',
      img: 'jewel.jpg',
      github: 'JewelSama'
    },
    {
      name: 'Aisha Mudathir',
      role: 'Engineering & Finance',
      img: 'aisha.jpg',
      github: 'Areebah-snow'
    },
    {
      name: 'Joseph Ekemini',
      role: 'Engineering Team',
      img: 'joseph.jpeg',
      github: 'JerryDcodemaster'
    },
    {
      name: 'Simon Abah',
      role: 'Front-end Mentor',
      img: 'simon2.jpg',
      github: 'abahonyillo'
    },
    {
      name: 'Victor Olisa',
      role: 'Editorial Team',
      img: 'victor2.jpg',
      github: '#'
    },
    {
      name: 'Santos Philip',
      role: 'PHP - Laravel Mentor',
      img: 'santos.jpg',
      github: 'santos-right'
    },
  ];
  return (
    <Layout>
      <PageBanner pageName="Team" />
      <section className="team-area section-gap-extra-bottom">
        <div className="container">
          <div className="row teams justify-content-center">
            {members.map((x, i) => <Member key={i} data={x} />)}
            <div className="col-12">
              <div className="view-more-btn text-center mt-40">
                <Link href="mailto:hubswitchafrica@gmail.com?subject=Interest in joining the team">
                  <a className="main-btn">
                    Join Our Team <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};




const Member = (props) =>{
  const {name, role, img, github} = props.data;
  return(
    <div className="col-lg-4 col-md-6 col-sm-9">
      <div className="member-box mb-30">
        <div className="member-photo">
          <img src={`assets/img/team/${img}`} alt="Member" height={380} />
        </div>
        <div className="member-info">
          <h5 className="name">
            <a href={`https://github.com/${github}`} target="_blank">{name}</a>
          </h5>
          <span className="title">{role}</span>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
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
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default TeamMember;
