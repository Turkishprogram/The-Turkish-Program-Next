import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import SectionNumeral from '../components/section-numeral'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>The Turkish Program</title>
          <meta property="og:title" content="The Turkish Program" />
        </Head>
        <section className="home-hero">
          <div className="home-background">
            <img
              alt="image"
              src="/patu_a_hyper-realistic_photograph_of_foxes_gilgamesh_enkidu_jum_fd24e1db-109a-4a0e-82c9-a8bfbed03a24-1400w.jpg"
              className="home-image"
            />
            <img
              alt="image"
              src="/line-background.svg"
              className="home-image01"
            />
          </div>
          <header data-thq="thq-navbar" className="home-navbar">
            <a
              href="https://turkishprogram.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <div className="home-container01"></div>
            </a>
            <div className="home-container02">
              <a
                href="https://turkishprogram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01"
              >
                <h2 className="home-text">The Turkish Program</h2>
              </a>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <a href="#about" className="home-link02 navLink">
                  About
                </a>
                <a
                  href="https://turkishprogram.notion.site/Calendar-9ee00ccfcacf4d0b937fbafec7e0a514?pvs=4"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link03 navLink"
                >
                  Calendar
                </a>
                <a href="#testi" className="home-link04 navLink">
                  Reviews
                </a>
                <a
                  href="https://turkishprogram.notion.site/Resources-75a01cf3f6994e3abb22808cf6bc82c0?pvs=4"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05 navLink"
                >
                  Resources
                </a>
                <a
                  href="https://medium.com/@turkishbites"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06 navLink"
                >
                  Blog
                </a>
              </nav>
              <a
                href="https://forms.gle/wSK5VFLHQNgsgKd69"
                target="_blank"
                rel="noreferrer noopener"
                className="home-register button"
              >
                <span>Register now</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </a>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container03">
                  <h2 className="home-text002">The Turkish Program</h2>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <a href="#about" className="home-link07 navLink">
                    About
                  </a>
                  <a
                    href="https://turkishprogram.notion.site/Calendar-9ee00ccfcacf4d0b937fbafec7e0a514?pvs=4"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link08 navLink"
                  >
                    Calendar
                  </a>
                  <a href="#testi" className="home-link09 navLink">
                    Review
                  </a>
                  <a
                    href="https://turkishprogram.notion.site/Resources-75a01cf3f6994e3abb22808cf6bc82c0?pvs=4"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link10 navLink"
                  >
                    Resources
                  </a>
                  <a
                    href="https://turkishprogram.notion.site/Resources-75a01cf3f6994e3abb22808cf6bc82c0?pvs=4"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link11 navLink"
                  >
                    Blog
                  </a>
                </nav>
                <div className="home-button-container">
                  <button className="button home-register1">
                    Register Now
                  </button>
                </div>
                <div className="home-icon-group">
                  <div className="home-icons">
                    <a
                      href="https://www.linkedin.com/company/the-turkish-program/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link12"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon06"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/turkishprogram/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link13"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon08"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="home-background1"
              />
            </div>
          </header>
          <div className="home-hero-content">
            <h1 className="home-text003">
              <span>The Best Turkish Language Program Around.</span>
              <br></br>
            </h1>
            <div className="home-caption">
              <a
                href="https://forms.gle/wSK5VFLHQNgsgKd69"
                target="_blank"
                rel="noreferrer noopener"
                className="home-register2 button-style-1 button"
              >
                <span className="home-text006">
                  <span className="home-text007">Apply</span>
                  <br></br>
                  <span>Now</span>
                  <br></br>
                </span>
              </a>
              <p className="home-caption1">
                <span className="home-text011">
                  8-week terms available all year round for online 
                </span>
                <span className="home-text012">and in-person classes</span>
                <br></br>
              </p>
            </div>
          </div>
        </section>
        <section className="home-notes">
          <div className="home-first">
            <div data-aos="fade-up-right" className="home-content">
              <h2 className="home-header">
                <span className="home-text014">
                  If you are looking to learn Turkish from an experienced
                  professor of the language, you are in the right place.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h2>
              <div className="home-list">
                <div className="home-note">
                  <div className="home-point"></div>
                  <p className="home-text017">
                    <span className="home-text018">
                      &quot;Yağız is simply the best teacher of language I know.
                      His joy for language, culture, and life is
                      infectious.&quot;
                    </span>
                    <br></br>
                    <span className="home-text020">
                      - Jason Vivrette, former student and Turkish Professor
                    </span>
                    <br className="home-text021"></br>
                    <span className="home-text022">UC Berkeley</span>
                  </p>
                </div>
                <div className="home-note1">
                  <div className="home-point1"></div>
                  <p className="home-text023">
                    <span className="home-text024">
                      &quot;Turkish fluency achieved, jaw-dropping reactions
                      activated - Yağız leveled up my language game!&quot;
                    </span>
                    <br className="home-text025"></br>
                    <span>- Maria Mantina, continuing student</span>
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/screen%20shot%202023-06-14%20at%204.14.46%20pm-1400w.png"
              className="home-image02 image-notes"
            />
          </div>
          <div className="home-second">
            <div data-aos="fade-up-left" className="home-content1">
              <div className="home-text-container">
                <h2 className="home-text027 Heading2">
                  We Ignite Passion, Not Just Language Skills
                </h2>
                <span className="home-text028">
                  <span>
                    We are your passport to a captivating Turkish journey, where
                    language learning becomes a joyous exploration of culture,
                    connection, and endless possibilities
                  </span>
                  <br></br>
                </span>
                <div className="home-checklist">
                  <div className="home-check-item">
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-text031">
                      <span>Flexible Learning Platforms</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-check-item1">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-text034">
                      <span>Targeted Turkish Programs</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-check-item2">
                    <svg viewBox="0 0 1024 1024" className="home-icon14">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-text037">
                      <span>Round-the-Clock Assistance and</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>Resources</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-check-item3">
                    <svg viewBox="0 0 1024 1024" className="home-icon16">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-text042">
                      <span className="home-text043">
                        Adaptive Language Learning Approach
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="https://forms.gle/wSK5VFLHQNgsgKd69"
                target="_blank"
                rel="noreferrer noopener"
                className="home-register3 button button-style-2"
              >
                <span>Register now</span>
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </a>
            </div>
            <img
              alt="image"
              src="/patu_a_hyper-realistic_photograph_of_foxes_jumping_in_joy_of_kn_3e5d0256-e0b8-4599-8959-9a52161f8fee-1400w.jpg"
              className="image-notes"
            />
          </div>
        </section>
        <section className="home-quote">
          <div className="home-content2">
            <h2 className="home-quoted">
              “Here at the Turkish Program, we&apos;re transforming eager
              learners into Turkish maestros, one verb conjugation at a time.
              But we&apos;re not stopping there. We&apos;re dishing out healthy
              helpings of culture, connection, and a whole lot of Turkish
              charm.”
            </h2>
            <div className="home-author">
              <img
                alt="image"
                src="/untitled%20design-2-200h.jpg"
                className="home-icon20"
              />
              <div className="home-details">
                <span className="home-name">Ali Yagiz Sen</span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/quote-background.svg"
            className="home-background2"
          />
          <img
            alt="image"
            src="/quote-background.svg"
            className="home-background3"
          />
        </section>
        <section id="about" className="home-speakers">
          <div className="home-header1">
            <SectionNumeral></SectionNumeral>
            <div data-aos="fade-right" className="home-heading">
              <h2 className="home-title">
                <span className="home-text046">Ali Yagiz Sen</span>
                <br></br>
                <span className="home-text048"> - Founder&amp;Chair</span>
                <br></br>
              </h2>
              <p className="home-caption2">
                At The Turkish Program, our founder and main instructor, Yağız,
                is a seasoned professor of the Turkish language. With an
                unwavering passion for Turkish culture and history, Yağız&apos;s
                expertise spans every facet of this captivating language. Yağız
                is committed to a pedagogy that embraces eclecticism and
                adaptability, ensuring each student&apos;s needs and learning
                styles are honored. He understands that every learner is unique,
                and strives to create a supportive environment that nurtures
                their language journey. Beyond his dedication to teaching
                Turkish, Yağız indulges in creative writing and the captivating
                melodies of traditional Turkish and Greek music. His artistic
                pursuits not only enrich his own life, but also bring a vibrant
                energy to his teaching, fostering an engaging and inspiring
                learning experience.
              </p>
            </div>
          </div>
          <div className="home-list1">
            <div className="home-row">
              <div className="home-row1 speaker">
                <div className="home-speaker">
                  <img
                    alt="image"
                    src="/untitled%20design-4-600h.png"
                    className="home-image04"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-watch">
          <div className="home-content3">
            <h2 className="home-header2">
              <span>
                We now have a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text051">kids</span>
              <span> program!</span>
            </h2>
            <div className="home-video">
              <div className="home-container04">
                <img
                  alt="image"
                  src="/kids-900w.png"
                  className="home-image05"
                />
              </div>
            </div>
            <a
              href="https://turkishprogram.notion.site/Turkish-Roots-for-Kids-6d0d65a7050b42858a80554ac7bf34b4?pvs=4"
              target="_blank"
              rel="noreferrer noopener"
              className="home-register4 button"
            >
              <span className="home-text053">
                <span>Learn more</span>
                <br></br>
              </span>
            </a>
          </div>
          <img
            alt="image"
            src="/trailer-background.svg"
            className="home-image06"
          />
        </section>
        <section className="home-why">
          <div className="home-header3">
            <div className="home-section-numeral">
              <div className="home-divide"></div>
              <p className="home-text056">02</p>
            </div>
            <div data-aos="fade-right" className="home-heading1">
              <h2 className="home-title1">Why The Turkish Program</h2>
              <p className="home-caption3">
                {' '}
                Connect Through Language - Unlock a World of Cultural Exchange
                and Expansion of Horizons
              </p>
            </div>
          </div>
          <div className="home-brands">
            <div className="home-row2">
              <div className="home-item">
                <img alt="image" src="/why-1.svg" className="home-image07" />
                <div className="home-details01">
                  <h3 className="home-title2">
                    <span>Adaptive</span>
                    <br></br>
                  </h3>
                  <p className="home-description">
                    At The Turkish Program, we adapt our teaching methods to
                    match your unique needs and learning style. Whether
                    you&apos;re a beginner or advanced learner, our experienced
                    instructors provide personalized attention, ensuring that
                    you make meaningful progress on your Turkish language goals.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="home-item1">
                <img alt="image" src="/why-2.svg" className="home-image08" />
                <div className="home-details02">
                  <h3 className="home-title3">
                    <span>Holistic</span>
                    <br></br>
                  </h3>
                  <p className="home-description1">
                    <span>
                      We believe that learning a language encompasses more than
                      just grammar and vocabulary. Our holistic approach
                      integrates Turkish culture, history, and traditions into
                      the curriculum, giving you a well-rounded understanding of
                      the language and fostering a deeper appreciation for its
                      context.
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="home-item2">
                <img alt="image" src="/why-3.svg" className="home-image09" />
                <div className="home-details03">
                  <h3 className="home-title4">
                    <span>Innovative</span>
                    <br></br>
                  </h3>
                  <p className="home-description2">
                    <span>
                      We are dedicated to innovation and employ the latest
                      techniques and technologies in language education. Through
                      interactive resources, immersive activities, and
                      cutting-edge tools, we create dynamic learning
                      environments that make your Turkish language journey
                      engaging and effective.
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-schedule">
          <div className="home-content4">
            <div className="home-header4">
              <div className="home-section-numeral1">
                <div className="home-divide1"></div>
                <p className="home-text069">03</p>
              </div>
              <div data-aos="fade-right" className="home-heading2">
                <h2 className="home-title5">Calendar</h2>
              </div>
            </div>
            <img
              alt="image"
              src="/image%20(1)-1400w.png"
              className="home-image10"
            />
            <a
              href="https://turkishprogram.notion.site/Calendar-9ee00ccfcacf4d0b937fbafec7e0a514?pvs=4"
              target="_blank"
              rel="noreferrer noopener"
              className="home-register5 button"
            >
              <span className="home-text070">Check our calendar here</span>
              <svg viewBox="0 0 1024 1024" className="home-icon21">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </a>
          </div>
        </section>
        <section className="home-black">
          <div className="home-container05">
            <section className="home-quotes">
              <div className="home-container06">
                <img
                  alt="image"
                  src="/class%20of%20fall%202022-1400w.jpg"
                  className="home-image11"
                />
                <div className="home-details04">
                  <p className="home-quote01">
                    Students celebrating the end of successful quarter with a
                    Turkish rakı, music, and game night.
                  </p>
                </div>
              </div>
              <div className="home-row3">
                <img
                  alt="image"
                  src="/untitled%20design-5-1400w.jpg"
                  className="home-image12"
                />
                <div className="home-row4">
                  <div className="home-details05">
                    <p className="home-quote02">
                      <span>
                        The professor is leading an all-Turkish exercise with
                        Intermediate-I Group,
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>where students guess the </span>
                      <span>movie titles by the plots.</span>
                    </p>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/untitled%20design-1400w.jpg"
                  className="home-image13"
                />
                <p className="home-quote03">
                  Former student Jason and Yağız are working on the translation
                  of Ahmed Arif&apos;s poetry to be published by Texas
                  University Press soon.
                </p>
              </div>
            </section>
          </div>
          <section id="testi" className="home-testimonials">
            <div className="home-header5">
              <div className="home-section-numeral2">
                <div className="home-divide2"></div>
                <p className="home-text074">04</p>
              </div>
              <div data-aos="fade-right" className="home-heading3">
                <h2 className="home-title6">
                  Don’t just take our word for it. Here’s what past students
                  have to say:
                </h2>
              </div>
            </div>
            <div className="home-quotes1">
              <div className="home-quote04">
                <div className="home-author1">
                  <img
                    alt="image"
                    src="/jason_rodriguez-200h.jpeg"
                    className="home-image14"
                  />
                  <div className="home-details06">
                    <span className="home-name1">Jason Vivrette</span>
                    <span className="home-handle">
                      <span>
                        Professor of Turkish
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>UC Berkeley</span>
                    </span>
                  </div>
                </div>
                <p className="home-quote05">
                  &quot;Yağız is simply the best teacher of language I know. He
                  effortlessly attends to the needs and interests of each
                  student, and brings a wealth of cultural knowledge and
                  linguistic detail to each lesson. His joy for language,
                  culture, and life is infectious.&quot;
                </p>
              </div>
              <div className="home-quote06">
                <div className="home-author2">
                  <img
                    alt="image"
                    src="/emoroz-11886-200h.jpeg"
                    className="home-image15"
                  />
                  <div className="home-details07">
                    <span className="home-name2">Elena Moroz</span>
                    <span className="home-handle1">
                      <span className="home-text078">
                        International Development Researcher
                      </span>
                      <br></br>
                      <span>Mathematica</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <p className="home-quote07">
                  I can&apos;t believe that after one year of studying Turkish
                  in this program, I have gone from virtually no ability to
                  understand or participate in Turkish conversations, to having
                  conversations in my dreams in Turkish.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-quote08">
                <div className="home-author3">
                  <img
                    alt="image"
                    src="/7951786653512983-200w.jpeg"
                    className="home-image16"
                  />
                  <div className="home-details08">
                    <span className="home-name3">Jonathan Scholey</span>
                    <span className="home-handle2">
                      <span className="home-text082">Molecular Biologist</span>
                      <br></br>
                      <span>UC Davis</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <p className="home-quote09">
                  &quot;Being a science professor, I know how very difficult it
                  is to effectively teach students in a way that captures and
                  maintains their interest and, in this regard, Yağız is an
                  outstanding success.&quot;
                </p>
              </div>
              <div className="home-quote10">
                <div className="home-author4">
                  <img
                    alt="image"
                    src="/pozen-zina-scaled-200h.jpeg"
                    className="home-image17"
                  />
                  <div className="home-details09">
                    <span className="home-name4">Zina Pozen</span>
                    <span className="home-handle3">
                      <span>&apos;Rocket Surgeon&apos; | </span>
                      <span>Musician </span>
                      <br></br>
                      <span>LanGuru</span>
                      <br></br>
                      <br></br>
                    </span>
                  </div>
                </div>
                <p className="home-quote11">
                  I feel so incredibly lucky to study with Yagiz: his love and
                  deep understanding of language and culture, his nimble mind,
                  rigor, humor, kindness and commitment to our success is
                  phenomenal. He got us speaking very fast, and we are
                  progressing so quickly, while having fun too!
                </p>
              </div>
              <div className="home-quote12">
                <div className="home-author5">
                  <img
                    alt="image"
                    src="/1586139391752-2-200h.jpeg"
                    className="home-image18"
                  />
                  <div className="home-details10">
                    <span className="home-name5">Micah Slaughter</span>
                    <span className="home-handle4">
                      <span>Project Manager</span>
                      <br></br>
                      <span>TransPerfect</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <p className="home-quote13">
                  <span>
                    “TTP seamlessly combines technical language instruction and
                    casual conversation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text097">practice</span>
                  <span>
                    . Yağız makes classes fun and open to multiple skill
                    levels.”
                  </span>
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="home-subscribe">
          <div className="home-container07">
            <div className="home-container08">
              <div className="home-container09">
                <Script
                  html={`<!-- Begin Brevo Form -->
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
  @font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  }

  #sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
  }

  #sib-container textarea::placeholder {
    text-align: left;
    font-family: "Helvetica", sans-serif;
    color: #c0ccda;
  }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center;
         background-color: #EFF2F7;                                 ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          Your subscription could not be saved. Please try again.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          Your subscription has been successful.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST" action="https://5089cf74.sibforms.com/serve/MUIFALxhndYNSLK1_8RVWLuQjnHlPy9unjIQqNYYpIUstkC_Fe-6oAm4INig8pI24ryxR2XJTC-EvM8KZ_a5LVW5R5B1Xiec-P5VZ0r678liUIFgHn6qCCTwNiUyIW2KlTDnM4byYhbZTzl9Lq0ZSv2BQUH0Ib1nkdYN2YnaxoBHghxPSgaC8CTVHWotRXxuSrcknvG7eEUTHZhA" data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:32px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
            <p>Subscribe to our newsletter for the latest The Turkish Program updates</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Enter your email address to subscribe</label>

                <div class="entry__field">
                  <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
              <label class="entry__specification" style="font-size:12px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#8390A4; text-align:left">
                Provide your email address to subscribe. For e.g abc@xyz.com
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#aa82ff; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              SUBSCRIBE
            </button>
          </div>
        </div>

        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>
<!-- END - We recommend to place the below code where you want the form in your website html  -->

<!-- START - We recommend to place the below code in footer or bottom of your website html  -->
<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = 'en';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

  window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";




  window.translation = {
    common: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected'
    }
  };

  var AUTOHIDE = Boolean(0);
</script>
<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>


<!-- END - We recommend to place the above code in footer or bottom of your website html  -->
<!-- End Brevo Form -->`}
                ></Script>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-content5">
            <div className="home-details11">
              <h2 className="home-title7">
                <span className="home-text099">The Turkish Program</span>
                <br></br>
              </h2>
              <span className="home-copyright">
                <span>
                  Reach us by:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>coordinator@turkishprogram.com</span>
              </span>
            </div>
            <a
              href="mailto:coordinator@turkishprogram.com?subject=Meet with Turkish Program"
              className="home-link14"
            >
              <div className="home-socials">
                <img alt="image" src="/linkedin.svg" className="social" />
                <img alt="image" src="/instagram.svg" className="social" />
              </div>
            </a>
            <span className="home-copyright1">
              The Turkish Program © 2019-2023 All Rights Reserved
            </span>
          </div>
        </footer>
        <svg viewBox="0 0 1024 1024" className="home-icon23">
          <path d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 85vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/grainy-2100h.png');
            background-position: center;
          }
          .home-background {
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 85%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            left: 0px;
            right: 0px;
            width: 1312px;
            bottom: 0px;
            height: 90%;
            margin: auto;
            opacity: 0.15;
            position: absolute;
            object-fit: cover;
          }
          .home-image01 {
            height: 100%;
            z-index: 100;
            object-fit: cover;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-container01 {
            width: 122px;
            height: 109px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            border-color: #312b2b;
            border-width: 1px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('/screen%20shot%202023-06-16%20at%207.32.30%20pm-veed-remove-background-200h.png');
            background-position: center;
          }
          .home-container02 {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .home-link01 {
            display: contents;
          }
          .home-text {
            color: rgb(255, 255, 255);
            font-size: 42px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
            text-decoration: none;
          }
          .home-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 387px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-link04 {
            text-decoration: none;
          }
          .home-link05 {
            text-decoration: none;
          }
          .home-link06 {
            text-decoration: none;
          }
          .home-register {
            text-decoration: none;
          }
          .home-icon {
            width: 16px;
            height: 16px;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container03 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-text002 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-link08 {
            text-decoration: none;
          }
          .home-link09 {
            text-decoration: none;
          }
          .home-link10 {
            text-decoration: none;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon-group {
            display: flex;
            z-index: 20;
          }
          .home-icons {
            display: flex;
          }
          .home-link12 {
            display: contents;
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .home-link13 {
            display: contents;
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-background1 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-hero-content {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text003 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
          }
          .home-caption {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-register2 {
            border-color: #d91895;
            text-decoration: none;
            background-color: #38195a;
          }
          .home-text006 {
            color: #ffb42c;
            width: 100%;
            font-size: 24px;
            max-width: 85px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 24px;
          }
          .home-text007 {
            width: 100%;
            max-width: 85px;
            text-align: center;
          }
          .home-caption1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
          }
          .home-notes {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-first {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-header {
            width: 555px;
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-text014 {
            font-size: 40px;
          }
          .home-list {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-note {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-point {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-text017 {
            width: 402px;
            font-size: 18px;
            line-height: 27px;
          }
          .home-text018 {
            font-style: italic;
          }
          .home-note1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-point1 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-text023 {
            width: 431px;
            font-size: 16px;
            line-height: 27px;
            margin-right: 19px;
          }
          .home-text024 {
            font-style: italic;
          }
          .home-image02 {
            flex: 1;
            width: 729px;
            height: 610px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-second {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .home-content1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 746px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text-container {
            flex: 1;
            width: 597px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text027 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: none;
          }
          .home-text028 {
            color: var(--dl-color-scheme-black80);
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-checklist {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-check-item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-icon10 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text031 {
            font-size: 26px;
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-icon12 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text034 {
            font-size: 26px;
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-icon14 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text037 {
            font-size: 26px;
            font-style: normal;
            font-weight: 500;
          }
          .home-check-item3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-icon16 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text042 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text043 {
            font-size: 26px;
          }
          .home-register3 {
            text-decoration: none;
          }
          .home-icon18 {
            width: 16px;
            height: 16px;
          }
          .home-quote {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #ffb531;
          }
          .home-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: center;
            flex-direction: column;
          }
          .home-quoted {
            color: rgb(56, 25, 90);
            width: 1074px;
            font-size: 40px;
            font-style: italic;
            text-align: center;
            font-weight: 600;
            line-height: 60px;
          }
          .home-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon20 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-name {
            color: #38195a;
            font-size: 18px;
            font-style: normal;
            font-family: Georgia;
            font-weight: 600;
            line-height: 27px;
          }
          .home-background2 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .home-background3 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            opacity: 0.05;
            position: absolute;
            object-fit: cover;
          }
          .home-speakers {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 1205px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 33px;
          }
          .home-caption2 {
            width: 1214px;
            font-size: 18px;
            text-align: justify;
            line-height: 27px;
          }
          .home-list1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row1 {
            width: 1145px;
            height: 653px;
            position: relative;
            border-color: var(--dl-color-gray-black);
            border-style: hidden;
            border-width: 1px;
          }
          .home-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 477px;
            height: 571px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-image04 {
            right: -424px;
            width: 574px;
            bottom: -52px;
            height: 589px;
            position: absolute;
            align-self: center;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-watch {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #20b0a1;
          }
          .home-content3 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-header2 {
            font-size: 50px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 60px;
          }
          .home-text051 {
            color: var(--dl-color-scheme-brown);
          }
          .home-video {
            width: 100%;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-image05 {
            width: 100%;
            object-fit: cover;
          }
          .home-register4 {
            width: 288px;
            height: 62px;
            transition: 0.3s;
            text-decoration: none;
          }

          .home-text053 {
            font-size: 24px;
          }
          .home-image06 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-why {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 931px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 46px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home-heading1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            width: 1023px;
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption3 {
            color: var(--dl-color-primary-100);
            width: 702px;
            font-size: 18px;
            line-height: 27px;
          }
          .home-brands {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-item {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image07 {
            height: 200px;
            object-fit: cover;
          }
          .home-details01 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: var(--dl-color-success-700);
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description {
            width: 345px;
            font-size: 18px;
            line-height: 27px;
          }
          .home-item1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image08 {
            height: 200px;
            object-fit: cover;
          }
          .home-details02 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title3 {
            color: var(--dl-color-success-700);
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description1 {
            width: 341px;
            font-size: 18px;
            line-height: 27px;
          }
          .home-item2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image09 {
            height: 200px;
            object-fit: cover;
          }
          .home-details03 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title4 {
            color: var(--dl-color-success-700);
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description2 {
            width: 337px;
            font-size: 18px;
            line-height: 27px;
            margin-right: 20px;
          }
          .home-schedule {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 2049px;
            display: flex;
            align-items: center;
            padding-top: 59px;
            flex-direction: column;
            padding-bottom: 61px;
            background-size: cover;
            justify-content: center;
            background-image: url('/grainy-2100h.png');
          }
          .home-content4 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 1900px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-header4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide1 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-text069 {
            color: rgb(255, 255, 255);
          }
          .home-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title5 {
            color: #ffffff;
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-image10 {
            width: 100%;
            object-fit: cover;
          }
          .home-register5 {
            width: auto;
            height: 62px;
            text-decoration: none;
          }
          .home-text070 {
            font-size: 24px;
          }
          .home-icon21 {
            width: 26px;
            height: 24px;
          }
          .home-black {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/grainy-2100h.png');
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-quotes {
            width: 100%;
            height: 921px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: 45px;
            flex-direction: column;
          }
          .home-container06 {
            width: 824px;
            height: 614px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: space-between;
            flex-direction: column;
          }
          .home-image11 {
            width: 733px;
            height: 320px;
            object-fit: cover;
          }
          .home-details04 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote01 {
            color: rgb(255, 255, 255);
            width: 576px;
            height: 160px;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-row3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image12 {
            width: 548px;
            height: 402px;
            object-fit: cover;
            padding-top: 57px;
          }
          .home-row4 {
            width: 100%;
            height: 225px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-details05 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 295px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote02 {
            top: -80px;
            right: -18px;
            width: 290px;
            height: 253px;
            position: absolute;
            font-size: 24px;
            align-self: flex-start;
            text-align: left;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-image13 {
            width: 328px;
            height: 344px;
            object-fit: cover;
          }
          .home-quote03 {
            color: rgb(255, 255, 255);
            width: 417px;
            height: 353px;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 36px;
            padding-left: 11px;
            letter-spacing: 1%;
          }
          .home-testimonials {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header5 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-section-numeral2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide2 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title6 {
            font-size: 50px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 55px;
          }
          .home-quotes1 {
            width: 100%;
            display: flex;
            overflow: auto;
            max-width: var(--dl-size-size-maxwidth);
            align-items: stretch;
            margin-left: max(0px, (100% - 1240px)/2);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-bottom-width: 1px;
          }
          .home-quote04 {
            gap: var(--dl-space-space-threeunits);
            width: 312px;
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image14 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details06 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote05 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote06 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image15 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details07 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote07 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 366px;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote08 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image16 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details08 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name3 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote09 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image17 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details09 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name4 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote11 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 26px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote12 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image18 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details10 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name5 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle4 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote13 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-container07 {
            width: 100%;
            height: 466px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container08 {
            width: 100%;
            height: 100%;
          }
          .home-container09 {
            display: contents;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #aa82ff;
          }
          .home-content5 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-details11 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-title7 {
            width: 100%;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-copyright {
            width: 100%;
            font-size: 14px;
            line-height: 21px;
          }
          .home-link14 {
            display: contents;
          }
          .home-socials {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-copyright1 {
            width: 100%;
            font-size: 14px;
            line-height: 21px;
          }
          .home-icon23 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1200px) {
            .home-register {
              width: 174px;
              padding-right: 6px;
            }
            .home-image04 {
              right: -318px;
              bottom: -51px;
            }
            .home-header2 {
              font-size: 50px;
              font-style: normal;
              font-weight: 600;
              line-height: 60px;
            }
            .home-text051 {
              color: var(--dl-color-scheme-brown);
            }
            .home-schedule {
              height: 1783px;
            }
            .home-container05 {
              width: 100%;
            }
            .home-quotes {
              height: 1033px;
            }
            .home-row3 {
              height: 712px;
            }
            .home-quote02 {
              width: 279px;
            }
            .home-image13 {
              height: 393px;
            }
            .home-quote03 {
              height: 444px;
            }
            .home-subscribe {
              height: 501px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-container07 {
              width: 100%;
              height: auto;
            }
            .home-container08 {
              width: 100%;
              height: 477px;
            }
            .home-copyright {
              font-size: 14px;
              line-height: 21px;
            }
            .home-copyright1 {
              font-size: 14px;
              line-height: 21px;
            }
          }
          @media (max-width: 991px) {
            .home-text {
              width: 153px;
            }
            .home-nav {
              width: 349px;
            }
            .home-register {
              width: 189px;
              padding-left: var(--dl-space-space-unit);
            }
            .home-text006 {
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-text007 {
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-first {
              flex-direction: column;
            }
            .home-content {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text023 {
              font-size: 16px;
              line-height: 27px;
            }
            .home-text024 {
              font-style: italic;
            }
            .home-text025 {
              font-style: italic;
            }
            .home-image02 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-second {
              flex-direction: column;
            }
            .home-content1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-quoted {
              width: 990px;
            }
            .home-caption2 {
              width: 829px;
            }
            .home-image04 {
              right: -172px;
              bottom: -3px;
            }
            .home-header2 {
              font-size: 50px;
              font-style: normal;
              font-weight: 600;
              line-height: 60px;
            }
            .home-image05 {
              width: 100%;
            }
            .home-register4 {
              width: 189px;
              padding-left: var(--dl-space-space-unit);
            }
            .home-why {
              width: 100%;
              height: 1010px;
              padding-right: 84px;
            }
            .home-header3 {
              width: auto;
              max-width: auto;
            }
            .home-title1 {
              width: 100%;
            }
            .home-description {
              width: 263px;
            }
            .home-description1 {
              width: 272px;
            }
            .home-item2 {
              width: 275px;
            }
            .home-description2 {
              width: 254px;
            }
            .home-schedule {
              height: 1517px;
            }
            .home-register5 {
              width: auto;
              padding-left: var(--dl-space-space-unit);
            }
            .home-container05 {
              width: 100%;
              height: 1614px;
            }
            .home-container06 {
              width: 100%;
            }
            .home-image11 {
              width: 100%;
              aspect-ratio: 1;
            }
            .home-details04 {
              width: 100%;
            }
            .home-quote01 {
              width: 100%;
              height: 91px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-row3 {
              flex-direction: column;
            }
            .home-image12 {
              width: 100%;
              height: 489px;
              margin-top: 61px;
              padding-top: 0px;
            }
            .home-row4 {
              height: 173px;
            }
            .home-details05 {
              width: 100%;
            }
            .home-quote02 {
              top: -209px;
              right: 18px;
              width: 833px;
              height: 84px;
              position: static;
            }
            .home-image13 {
              width: 100%;
              height: 371px;
              margin-top: var(--dl-space-space-twounits);
            }
            .home-quote03 {
              width: 100%;
              height: 160px;
              padding-left: 37px;
              padding-right: 29px;
            }
            .home-container07 {
              width: 100%;
              height: 487px;
            }
            .home-container08 {
              height: 100%;
            }
            .home-copyright {
              font-size: 14px;
              line-height: 21px;
            }
          }
          @media (max-width: 790px) {
            .home-hero {
              height: 60vh;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-container02 {
              width: 472px;
            }
            .home-text {
              width: 317px;
              margin-left: 0px;
            }
            .home-icon02 {
              fill: white;
            }
            .home-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-container03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text002 {
              color: #000000;
            }
            .home-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .home-link07 {
              color: #000000;
            }
            .home-link08 {
              color: rgb(0, 0, 0);
            }
            .home-link09 {
              color: rgb(0, 0, 0);
            }
            .home-link10 {
              color: rgb(0, 0, 0);
            }
            .home-link11 {
              color: rgb(0, 0, 0);
            }
            .home-button-container {
              gap: var(--dl-space-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-register1 {
              width: 100%;
              border-width: 1px;
            }
            .home-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .home-hero-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-text003 {
              font-size: 60px;
            }
            .home-caption {
              gap: var(--dl-space-space-unit);
            }
            .home-register2 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-text006 {
              color: rgb(255, 180, 44);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
              line-height: 18px;
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text011 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-register3 {
              width: 100%;
            }
            .home-quote {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quoted {
              width: 667px;
              font-size: 20px;
              line-height: 30px;
            }
            .home-speakers {
              gap: var(--dl-space-space-twounits);
              height: 1140px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-title {
              font-size: 30px;
              line-height: 33px;
            }
            .home-text046 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption2 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-row {
              flex-direction: column;
            }
            .home-row1 {
              width: 722px;
            }
            .home-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-image04 {
              top: 25px;
              right: -117px;
            }
            .home-watch {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content3 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 900px;
            }
            .home-header2 {
              line-height: 46px;
            }
            .home-text051 {
              color: var(--dl-color-scheme-brown);
            }
            .home-register4 {
              width: 247px;
              padding-right: 21px;
            }
            .home-text053 {
              font-size: 24px;
            }
            .home-image06 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .home-why {
              height: 994px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-divide {
              width: 50px;
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-title1 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-row2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-item {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image07 {
              height: 60px;
            }
            .home-details01 {
              gap: var(--dl-space-space-unit);
            }
            .home-title2 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-item1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image08 {
              height: 60px;
            }
            .home-details02 {
              gap: var(--dl-space-space-unit);
            }
            .home-title3 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description1 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-item2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image09 {
              height: 60px;
            }
            .home-details03 {
              gap: var(--dl-space-space-unit);
            }
            .home-title4 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description2 {
              width: 646px;
              font-size: 16px;
              line-height: 24px;
            }
            .home-schedule {
              gap: var(--dl-space-space-twounits);
              height: 1123px;
              position: relative;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content4 {
              gap: var(--dl-space-space-twounits);
              height: 1300px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-divide1 {
              width: 50px;
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-title5 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-register5 {
              width: auto;
              padding-right: 21px;
            }
            .home-black {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quotes {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-details04 {
              width: 767px;
            }
            .home-quote01 {
              width: 100%;
              height: 77px;
              font-size: 16px;
              line-height: 24px;
            }
            .home-row3 {
              height: 1252px;
            }
            .home-quote02 {
              width: 100%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote03 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-testimonials {
              gap: var(--dl-space-space-threeunits);
              height: 1407px;
              padding-top: 0px;
            }
            .home-header5 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-divide2 {
              width: 50px;
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-title6 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-quotes1 {
              margin-left: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-quote04 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author1 {
              width: 100%;
            }
            .home-image14 {
              width: 40px;
            }
            .home-details06 {
              flex: 1;
            }
            .home-name1 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote05 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote06 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: 216px;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author2 {
              width: 100%;
            }
            .home-image15 {
              width: 40px;
            }
            .home-details07 {
              flex: 1;
            }
            .home-name2 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle1 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-text078 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote07 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote08 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author3 {
              width: 100%;
            }
            .home-image16 {
              width: 40px;
            }
            .home-details08 {
              flex: 1;
            }
            .home-name3 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle2 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-text082 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote09 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote10 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-name4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-handle3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote11 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote12 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-name5 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-handle4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote13 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-subscribe {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-container07 {
              width: auto;
            }
            .home-container08 {
              width: 694px;
              height: 456px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-content5 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-title7 {
              font-size: 32px;
              font-style: normal;
              font-weight: 600;
              line-height: 34px;
            }
            .home-text099 {
              font-size: 24px;
              line-height: 34px;
            }
            .home-copyright {
              font-size: 14px;
              line-height: 21px;
            }
            .home-socials {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container02 {
              width: auto;
            }
            .home-text {
              color: rgb(255, 255, 255);
              width: auto;
              font-size: 32px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px;
              text-decoration: none;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-text002 {
              color: rgb(0, 0, 0);
              font-size: 32px;
              font-style: normal;
              font-weight: 600;
              line-height: 45px;
            }
            .home-link08 {
              color: rgb(0, 0, 0);
            }
            .home-link09 {
              color: rgb(0, 0, 0);
            }
            .home-link10 {
              color: rgb(0, 0, 0);
            }
            .home-link11 {
              color: rgb(0, 0, 0);
            }
            .home-button-container {
              width: 100%;
            }
            .home-icon-group {
              justify-content: center;
            }
            .home-icon06 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-twounits);
            }
            .home-text003 {
              font-size: 50px;
            }
            .home-caption {
              width: 438px;
            }
            .home-caption1 {
              color: rgb(255, 255, 255);
              width: 100%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-text011 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text012 {
              font-size: 16px;
            }
            .home-content {
              width: 100%;
              height: 100%;
              padding-right: 29px;
            }
            .home-header {
              width: auto;
              font-size: 30px;
              line-height: 36px;
              margin-right: 0px;
            }
            .home-list {
              gap: var(--dl-space-space-unit);
            }
            .home-point {
              width: 100%;
              max-width: 20px;
            }
            .home-text017 {
              width: 100%;
              line-height: 24px;
            }
            .home-text018 {
              font-size: 16px;
              font-style: italic;
              line-height: 24px;
            }
            .home-text020 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text021 {
              font-size: 16px;
            }
            .home-text022 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point1 {
              width: 100%;
              max-width: 20px;
            }
            .home-text023 {
              width: 100%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-content1 {
              gap: var(--dl-space-space-twounits);
              width: auto;
            }
            .home-content2 {
              gap: var(--dl-space-space-twounits);
            }
            .home-quoted {
              width: auto;
            }
            .home-author {
              flex-direction: column;
            }
            .home-details {
              gap: 4px;
              flex-direction: column;
            }
            .home-name {
              font-size: 16px;
              line-height: 24px;
            }
            .home-speakers {
              height: auto;
            }
            .home-title {
              font-size: 30px;
              font-style: normal;
              font-weight: 600;
              line-height: 33px;
            }
            .home-text046 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-text048 {
              font-size: 20px;
            }
            .home-caption2 {
              width: auto;
            }
            .home-speaker {
              width: 407px;
              height: 394px;
              position: 0px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-image04 {
              top: var(--dl-space-space-halfunit);
              left: var(--dl-space-space-halfunit);
              right: var(--dl-space-space-halfunit);
              width: auto;
              bottom: var(--dl-space-space-halfunit);
              height: 381px;
              position: static;
              align-self: center;
            }
            .home-watch {
              height: 536px;
            }
            .home-content3 {
              height: 93px;
            }
            .home-header2 {
              font-size: 50px;
              font-style: normal;
              font-weight: 600;
              line-height: 46px;
            }
            .home-video {
              width: 100%;
            }
            .home-container04 {
              width: 100%;
              height: 229px;
            }
            .home-image05 {
              width: 100%;
              height: auto;
            }
            .home-register4 {
              background-color: var(--dl-color-success-700);
            }
            .home-text053 {
              color: var(--dl-color-gray-white);
              font-size: 24px;
            }
            .home-why {
              height: auto;
            }
            .home-header3 {
              height: 111px;
            }
            .home-divide {
              width: 20px;
            }
            .home-text056 {
              line-height: 24px;
            }
            .home-title1 {
              width: 378px;
              height: 44px;
            }
            .home-brands {
              height: auto;
            }
            .home-item {
              margin-top: 0px;
            }
            .home-item2 {
              width: 100%;
              height: auto;
            }
            .home-details03 {
              width: 100%;
            }
            .home-description2 {
              width: 90%;
            }
            .home-schedule {
              height: 598px;
            }
            .home-content4 {
              height: 1052px;
            }
            .home-divide1 {
              width: 20px;
            }
            .home-text069 {
              color: rgb(255, 255, 255);
              line-height: 13px;
            }
            .home-title5 {
              color: rgb(255, 255, 255);
              font-size: 30px;
              font-style: normal;
              font-weight: 600;
              line-height: 33px;
            }
            .home-image10 {
              width: 382px;
              height: 392px;
              align-self: center;
            }
            .home-register5 {
              width: 325px;
            }
            .home-text070 {
              font-size: 22px;
            }
            .home-black {
              height: auto;
              padding-bottom: 3px;
            }
            .home-container05 {
              height: auto;
            }
            .home-quotes {
              height: 1498px;
            }
            .home-container06 {
              width: 479px;
            }
            .home-image11 {
              width: 375px;
              height: var(--dl-size-size-large);
              align-self: center;
            }
            .home-details04 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-quote01 {
              width: 375px;
              height: auto;
              font-size: 24px;
              margin-top: 0px;
              padding-top: 12px;
              padding-left: 26px;
              padding-right: 5px;
            }
            .home-row4 {
              height: 197px;
              margin-bottom: 0px;
            }
            .home-details05 {
              width: 447px;
              height: 152px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-quote02 {
              top: -74px;
              left: 59px;
              width: 100%;
              height: 124px;
              position: static;
              font-size: 24px;
              font-weight: 400;
              line-height: 24px;
              padding-top: 12px;
              padding-left: 14px;
              padding-right: 11px;
            }
            .home-image13 {
              width: auto;
            }
            .home-quote03 {
              width: 100%;
              height: 163px;
              font-size: 24px;
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 12px;
              padding-right: var(--dl-space-space-unit);
            }
            .home-testimonials {
              height: 1444px;
              margin-top: 27px;
            }
            .home-divide2 {
              width: 20px;
            }
            .home-text074 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-quotes1 {
              height: 1246px;
            }
            .home-image14 {
              width: 57px;
              height: 59px;
            }
            .home-image15 {
              width: 58px;
              height: 58px;
            }
            .home-handle1 {
              color: rgba(255, 255, 255, 0.3);
              font-size: 14px;
            }
            .home-text078 {
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote07 {
              height: 111px;
            }
            .home-image16 {
              width: 57px;
              height: 59px;
            }
            .home-handle2 {
              color: rgba(255, 255, 255, 0.3);
            }
            .home-text082 {
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote09 {
              color: rgb(255, 255, 255);
            }
            .home-details09 {
              width: 221px;
              margin-right: 0px;
            }
            .home-name4 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-handle3 {
              color: rgba(255, 255, 255, 0.3);
            }
            .home-quote11 {
              color: rgb(255, 255, 255);
              width: auto;
              font-size: 16px;
              line-height: 20px;
            }
            .home-details10 {
              width: 178px;
            }
            .home-handle4 {
              color: rgba(255, 255, 255, 0.3);
              font-size: 14px;
            }
            .home-quote13 {
              color: rgb(255, 255, 255);
            }
            .home-text097 {
              line-height: 20px;
            }
            .home-subscribe {
              height: 590px;
              padding-top: 0px;
              padding-left: 0px;
              padding-bottom: 21px;
            }
            .home-container07 {
              width: 100%;
            }
            .home-container08 {
              width: 100%;
              height: 520px;
            }
            .home-footer {
              height: 242px;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-content5 {
              height: 287px;
              max-width: auto;
              padding-top: var(--dl-space-space-halfunit);
            }
            .home-details11 {
              height: 34px;
            }
            .home-copyright {
              line-height: 21px;
            }
            .home-socials {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: 42px;
            }
            .home-copyright1 {
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
