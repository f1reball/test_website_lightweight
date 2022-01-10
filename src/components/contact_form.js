import React from 'react';

import ContactInfo from './contact_info.js';
import Footer from './footer.js';


export default props => {
  return (
      <div class="contact-container">

        <div class="banner-blocking">
            <div class="text-banner-wrapper">
                <h2>Let's Talk About U</h2>
            </div>
        </div>

            <div class="contact-form-container">
            <form id="contact-form">

                <div class="contact-wrapper">
                <div class="form-group-a-1">
                    <input type="text" placeholder="First Name"/>
                </div>

                <div class="form-group-a-2">
                    <input type="text" placeholder="Last Name"/>
                </div>

                <div class="form-group-b-1">
                    <input type="email" placeholder="Email"/>
                </div>

                <div class="form-group-b-2">
                    <input type="tel" placeholder="Phone Number"/>
                </div>

                <div class="form-group-c">
                    <textarea type="text" placeholder="Message"/>
                </div>
                </div>

                <input type="submit" value="Send"/>

            </form>
            </div>
      </div>
  );
};
