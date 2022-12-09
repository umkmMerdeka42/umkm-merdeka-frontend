import 'regenerator-runtime';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style/style.css';
import './components/nav-bar';
import './components/footer';
import './components/hero-section';
import './components/about-us';
import './components/home';
import './components/list-section';
import './components/detail-section';
import './components/faq-section';
import './components/card-home';
import './components/wishlist-page';
import './components/search-bar';
import './components/signup-promotion';
import './components/our-advantage';
import 'tw-elements';
import 'animate.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
  footer: document.querySelector('footer-bar'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
