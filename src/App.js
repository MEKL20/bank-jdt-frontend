

function App() {
  return (
     <div className="App m-auto bg-gradient-to-r from-white to-milkyway">
      
      {/* Start header */}
      <header className="mx-auto p-6 flex flex-row">
         <div className="container flex flex-row mx-auto"> 
          <div className="basis-1/2">
            <img src="img/logo_size-removed.png" alt="" className="scale-105 -translate-x-28"/>
          </div>
          <div className="flex flex-row basis-1/2 items-center justify-end mx-auto">
            <button className="py-1 px-2 border-2 h-10 rounded bg-martinique text-white font-bold hover:opacity-80 transition duration-300 ease-in-out" href="#">Register</button>
            <button className="py-1 px-2 mx-2 border-2 h-10 rounded bg-martinique text-white font-bold hover:opacity-80 transition duration-300 ease-in-out" href="#">Login</button>
          </div>
         </div> 
      </header>
      {/* End header */}

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

      {/* Start Hero */}
      <div className="Hero flex flex-wrap justify-center">
        <div className="w-full mt-10">
          <img src="img\warga.jpeg" alt="test" className="max-w-full mx-auto scale-90"/>
        </div>
      </div>
      {/* End Hero */}

      {/* Start main */}
      <main className="container mx-auto my-24">
        <div className="mb-4">
          <div className="mb-4 font-bold text-xl">
            Information
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
            iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
            nulla pariatur?
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-4 font-bold text-xl">
            Feature
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mb-4">
          <a className="mb-4 font-bold text-xl" href="/">
            Register
          </a>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </main>
      {/* End main */}

      <div className="container flex mx-auto">
        <div className="flex flex-wrap justify-center basis-1/4 border">
          <img src="img\person.png" alt="person" className="max-w-full mx-auto scale-90"/>
          <div>
            <h1>
              Menu
            </h1>
          </div>
          <div>
            <a href="/">
              Dashboard
            </a>
          </div>
          <div>
            <a href="/">
              Transaction
            </a>
          </div>
          <a href="/">
            Deposito
          </a>
        </div>
        <div className="flex flex-wrap justify-center basis-3/4 border">
          <div>
            Transaction
          </div>
        </div>
      </div>

      {/* Start footer */}
      <footer className="mx-auto p-6">
        <div className="container flex flex-row mx-auto">
          <p>© Hak Cipta PT Bank Sad</p>
        </div>
      </footer>
      {/* End footer */}
    </div>
  );
}

export default App;
