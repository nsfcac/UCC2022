import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Team extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    // const sectionHeader = {
    //   title: 'Meet the team - Lorem ipsum is placeholder text.',
    //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    // };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={{title:'General Chairs'}} className="center-content reveal-from-top" />
            <div className={tilesClasses}>
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/xinghui_zhao.jpg')}
                        alt="Xinghui Zhao"
                        width={190}
                        height={190} />
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <h5 className="team-item-name mt-0 mb-4">
                          Xinghui Zhao
                      </h5>
                      <div className="team-item-role text-xxs tt-u text-color-primary mb-8">
                          General Chair
                      </div>
                      <p className="m-0 text-sm">
                          LWashington State University,
                          Vancouver, Washington, USA.
                      </p>
                  </div>
                </div>
              </div>
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/alan_sill.jpg')}
                        alt="Alan Sill"
                        width={190}
                        height={190} />
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">
                      <h5 className="team-item-name mt-0 mb-4">
                          Alan Sill
                      </h5>
                      <div className="team-item-role text-xxs tt-u text-color-primary mb-8">
                          General Chair
                      </div>
                      <p className="m-0 text-sm">
                          Texas Tech University,
                          Lubbock, Texas, USA
                      </p>
                  </div>
                </div>
              </div>

              {/*<div className="tiles-item">*/}
              {/*  <div className="tiles-item-inner">*/}
              {/*    <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">*/}
              {/*      <div className="team-item-image mb-24 illustration-element-07">*/}
              {/*        <Image*/}
              {/*          src={require('./../../assets/images/team-member-03.jpg')}*/}
              {/*          alt="Team member 03"*/}
              {/*          width={190}*/}
              {/*          height={190} />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">*/}
              {/*        <h5 className="team-item-name mt-0 mb-4">*/}
              {/*            Clifford Kennedy*/}
              {/*        </h5>*/}
              {/*        <div className="team-item-role text-xxs tt-u text-color-primary mb-8">*/}
              {/*            CEO & Co-Founder*/}
              {/*        </div>*/}
              {/*        <p className="m-0 text-sm">*/}
              {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.*/}
              {/*        </p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*<div className="tiles-item">*/}
              {/*  <div className="tiles-item-inner">*/}
              {/*    <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item">*/}
              {/*      <div className="team-item-image mb-24">*/}
              {/*        <Image*/}
              {/*          src={require('./../../assets/images/team-member-04.jpg')}*/}
              {/*          alt="Team member 04"*/}
              {/*          width={190}*/}
              {/*          height={190} />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">*/}
              {/*        <h5 className="team-item-name mt-0 mb-4">*/}
              {/*            Clifford Kennedy*/}
              {/*        </h5>*/}
              {/*        <div className="team-item-role text-xxs tt-u text-color-primary mb-8">*/}
              {/*            CEO & Co-Founder*/}
              {/*        </div>*/}
              {/*        <p className="m-0 text-sm">*/}
              {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.*/}
              {/*        </p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
              <SectionHeader data={{title:'Programme Committee Chairs'}} className="center-content reveal-from-top" />
              <div className={tilesClasses}>
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="150">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/tommy_dang.jpg')}
                        alt="tommy dang"
                        width={190}
                        height={190} />
                    </div>
                  </div>
                  <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="350">
                      <h5 className="team-item-name mt-0 mb-4">
                          Tommy Dang
                      </h5>
                      <div className="team-item-role text-xxs tt-u text-color-primary mb-8">
                          Financial Chair
                      </div>
                      <p className="m-0 text-sm">
                          Texas Tech University,
                          Lubbock, Texas, USA
                      </p>
                  </div>
                </div>
              </div>

              {/*<div className="tiles-item">*/}
              {/*  <div className="tiles-item-inner">*/}
              {/*    <div className="team-item-header reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">*/}
              {/*      <div className="team-item-image mb-24">*/}
              {/*        <Image*/}
              {/*          src={require('./../../assets/images/team-member-06.jpg')}*/}
              {/*          alt="Team member 06"*/}
              {/*          width={190}*/}
              {/*          height={190} />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <div className="team-item-content reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">*/}
              {/*        <h5 className="team-item-name mt-0 mb-4">*/}
              {/*            Clifford Kennedy*/}
              {/*        </h5>*/}
              {/*        <div className="team-item-role text-xxs tt-u text-color-primary mb-8">*/}
              {/*            CEO & Co-Founder*/}
              {/*        </div>*/}
              {/*        <p className="m-0 text-sm">*/}
              {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.*/}
              {/*        </p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
