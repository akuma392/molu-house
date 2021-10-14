import './slider.css';
// import SimpleImageSlider from 'react-simple-image-slider';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  'https://images.pexels.com/photos/221011/pexels-photo-221011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500g',

  'https://images.pexels.com/photos/705675/pexels-photo-705675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

  'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

  'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

  'https://images.pexels.com/photos/3681605/pexels-photo-3681605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

// function Slider(){
//   return (
//     <div>
//       <SimpleImageSlider width={896} height={504} images={images} />
//     </div>
//   );
// }

const Slider = () => {
  return (
    <div className="slide-container ">
      <Slide duration="2000">
        {/* <div className="each-slide ">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide ">
          <div
            className=""
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide ">
          <div
            className=""
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          >
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide ">
          <div
            className=""
            style={{ backgroundImage: `url(${slideImages[3]})` }}
          >
            <span>Slide 4</span>
          </div>
        </div>
        <div className="each-slide ">
          <div
            className=""
            style={{ backgroundImage: `url(${slideImages[4]})` }}
          >
            <span>Slide 5</span>
          </div>
        </div> */}
      </Slide>
    </div>
  );
};
export default Slider;
