import React, { useState } from 'react';
import albumArt from './images/albumArt.jpg'
import logo from './images/mdl-actriz-transparent.png';
import bandcamp from './images/bandcamp-brands-solid.svg';
import discord from './images/discord-brands-solid.svg';
import facebook from './images/facebook-brands-solid.svg';
import instagram from './images/instagram-brands-solid.svg';
import soundcloud from './images/soundcloud-brands-solid.svg';
import tiktok from './images/tiktok-brands-solid.svg';
import twitter from './images/x-twitter-brands-solid.svg';
import youtube from './images/youtube-brands-solid.svg';
import './App.css';

function App() {
  const [isStoreHoverVisible, setIsStoreHoverVisible] = useState(false);
  const [isStoreHoverOpen, setIsStoreHoverOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  // Handlers for mouse events
  const handleMouseEnter = () => {
    setIsStoreHoverOpen(true);
    setIsStoreHoverVisible(true);
  };

  const handleMouseLeave = () => {
    setIsStoreHoverVisible(false);
    setTimeout(() => {
      setIsStoreHoverOpen(false);
    }, 500); // delay the dropdown closing by 200ms
  };

  return (
    <div className={`App fade-in-one ${isInverted ? 'inverted' : ''}`}>
        <div className="body">
          <div className="logo-container" onClick={() => setIsInverted(!isInverted)}>
            <img src={logo} alt="Model Actriz" className={`main-logo ${isInverted ? 'inverted-logo' : ''}`} />
          </div>
          <div className="under-layer fade-in-two">
            <div className="background" style={{ backgroundImage: `url(${albumArt})` }} />
          </div>
          <div className="over-layer">
            <div className="link-section-container">
            <div className="site-link" ><a href='https://found.ee/ma-newsletter' rel="noreferrer" target="_blank">newsletter</a></div>
              <div style={{ 'position': 'relative', 'boxSizing': 'border-box' }}>
              <div className="dropdown-container" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                <div className="site-link">
                  <span>stores</span>
                  <span className="caret">&#9660;</span>
                </div>
                
                {/* Dropdown menu */}
                  <div className={`dropdown-menu ${isStoreHoverVisible ? 'show' : ''}`}>
                    {isStoreHoverOpen && <div className="dropdown-items">
                    <a href="https://store.modelactriz.com/" rel="noreferrer" target="_blank">USA</a>
                    <a href='https://apm.allotment.pro/artist/model-actriz/' rel="noreferrer" target="_blank">UK</a>
                    </div>}
                  </div>
              </div>
              </div>
            </div>
            <div className="link-section-container">
              <a href="https://modelactriz.bandcamp.com/" aria-label="bandcamp" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${bandcamp})` }} />
              <div className="icon" aria-label="discord" id="icon2" style={{ backgroundImage: `url(${discord})` }} />
              <a href="https://www.facebook.com/modelactriz" aria-label="facebook" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${facebook})` }} />
              <a href="https://instagram.com/modelactriz" aria-label="instagram" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${instagram})` }} />
              <a href="https://soundcloud.com/modelactriz" aria-label="soundcloud" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${soundcloud})` }} />
              <a href="https://www.tiktok.com/@modelactriz" aria-label="tiktok" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${tiktok})` }} />
              <a href="https://twitter.com/modelactriz" aria-label="twitter" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${twitter})` }} />
              <a href="https://www.youtube.com/c/modelactriz?sub_confirmation=1" aria-label="youtube" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${youtube})` }} />
            </div>
          <div class="section-container">
            <div class="content-block">
              <div class="content-container tour" style={{'textAlign': 'left'}}>
              <div id="seated-55fdf2c0" data-artist-id="7734ee5e-dca5-431a-8a77-f88e31d09ffc" data-css-version="3"></div>
              </div>
            </div>
          </div>
          <div class="section-container">
            <div class="content-block">
              <div class="content-container">
              <h1>contact</h1>
              <div className="contact-wrapper">
                <div className="contact-row">
                  <div className="contact-label">
                    <span>management</span>
                  </div>
                  <div className="contact-info">
                    <a href="mailto:mgmt@modelactriz.com?" rel="noreferrer" target="_blank">mgmt@modelactriz.com</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-label">
                    <span>world (ex-europe) booking</span>
                  </div>
                  <div className="contact-info">
                    <a href="mailto:sam@highroadtouring.com" rel="noreferrer" target="_blank">sam@highroadtouring.com</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-label">
                    <span>europe booking</span>
                  </div>
                  <div className="contact-info">
                    <a href="mailto:roxane@atc-live.com" rel="noreferrer" target="_blank">roxane@atc-live.com</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-label">
                    <span>us pr</span>
                  </div>
                  <div className="contact-info">
                    <a href="mailto:carrie@tcbpr.com" rel="noreferrer" target="_blank">carrie@tcbpr.com</a>
                    <a href="mailto:alison@tcbpr.com" rel="noreferrer" target="_blank">alison@tcbpr.com</a>
                    <a href="mailto:claire@tcbpr.com" rel="noreferrer" target="_blank">claire@tcbpr.com</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-label">
                    <span>uk pr</span>
                  </div>
                  <div className="contact-info">
                    <a href="mailto:neeliya.desilva@goodmachinepr.com" rel="noreferrer" target="_blank">neeliya.desilva@goodmachinepr.com</a>
                    <a href="mailto:chris.cuff@goodmachinepr.com" rel="noreferrer" target="_blank">chris.cuff@goodmachinepr.com</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-label">
                    <span>licensing</span>
                  </div>
                  <div className="contact-info">
                    <a href="mailto:jennifer@hipgnosissongs.com" rel="noreferrer" target="_blank">jennifer@hipgnosissongs.com</a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;