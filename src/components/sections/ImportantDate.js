import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import {timeFormat} from 'd3'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const event = [
    {key:'Paper Submissions Due',date: '9/5/2021'},
    {key:'Notification of Acceptance',date: '10/10/2021'},
    {key:'Camera ready papers due',date: '10/31/2021'},
    {key:'Early registration Deadline',date: '10/31/2021'},
    // {key:'Conference',date: ['12/6/2021','12/9/2021']},
]
class ImportantDate extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <h2>Important Date</h2>
          <div
            // className={innerClasses}
          >
            <ul className="list-reset">
              {event.map(e=><li key={e.key} className="tiles-item reveal-from-top" data-reveal-delay="200" style={{maxWidth:'unset'}}>
                <div className={"time-card tiles-item-inner has-shadow"}>
                  <div className={"time"}>
                    <h3>{timeFormat('%d')(new Date(e.date))}</h3>
                    <strong>{timeFormat('%b')(new Date(e.date))}</strong>
                  </div>
                  <span>{e.key}</span>
                </div>
              </li>)}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

ImportantDate.propTypes = propTypes;
ImportantDate.defaultProps = defaultProps;

export default ImportantDate;
