import Ztext from 'react-ztext';
import albumArt from './images/albumArt.jpg';
import candle from './images/candle.gif';
import bandcamp from './images/bandcamp-brands-solid.svg';
import discord from './images/discord-brands-solid.svg';
import facebook from './images/facebook-brands-solid.svg';
import instagram from './images/instagram-brands-solid.svg';
import soundcloud from './images/soundcloud-brands-solid.svg';
import tiktok from './images/tiktok-brands-solid.svg';
import twitter from './images/x-twitter-brands-solid.svg';
import youtube from './images/youtube-brands-solid.svg';
import './App.css';

const Text3DModel = () => (
  <Ztext
    depth='1rem'
    direction='forwards'
    eventRotation='15deg'
    eventDirection='default'
    layers={5}
    perspective='500px'
    style={{
      fontSize: '2rem',
      fontWeight: 'bold',
    }}
  >
    <span className="z-text" role='img'>
      MODEL / ACTRIZ
    </span>
  </Ztext>
)

function App() {
  return (
    <div className="App fade-in-one">
        <div className="body">
          <div style={{'textAlign': 'center', paddingBottom: '35px'}}>
          <Text3DModel />
          </div>
          {/* <div className="background" style={{ backgroundImage: `url(${albumArt})` }} /> */}
          <div className="link-section-container">
            <div className="circle-container">
            <div className="title" id="circle1">
              <img style={{height: '100px', width: '100px'}} src={candle} alt="candle" />
              </div>
            <div className="site-link" id="link1"><a href='https://found.ee/ma-newsletter' target="_blank">NEWSLETTER</a></div>
            <div className="site-link" id="link2"><a href='https://apm.allotment.pro/artist/model-actriz/' target="_blank">STORE [UK]</a></div>
            <div className="site-link" id="link3">CONTACT</div>
            <div className="site-link" id="link4"><a href="https://store.modelactriz.com/" target="_blank">STORE</a></div>
          </div>
          <div className="circle-container">
            <div className="title" id="circle1">
              <img style={{height: '100px', width: '100px'}} src={candle} alt="candle" />
              </div>
            <a href="https://modelactriz.bandcamp.com/" target="_blank" className="icon" id="icon1" style={{ backgroundImage: `url(${bandcamp})` }} />
            <div className="icon" id="icon2" style={{ backgroundImage: `url(${discord})` }} />
            <a href="https://www.facebook.com/modelactriz" target="_blank" className="icon" id="icon3" style={{ backgroundImage: `url(${facebook})` }} />
            <a href="https://instagram.com/modelactriz" target="_blank" className="icon" id="icon4" style={{ backgroundImage: `url(${instagram})` }} />
            <a href="https://soundcloud.com/modelactriz" target="_blank" className="icon" id="icon5" style={{ backgroundImage: `url(${soundcloud})` }} />
            <a href="https://www.tiktok.com/@modelactriz" target="_blank" className="icon" id="icon6" style={{ backgroundImage: `url(${tiktok})` }} />
            <a href="https://twitter.com/modelactriz" target="_blank" className="icon" id="icon7" style={{ backgroundImage: `url(${twitter})` }} />
            <a href="https://www.youtube.com/c/modelactriz?sub_confirmation=1" target="_blank" className="icon" id="icon8" style={{ backgroundImage: `url(${youtube})` }} />
          </div>
        </div>
        <div class="section-container">
          <div class="content-block">
          </div>
          </div>
        <div class="section-container">
          <div class="content-block">
            <div class="tab">TOUR</div>
            <div class="content-container tour" style={{'textAlign': 'left'}}>
            <div id="seated-55fdf2c0" data-artist-id="7734ee5e-dca5-431a-8a77-f88e31d09ffc" data-css-version="3"></div>
            </div>
          </div>
          </div>
          </div>
    </div>
  );
}

export default App;