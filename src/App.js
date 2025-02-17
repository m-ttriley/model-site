import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import logo from './images/mdl-actriz-transparent.png';
import bandcamp from './images/bandcamp-brands-solid.svg';
import bluesky from './images/bluesky-brands-solid.svg';
import discord from './images/discord-brands-solid.svg';
import facebook from './images/facebook-brands-solid.svg';
import instagram from './images/instagram-brands-solid.svg';
import soundcloud from './images/soundcloud-brands-solid.svg';
import tiktok from './images/tiktok-brands-solid.svg';
import twitter from './images/x-twitter-brands-solid.svg';
import youtube from './images/youtube-brands-solid.svg';
import './App.css';
import ContactRow from './ContactRow';

function App() {
  const [isStoreHoverVisible, setIsStoreHoverVisible] = useState(false);
  const [isStoreHoverOpen, setIsStoreHoverOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [backgroundToggle, setBackgroundToggle] = useState(false);

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
    <div className={`App fade-in-one ${isInverted ? 'invert-background' : ''}`}>
      {backgroundToggle && <div className={`full-page-bg ${isInverted ? 'inverted' : ''}`} />}
      <div className='bg-toggle' onClick={() => setBackgroundToggle(!backgroundToggle)}>toggle bg</div>
      <div className="body">
        <div className={`logo-container ${isInverted ? 'inverted' : ''}`} onClick={() => setIsInverted(!isInverted)}>
          <img src={logo} alt="Model Actriz" className={`main-logo ${isInverted ? 'inverted-logo' : ''}`} />
        </div>
        {!backgroundToggle && <div className={`under-layer fade-in-two ${isInverted ? 'inverted' : ''}`}>
          <div className="background" />
        </div>}
        <div className={`over-layer ${isInverted ? 'inverted' : ''}`}>
          <div className="link-section-container">
            <div className="site-link" ><a href='https://found.ee/ma-newsletter' rel="noreferrer" target="_blank">newsletter</a></div>
            <div style={{ 'position': 'relative', 'boxSizing': 'border-box' }}>
              <div className="dropdown-container"
                onMouseEnter={handleMouseEnter}
                onClick={isStoreHoverOpen ? handleMouseLeave : handleMouseEnter}
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
            <a href="https://bsky.app/profile/modelactriz.bsky.social" aria-label="bluesky" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${bluesky})` }} />
            <a href="https://www.youtube.com/c/modelactriz?sub_confirmation=1" aria-label="youtube" rel="noreferrer" target="_blank" className="icon" style={{ backgroundImage: `url(${youtube})` }} />
          </div>
          <div class="section-container">
            <div class="content-block">
              <div class="content-container tour" style={{ 'textAlign': 'left' }}>
                <div id="seated-55fdf2c0" data-artist-id="7734ee5e-dca5-431a-8a77-f88e31d09ffc" data-css-version="3"></div>
              </div>
            </div>
          </div>
          <div class="section-container">
            <div class="content-block">
              <div class="content-container">
                <Popup trigger={
                  <div className='site-link contact'>
                    contact
                  </div>
                }
                  modal={true}
                  position="center center"
                  contentStyle={{ backgroundColor: isInverted ? 'black' : 'white', color: isInverted ? 'white' : 'black' }}
                >
                  {close => <div className='contact-wrapper'>
                    <button className="close" onClick={close}>&times;</button>
                    <ContactRow label="management" emails={["mgmt@modelactriz.com"]} isInverted={isInverted} />
                    <ContactRow label="world (ex-europe) booking" emails={["sam@highroadtouring.com"]} isInverted={isInverted} />
                    <ContactRow label="europe booking" emails={["roxane@atc-live.com"]} isInverted={isInverted} />
                    <ContactRow label="us pr" emails={["carrie@tcbpr.com", "alison@tcbpr.com", "claire@tcbpr.com"]} isInverted={isInverted} />
                    <ContactRow label="uk pr" emails={["neeliya.desilva@goodmachinepr.com", "chris.cuff@goodmachinepr.com"]} isInverted={isInverted} />
                    <ContactRow label="licensing" emails={["jennifer@hipgnosissongs.com"]} isInverted={isInverted} />
                  </div>}
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;