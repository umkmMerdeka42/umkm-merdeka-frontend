const createLikeButtonTemplate = () => /* html */ `
  <button aria-label="like this product" id="likeButton" class="like rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-grey-500 ml-4">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => /* html */ `
  <button aria-label="unlike this product" id="likeButton" class="like rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
