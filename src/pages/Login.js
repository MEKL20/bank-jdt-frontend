import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function Login(){

    const navigate=useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            username,
            password
        }

        axios.post('https://bank-root-api.herokuapp.com/Customer/login', null, {
            params: data
        })
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.Token)
                localStorage.setItem("username", res.data.Username)
                Swal.fire({
                    title: 'Login Success',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/dashboard')
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

            {/* Start Login */}
            <div className="flex flex-wrap justify-center my-36">
                <div className="w-full max-w-sm">
                    <form action="" className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4"
                          onSubmit={handleSubmit}>
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
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-martinique hover:opacity-80 transition duration-300
                      ease-in-out text-white font-bold py-2 px-4 rounded 
                      focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                            <a
                                className="inline-block align-baseline font-bold
                      text-sm text-martinique hover:opacity-80"
                                href="/forgetpassword"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Login */}

            {/* Start footer */}
            <footer className="mx-auto p-6">
                <div className="container flex flex-row mx-auto">
                    <p>© Hak Cipta PT Bank Root</p>
                </div>
            </footer>
            {/* End footer */}
        </div>
    )
}

export default Login;