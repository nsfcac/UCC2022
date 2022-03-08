import React from 'react';
import TitlewithCountdown from '../components/sections/TitlewithCountdown';
import Clients from '../components/sections/Clients';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import ImportantDate from '../components/sections/ImportantDate';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitlewithCountdown imageFill className="illustration-section-01" />
        <FeaturesSplit invertMobile imageFill className="illustration-section-03" />
        <ImportantDate  topDivider className="gradient-section" />
        <Clients topDivider bottomDivider />
        {/*<Pricing hasBgColor topDivider pricingSwitcher />*/}
        {/*<Cta hasBgColor invertColor split className="illustration-element-08" />*/}
      </React.Fragment>
    );
  }
}

export default Home;
