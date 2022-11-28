class ForgotPw extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="bg-white dark:bg-gray-900">
      <div class="flex justify-center">
        
        <div class="flex items-center w-full max-w-md p-8 px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="flex flex-col justify-center items-center w-full text-center">
              <a href="#/"><img src="images/logo/Logo-main.jpg" class="w-44" alt="logo-umkm-merdeka"></a>
              <p class="mt-3 text-gray-500 dark:text-gray-300 font-semibold">Reset Your Password</p>
            </div>

            <div class="mt-8">
              <form>
                <div>
                  <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">New Password</label>
                  </div>
                  <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                  </div>
                  <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                  <button
                  class="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-primary to-secondary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                  <span>Reset Password </span>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </form>
              <p class="mt-6 text-sm text-center text-gray-400">Back to your account <a href="#/login" class="text-secondary focus:text-primary hover:text-primary no-underline ">Login</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('forgot-pw', ForgotPw);
