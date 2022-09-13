import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Simplify your design process',
      paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            {/*<SectionHeader data={sectionHeader} className="center-content reveal-from-top">*/}
            {/*  <div className="features-split-icon mb-24">*/}
            {/*    <Image*/}
            {/*      src={require('./../../assets/images/features-split-icon.svg')}*/}
            {/*      alt="Features split icon"*/}
            {/*      width={80}*/}
            {/*      height={80} />*/}
            {/*  </div>*/}
            {/*</SectionHeader>*/}
            <div className={splitClasses}>

              <div className="split-item reveal-from-top">
                <div className={"container-lg"} >
                  <h3 className="mt-0 mb-16">
                    UCC
                  </h3>
                  <p>
                    Cloud computing has firmly established itself as an indispensable utility for the digital age. Cloud services consumers expect and rely on sufficient computing power, the availability of data and media, and that these will be accessible across a range of devices.
                  </p>
                  <p>
                    The expectation now is that Cloud services providers are capable of maintaining streamed services that are always available. Also, social and technological challenges are met with the development and adoption of new technologies that provide a safer, more secure, and richer digital experience for users and customers. Therefore, it is essential that sound scientific principles underpinning cloud technology and its economic value to both service providers and consumers are expressed and understood.
                  </p>
                </div>
              </div>

              <div className="split-item reveal-from-top">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">
                    UCC 2022
                  </h3>
                  <p className="m-0">
                    UCC2022 is the premier IEEE/ACM conference for areas related to Cloud Computing as a Utility and provides an international forum for leading researchers and practitioners in this important and growing field.
                  </p>
                  {/*<p>*/}
                  {/*  UCC2022 will be hosted at the Washington State University. Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood.*/}
                  {/*</p>*/}
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-04',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={img02Style}>
                    <Image
                      src={require('./../../assets/images/venueHolder.png')}
                      alt="Features split top 02"
                      width={344}
                      height={212} />
                  </div>
                </div>
              </div>

              <div className="split-item reveal-from-top">
                <div className={"container-lg reveal-from-top"} >
                  {/*<h3 className="mt-0 mb-16">*/}
                  {/*  Data-driven insights*/}
                  {/*</h3>*/}
                  <p>
                    This will be the 14th UCC in a successful conference series of community-driven events. Previous events were held in Shanghai, China (Cloud 2009), Melbourne, Australia (Cloud 2010 & UCC 2011), Chennai, India (UCC 2010), Chicago, USA (UCC 2012), Dresden, Germany (UCC2013), London, UK (UCC 2014), Limassol, Cyprus (UCC 2015), Shanghai, China (UCC 2016), Austin, Texas, USA (UCC 2017), Technopark Zurich, Switzerland (UCC 2018), Aucland, New Zealand(UCC 2019) Leicester, UK(UCC 2020) and Leicester, UK(UCC 2021).
                  </p>
                  <p>
                    UCC2022 is co-located with BDCAT2022 and offers a technical programme, workshops, tutorials, doctoral symposium, and cloud challenge.
                  </p>
                  <p>
                    Both UCC and BDCAT will act with responsibility with public good as always the primary consideration. Authors and participants are encouraged to read the ACM Code of Ethics and Professional Conduct and ACM Policy Against Harassment.
                  </p>
                </div>
                {/*<div className={*/}
                {/*  classNames(*/}
                {/*    'split-item-image center-content-mobile illustration-element-05',*/}
                {/*    imageFill && 'split-item-image-fill'*/}
                {/*  )}>*/}
                {/*  <Image*/}
                {/*    src={require('./../../assets/images/features-split-image.svg')}*/}
                {/*    alt="Features split 03"*/}
                {/*    width={528}*/}
                {/*    height={396} />*/}
                {/*  <div style={img03Style}>*/}
                {/*    <Image*/}
                {/*      src={require('./../../assets/images/features-split-top-03.png')}*/}
                {/*      alt="Features split top 03"*/}
                {/*      width={747}*/}
                {/*      height={570} />*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const img01Style = {
  position: 'absolute',
  width: '139.77%',
  maxWidth: '139.77%',
  top: '-13.89%',
  left: '-16.47%'
}

const img02Style = {
  position: 'absolute',
  width: '140.91%',
  maxWidth: '140.91%',
  top: '-13.88%',
  left: '-24.43%'
}

const img03Style = {
  position: 'absolute',
  width: '141.48%',
  maxWidth: '141.48%',
  top: '-13.88%',
  left: '-16.47%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
