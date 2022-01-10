import React from 'react';


import Footer from './footer.js';
import Home_heading from './home_heading.js';
import Home_color_block_1 from './home-color-block1.js';
import Home_second_block from './home-second-block.js';


export default props => {
  return (
      <div>

      <Home_heading />
      <Home_color_block_1 />
      <Home_second_block />

      <Footer />

      </div>
  );
};
