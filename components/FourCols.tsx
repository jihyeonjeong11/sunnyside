import React from 'react';

import {
  NextImg,
  Grid,
} from "../styles/layout";


const FourCols : React.FC = ({  }) : React.ReactElement => {
  return (
    <section>
      <Grid count="2" lgcount="4">
        <NextImg src="/images/mobile/image-gallery-milkbottles.jpg"   imgwidth="100%" imgheight="100%" width={360} height={360}/>
        <NextImg src="/images/mobile/image-gallery-orange.jpg"  imgwidth="100%" imgheight="100%" width={360} height={360}/>
        <NextImg src="/images/mobile/image-gallery-cone.jpg"   imgwidth="100%" imgheight="100%" width={360} height={360}/>
        <NextImg src="/images/mobile/image-gallery-sugar-cubes.jpg"   imgwidth="100%" imgheight="100%" width={360} height={360}/>

      </Grid>
    </section>
  );
};

export default FourCols;
