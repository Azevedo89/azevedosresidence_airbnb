import React from 'react'
import './FooterC.css'

function Footer() {
  const instagramLink = 'https://www.instagram.com/residenciaazevedo/';
  return (
    <footer>
      <div className="instagram">
        <div className="social-media">
            <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
