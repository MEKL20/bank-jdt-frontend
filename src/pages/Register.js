

function Register() {
    return (
       <div className="App m-auto bg-gradient-to-r from-white to-milkyway">
        
        {/* Start register */}
        <div className="flex flex-wrap justify-center mt-20">
          <div className="w-full max-w-sm">
              <form action="" className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-5">
                      <label 
                        htmlFor="name" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Name
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Name"
                      />
  
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
  
                      <label 
                        htmlFor="email" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Email
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Email"
                      />
  
                      <label 
                        htmlFor="identityCard" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Identity Card
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="IdentityCard"
                      />
  
                      <label 
                        htmlFor="datebirth" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Date of Birth
                      </label>
                      <input 
                        type="date" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="dd/mm/yy"
                      />
  
                      <label 
                        htmlFor="address" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Address
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Address"
                      />
  
                      <label 
                        htmlFor="phone" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Phone
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Phone"
                      />
                  </div>
                  <div className="flex items-center justify-between">
                      <button 
                          className="bg-martinique hover:opacity-80 transition duration-300 
                          ease-in-out text-white font-bold py-2 px-4 rounded 
                          focus:outline-none focus:shadow-outline"
                      >
                        Register
                      </button>
                      <p
                        className="inline-block align-baseline font-bold 
                        text-sm text-martinique"
                      >
                        Already have an account? <a className="text-red-500 
                          hover:text-red-700" href="/">
                          Login!
                        </a>
                      </p>
                  </div>
              </form>
          </div>
        </div>
        {/* End register */}
      </div>
    );
  }
  
  export default Register;
  