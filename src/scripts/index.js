import 'regenerator-runtime';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style/style.css';
import './components/nav-bar';
import './components/footer';
import './components/hero-section';
import './components/about-us';
import './components/login-page';
import './components/signup';
import './components/home';
import './components/list-section';
import './components/detail-section';
import './components/faq-section';
import './components/card-home';
import 'tw-elements';
import 'animate.css';
import App from './views/app';

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
});
