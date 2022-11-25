class Login extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <div class="flex justify-center p-8 px-6">
        <div class="w-full max-w-md my-auto lg:w-2/6">
          <div class="flex-1">
            <div class="flex flex-col justify-center items-center w-full text-center">
              <a href="#/"><img src="images/logo/UMKM-Merdeka-Brands.png" class="w-44" alt="logo-umkm-merdeka"></a>
                
              <p class="mt-3 text-gray-500 dark:text-gray-300 font-semibold">Sign in to access your account</p>
            </div>

            <div class="mt-8">
              <form>
                <div>
                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <a href="#/forgot" class="text-sm text-secondary focus:text-primary hover:text-primary no-underline ">Forgot password?</a>
                  </div>

                  <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                  <button data-mdb-ripple="true" data-mdb-ripple-color="light" type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-primary to-secondary py-2 px-4 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Sign in
                  </button>
                </div>

              </form>
              <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#/signup" class="text-secondary focus:text-primary hover:text-primary no-underline ">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('login-page', Login);
