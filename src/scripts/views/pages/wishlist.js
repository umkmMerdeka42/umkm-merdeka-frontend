import ProductWishlistIdb from '../../data/product-wishlist-idb';

const Wishlist = {
  async render() {
    return /* html */ `
      <product-wishlist></product-wishlist>
      <section id="message"></section>
    `;
  },

  async afterRender() {
    const productListElement = document.querySelector('product-wishlist');
    const wishlist = await ProductWishlistIdb.getAllProducts();
    const message = document.querySelector('#message');

    if (wishlist.length === 0) {
      message.innerHTML = '<message-info></message-info>';
    }

    const allProduct = (productList) => {
      productListElement.products = productList;
    };

    ProductWishlistIdb.getAllProducts().then((data) => {
      allProduct(data);
    });

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default Wishlist;
