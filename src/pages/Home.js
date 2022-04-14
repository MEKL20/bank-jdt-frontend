function Home() {
    return (
        <div className="App m-auto bg-white">
        <header className="mx-auto p-6 flex flex-row  bg-fauxbeige">
            <div className="container flex flex-row mx-auto"> 
            <div className="flex flex-row basis-1/2 text-xl font-bold text-black">
                Bank Sad
            </div>
            <div className="flex flex-row basis-1/2 justify-end">
                <a className="flex flex-row" href="#">Register</a>
                <a className="flex flex-row pl-2" href="#">Login</a>
            </div>
            </div> 
        </header>
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
            <a className="mb-4 font-bold text-xl" href="#">
                Register
            </a>
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
        </main>
        <footer className="mx-auto p-6 bg-fauxbeige">
            <div className="container flex flex-row mx-auto">
            <p>© Hak Cipta PT Bank Sad</p>
            </div>
        </footer>
        </div>
    );
}
  
 export default Home;