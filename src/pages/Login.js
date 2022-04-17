

function Login() {
    return (
       <div className="App m-auto bg-gradient-to-r from-white to-milkyway">
        
        {/* Start Login */}
        <div className="flex flex-wrap justify-center mt-20">
          <div className="w-full max-w-sm">
              <form action="" className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-5">
                      <label 
                          htmlFor="username" className="block text-black text-sm 
                          font-bold mb-2"
                      >
                       Username
                      </label>
                      <input 
                          type="text" className="shadow appearance-none border rounded w-full 
                          py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                          focus:shadow-outline" placeholder="Username"
                      />
                      <label 
                          htmlFor="password" className="block text-black text-sm 
                          font-bold mb-2"
                      >
                       Password
                      </label>
                      <input 
                          type="password" className="shadow appearance-none border rounded 
                          w-full py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                          focus:shadow-outline" placeholder="Password"
                      />
                  </div>
                  <div className="flex items-center justify-between">
                      <button 
                          className="bg-martinique hover:opacity-80 transition duration-300 
                          ease-in-out text-white font-bold py-2 px-4 rounded 
                          focus:outline-none focus:shadow-outline"
                      >
                        Login
                      </button>
                      <a
                          className="inline-block align-baseline font-bold 
                          text-sm text-martinique hover:opacity-80"
                          href="/"
                      >
                        Forgot Password?
                      </a>
                  </div>
              </form>
          </div>
        </div>
        {/* End Login */}
      </div>
    );
  }
  
  export default Login;
  