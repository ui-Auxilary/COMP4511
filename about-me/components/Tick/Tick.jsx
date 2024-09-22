import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const Tick = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 512 512'
    width={30}
    height={30}
    {...props}
  >
    <Path
      d='M437.3 30 202.7 339.3 64 200.7l-64 64L213.3 478 512 94z'
      fill={'white'}
    />
  </Svg>
);
export default Tick;
