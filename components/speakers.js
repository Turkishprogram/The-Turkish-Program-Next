import React from 'react'

import PropTypes from 'prop-types'

import SectionNumeral from './section-numeral'
import Speaker from './speaker'

const Speakers = (props) => {
  return (
    <>
      <section className="speakers-speakers">
        <div className="speakers-header">
          <SectionNumeral></SectionNumeral>
          <div data-aos="fade-right" className="speakers-heading">
            <h2 className="speakers-title">{props.title}</h2>
            <p className="speakers-caption">{props.caption}</p>
          </div>
        </div>
        <div className="speakers-list">
          <div className="speakers-row">
            <div className="speaker">
              <Speaker
                image="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                rootClassName="speaker-root-class-name"
              ></Speaker>
              <Speaker
                image="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                rootClassName="speaker-root-class-name3"
              ></Speaker>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .speakers-speakers {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 332px;
          }
          .speakers-header {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .speakers-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .speakers-title {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .speakers-caption {
            font-size: 18px;
            line-height: 27px;
          }
          .speakers-list {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .speakers-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          @media (max-width: 790px) {
            .speakers-speakers {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .speakers-heading {
              gap: var(--dl-space-space-unit);
            }
            .speakers-title {
              font-size: 30px;
              line-height: 33px;
            }
            .speakers-caption {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .speakers-row {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Speakers.defaultProps = {
  caption:
    "At The Turkish Program, our founder and main instructor, Yağız, is a seasoned professor of the Turkish language. With an unwavering passion for Turkish culture and history, Yağız's expertise spans every facet of this captivating language. Yağız is committed to a pedagogy that embraces eclecticism and adaptability, ensuring each student's needs and learning styles are honored. He understands that every learner is unique, and strives to create a supportive environment that nurtures their language journey. Beyond his dedication to teaching Turkish, Yağız indulges in creative writing and the captivating melodies of traditional Turkish and Greek music. His artistic pursuits not only enrich his own life, but also bring a vibrant energy to his teaching, fostering an engaging and inspiring learning experience.",
  title: 'Ali Yagiz Sen',
}

Speakers.propTypes = {
  caption: PropTypes.string,
  title: PropTypes.string,
}

export default Speakers
