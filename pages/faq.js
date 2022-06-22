import Link from "next/dist/client/link";
import { Accordion, Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Faq = () => {
  return (
    <Layout>
      <PageBanner pageName="FAQ" />
      <section className="faq-section section-gap mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <Tab.Container defaultActiveKey="general">
                <div className="faq-accordion-tab">
                  <div className="tab-nav-area text-center">
                    <Nav className="nav nav-tabs" id="faqTab" role="tablist">
                      <Nav.Item>
                        <Nav.Link eventKey="general">General</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="speakers">Volunteer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ visibility: 'hidden' }}>
                        <Nav.Link eventKey="donate">Donate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ visibility: 'hidden' }}>
                        <Nav.Link eventKey="support">Support</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ visibility: 'hidden' }}>
                        <Nav.Link eventKey="history">History</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ visibility: 'hidden' }}>
                        <Nav.Link eventKey="customers">Customers</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="general">
                      <Accordion
                        className="accordion"
                        eventKey="accordionFaqOne"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-4"
                          >
                            How do I join the community?
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-4"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              <Link href="/apply">Register here</Link>. Once your application is approved,
                              you'll need to pay a token of ₦15,000 after which you will get an invite to join the slack channel. 
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-5"
                          >
                            How long will it take for my application to be approved?
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-5"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              We accept new members weekly so it shouldn't be more than 7 days.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-2"
                          >
                            Can I learn more than one course?
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-2"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Yes you can. You can learn as much as you want, one course at a time.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            as="h5"
                            eventKey="accordionFaqOne"
                            className="accordion-title"
                          >
                            Am I expected to pay for the courses after I get a job?
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordionFaqOne">
                            <div className="accordion-content">
                              No, as a community member you never have to pay for any course.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        
                        
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-3"
                          >
                            How do I give back to the community?
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-3"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              You can support the community 
                                <ol>
                                  <li> <Link href="donate">with a donation</Link>, </li>
                                  <li>by <a href="https://bit.ly/hsa-volunteer" target="_blank"> becoming a volunteer mentor</a>, or</li>
                                  <li>by <a href="https://github.com/hubswitch-africa" target="_blank">contributing to our open-source projects on GitHub</a> </li>
                                </ol>
                            </div>
                          </Accordion.Collapse>
                        </div>


                        <div className="accordion-item d-none">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-1-6"
                          >
                            Can I get job opportunities through Hubswitch?
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-1-6"
                            data-parent="#accordionFaqOne"
                          >
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="speakers">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-2-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-2-1"
                          >
                            How do I volunteer?
                          </Accordion.Toggle>
                          <Accordion.Collapse
                            eventKey="accordion-2-1"
                            data-parent="#accordionFaqTwo"
                          >
                            <div className="accordion-content">
                              <a href="https://bit.ly/hsa-volunteer" target="_blank">Register here</a>, 
                              you should get a link to join the slack community if your application is approved.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="donate">
                      <Accordion className="accordion" eventKey="accordion-3-1">
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-3-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-3-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="support">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-4-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-7">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-8"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-8">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-9"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-9">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-4-10"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-4-10">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-5-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-5-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-5-7">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="customers">
                      <Accordion
                        className="accordion"
                        defaultActiveKey="accordion-6-1"
                      >
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-1"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-1">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-2"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-2">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-3"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-3">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-4"
                          >
                            How To Improve Your Design Process With Data-Based
                            Personas
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-4">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-5"
                          >
                            Better Research, Better Design, Better Results
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-5">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-6"
                          >
                            Smashing Book Excerpt Bringing Personality Back Web
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-6">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="accordion-item">
                          <Accordion.Toggle
                            className="accordion-title"
                            as="h5"
                            eventKey="accordion-6-7"
                          >
                            Using Low Vision As My Tool To Help Me Teach
                            WordPress
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="accordion-6-7">
                            <div className="accordion-content">
                              Sed ut perspiciatis unde omnis iste natus error
                              voluptatem accusantium dolore seyse mque
                              laudantium totam rem aperiam, eaque ipsa quae ab
                              illo inventore veritatis et quasi architecto
                              beatae vitae dicta sunt explicabo.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
      {/*====== FAQ Area End ======*/}
    
    </Layout>
  );
};

export default Faq;
