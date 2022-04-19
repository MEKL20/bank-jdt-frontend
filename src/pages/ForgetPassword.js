import React from "react";

function ForgetPassword() {
    return (
       <div className="App m-auto bg-gradient-to-r from-white to-milkyway">
        
        {/* Start header */}
        <header className="mx-auto p-6 flex flex-row">
           <div className="container flex flex-row mx-auto"> 
            <div className="basis-1/2">
              <img src="img/logo_size-removed.png" alt="" className="scale-105 -translate-x-28"/>
            </div>
            <div className="flex flex-row basis-1/2 items-center justify-end mx-auto">
              <button 
                className="py-1 px-2 border-2 h-10 rounded bg-martinique text-white font-bold 
                hover:opacity-80 transition duration-300 ease-in-out" href="#"
              >
                <a href="/register">Register</a>
              </button>
              <button 
                className="py-1 px-2 mx-2 border-2 h-10 rounded bg-martinique text-white 
                font-bold hover:opacity-80 transition duration-300 ease-in-out" href="#"
              >
                <a href="/">Home</a>
              </button>
            </div>
           </div> 
        </header>
        {/* End header */}

        {/* Start Forget Password */}
        <div className="flex flex-wrap justify-center my-36">
          <div className="w-full max-w-sm">
              <form action="" className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-5">
                      <label 
                          htmlFor="newPassword" className="block text-black text-sm 
                          font-bold mb-2"
                      >
                       New Password
                      </label>
                      <input 
                          type="password" className="shadow appearance-none border rounded w-full 
                          py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                          focus:shadow-outline" placeholder="New Password"
                      />
                      <label 
                          htmlFor="confirmNewPassword" className="block text-black text-sm 
                          font-bold mb-2"
                      >
                       Confirm New Password
                      </label>
                      <input 
                          type="password" className="shadow appearance-none border rounded 
                          w-full py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                          focus:shadow-outline" placeholder="Confirm New Password"
                      />
                  </div>
                  <div className="flex items-center justify-between">
                      <button 
                          className="bg-martinique hover:opacity-80 transition duration-300 
                          ease-in-out text-white font-bold py-2 px-4 rounded 
                          focus:outline-none focus:shadow-outline"
                      >
                        <a href="/login">Confirm</a>
                      </button>
                  </div>
              </form>
          </div>
        </div>
        {/* End Forget Password */}

        {/* Start footer */}
        <footer className="mx-auto p-6">
          <div className="container flex flex-row mx-auto">
            <p>© Hak Cipta PT Bank Root</p>
          </div>
        </footer>
        {/* End footer */}
      </div>
    );
  }
  
  export default ForgetPassword;
  