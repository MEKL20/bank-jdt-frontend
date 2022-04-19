import React from "react";

function Home() {
    return (
       <div className="App m-auto bg-gradient-to-r from-white to-milkyway">
        
        {/* Start header */}
        <header className="mx-auto p-6 flex flex-row">
           <div className="container flex flex-row mx-auto"> 
            <div className="basis-1/2">
              <img 
                src="img/logo_size-removed.png" alt="logo" 
                className="scale-105 -translate-x-28"
              />
            </div>
            <div className="flex flex-row basis-1/2 items-center justify-end mx-auto">
              <button 
                className="py-1 px-2 border-2 h-10 rounded bg-martinique text-white font-bold 
                hover:opacity-80 transition duration-300 ease-in-out" href="/register"
              >
                <a href="/register">Register</a>
              </button>
              <button 
                className="py-1 px-2 mx-2 border-2 h-10 rounded bg-martinique text-white 
                font-bold hover:opacity-80 transition duration-300 ease-in-out" href="/login"
              >
                <a href="/login">Login</a>
              </button>
            </div>
           </div> 
        </header>
        {/* End header */}
  
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
            <a className="mb-4 font-bold text-xl" href="/register">
              Register
            </a>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </main>
        {/* End main */}
  
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
  
  export default Home;
  