import {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

function Register() {
    const navigate=useNavigate()
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [identityCard, setIdentityCard] = useState()
    const [datebirth, setDateBirth] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            name,
            username,
            password,
            email,
            identityCard,
            datebirth,
            address,
            phone
        }

        axios.post('https://bank-root-api.herokuapp.com/Customer/add', data)
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: 'Register Success',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/login')
            })
            .catch(err => {
                console.log(err.response)
                Swal.fire({
                    title: 'Error!',
                    text: err.response.data,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })

    }

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
                <a href="/login">Login</a>
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

        {/* Start register */}
        <div className="flex flex-wrap justify-center my-10">
          <div className="w-full max-w-sm">
              <form action="" className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
                        focus:shadow-outline" placeholder="Name" onChange={e => setName(e.target.value)}
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
                        focus:shadow-outline" placeholder="IdentityCard" onChange={e => setIdentityCard(e.target.value)}
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
                        focus:shadow-outline" placeholder="Username" onChange={e => setUsername(e.target.value)}
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
                        focus:shadow-outline" placeholder="Password" onChange={e => setPassword(e.target.value)}
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
                        focus:shadow-outline" placeholder="Email" onChange={e => setEmail(e.target.value)}
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
                        focus:shadow-outline" placeholder="dd/mm/yy" onChange={e => setDateBirth(e.target.value)}
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
                        focus:shadow-outline" placeholder="Address" onChange={e => setAddress(e.target.value)}
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
                        focus:shadow-outline" placeholder="Phone" onChange={e => setPhone(e.target.value)}
                     />
                  </div>
                  <div className="flex items-center justify-between">
                      <button 
                          type="submit"
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
                          hover:text-red-700" href="/login">
                          Login!
                        </a>
                      </p>
                  </div>
              </form>
          </div>
        </div>
        {/* End register */}

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
  
  export default Register;
  