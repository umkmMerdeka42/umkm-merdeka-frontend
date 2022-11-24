class Login extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
    <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center">
        
        <div class="flex items-center w-full max-w-md p-8 px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
                <div class="flex flex-col justify-center items-center w-full text-center">
                <a href="#/"><img src="images/logo/Logo-main.jpg" class="w-44" alt="logo-umkm-merdeka"></a>
                    
                    <p class="mt-3 text-gray-500 dark:text-gray-300 font-semibold">Sign in to access your account</p>
                </div>

                <div class="mt-8">
                    <form>
                        <div>
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#/forgot" class="text-sm text-secondary focus:text-primary hover:text-primary no-underline ">Forgot password?</a>
                            </div>

                            <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-primary to-secondary py-2 px-4 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-white group-hover:text-tertiary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                </svg>
                              </span>
                              Sign in
                            </button>
                          </div>

                    </form>

                    <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#/signup" class="text-secondary focus:text-primary hover:text-primary no-underline ">Sign up</a>.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  }
}

customElements.define('login-page', Login);
