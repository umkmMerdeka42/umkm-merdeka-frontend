const DrawerInitiator = {
  init({
    button, drawer, content, hero, footer,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    footer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('scale-0');
    button.classList.toggle('hamburger-active');
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.add('scale-0');
    button.classList.remove('hamburger-active');
  },
};

export default DrawerInitiator;
