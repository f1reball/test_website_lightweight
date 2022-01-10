import React from 'react';

import ContactInfo from './contact_info.js';
import Footer from './footer.js';
import Contact_form from './contact_form.js';

export default props => {
  return (
      <div>

      <Contact_form/>
      <ContactInfo/>
      <Footer/>

      </div>
  );
};
