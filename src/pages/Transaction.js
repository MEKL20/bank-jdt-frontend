import React from "react";

function Transaction() {
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
                className="py-1 px-2 mx-2 border-2 h-10 rounded bg-martinique text-white 
                font-bold hover:opacity-80 transition duration-300 ease-in-out" href="#"
              >
                <a href="/">Logout</a>
              </button>
            </div>
           </div> 
        </header>
        {/* End header */}

        <div className="container flex mx-auto my-32">
          <div className="flex flex-col justify-center basis-1/3 border">
            <img 
              src="img\person.png" alt="person" 
              className="max-w-full mx-auto scale-90"
            />
            <h1 className="text-center">
              Simon Hutajulu
            </h1>

            <h1 className="mt-8 mb-2 ml-10 font-bold">
              Menu
            </h1>
            <div className="flex flex-col ml-10 mb-3">
                <a href="/dashboard" className="font-semibold mb-1">
                Dashboard
                </a>
                <a href="/transaction" className="font-semibold mb-1">
                Transaction
                </a>
                <a href="/deposito" className="font-semibold mb-1">
                Deposito
                </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center basis-2/3 border">
            <div className="border">
              <h1>
                Transaction
              </h1>
            </div>
            <div className="container border m-1">
                balance
            </div>
            <div className="container border m-1">
                debit
            </div>
            <div className="container border m-1">
                transfer
            </div>
            <div className="container border m-1">
                withdraw
            </div>
          </div>
        </div>
        
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
  
  export default Transaction;
  