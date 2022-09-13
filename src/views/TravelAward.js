import React from 'react';
import GenericSection from "../components/sections/GenericSection";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";


class Keynote extends React.Component {
  render() {
    return (
      <React.Fragment>
          <HeroFull content={{title: 'Travel Award',
            inside:<><p>A limited number of travel awards are available to student authors. More details about the application process will be announced soon</p>
              <div>
                  <Image src={require(`./../assets/images/NSF_4-Color_bitmap_Logo.png`)}
                         width={100}
                         height={100}/>
              </div>
            </>
          }}/>
      </React.Fragment>
    );
  }
}

export default Keynote;
