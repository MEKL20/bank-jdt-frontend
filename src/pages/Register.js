// import {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik'
import * as Yup from 'yup'

function Register() {
    const navigate=useNavigate()

    const register = (values) => {
        const data = {
            name: values.name,
            username: values.username,
            password: values.password,
            email: values.email,
            identityCard: values.identityCard,
            datebirth: values.datebirth,
            address: values.address,
            phone: values.phone
        }

        formik.setSubmitting(false)

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

    // const doRegister = (values) => {
    //   console.log('form values', values);
    //   setTimeout(() => {
    //     formik.setSubmitting(false);
    //     formik.resetForm();
    //   }, 2000);
    // }

    const formik = useFormik({
      //initial values
      initialValues: {
        name:'',
        username:'',
        password:'',
        email:'',
        identityCard:'',
        datebirth:'',
        address:'',
        phone:''
      },

      //validation schema
      validationSchema: Yup.object({
        name: Yup.string()
        .required(),
        username: Yup.string()
        .required(),
        password: Yup.string()
        .required()
        .min(8, 'Should more than 8 characters')
        .matches(/[a-z]/g, 'Should contain at least 1 lowercase')
        .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
        .matches(/[0-9]/g, 'Should contain at least 1 number')
        .matches(/[!@#$%^&*]/g, 'Should contain at least 1 special character')
        .matches(/^\S*$/g, 'Should not contain spaces'),
        email: Yup.string()
        .required()
        .email('Invalid email format'),
        identityCard: Yup.string()
        .required(),
        datebirth: Yup.string()
        .required(),
        address: Yup.string()
        .required(),
        phone: Yup.string()
        .required()
      }),

      //handle submission
      onSubmit: (values) => {
        register(values);
      }
    });

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
              <form action="" className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
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
                        focus:shadow-outline" placeholder="Name" name="name"
                        {...formik.getFieldProps('name')}
                    />
                    {
                      formik.touched.name && formik.errors.name && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.name}
                    </div>
                    }

                      <label 
                        htmlFor="identityCard" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Identity Card
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="IdentityCard" name="identityCard"
                        {...formik.getFieldProps('identityCard')}
                    />
                    {
                      formik.touched.identityCard && formik.errors.identityCard && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.identityCard}
                    </div>
                    }
  
                      <label 
                        htmlFor="username" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Username
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Username" name="username"
                        {...formik.getFieldProps('username')}
                    />
                    {
                      formik.touched.username && formik.errors.username && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.username}
                    </div>
                    }
  
                      <label 
                        htmlFor="password" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Password
                      </label>
                      <input 
                        type="password" className="shadow appearance-none border rounded 
                        w-full py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Password" name="password"
                        {...formik.getFieldProps('password')}
                    />
                    {
                      formik.touched.password && formik.errors.password && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.password}
                    </div>
                    }
  
                      <label 
                        htmlFor="email" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Email
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Email" name="email"
                        {...formik.getFieldProps('email')}
                    />
                    {
                      formik.touched.email && formik.errors.email && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.email}
                    </div>
                    }
  
                      <label 
                        htmlFor="datebirth" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Date of Birth
                      </label>
                      <input 
                        type="date" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="dd/mm/yy" name="datebirth"
                        {...formik.getFieldProps('datebirth')}
                    />
                    {
                      formik.touched.datebirth && formik.errors.datebirth && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.datebirth}
                    </div>
                    }
  
                      <label 
                        htmlFor="address" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Address
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Address" name="address"
                        {...formik.getFieldProps('address')}
                    />
                    {
                      formik.touched.address && formik.errors.address && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.address}
                    </div>
                    }
  
                      <label 
                        htmlFor="phone" className="block text-black text-sm 
                        font-bold mb-2"
                      >
                        Phone
                      </label>
                      <input 
                        type="text" className="shadow appearance-none border rounded w-full 
                        py-2 px-3 mb-2 text-black leading-tight focus:outline-none 
                        focus:shadow-outline" placeholder="Phone" name="phone"
                        {...formik.getFieldProps('phone')}
                    />
                    {
                      formik.touched.phone && formik.errors.phone && 
                    <div 
                      className="error text-red-500 mb-1"
                    >
                      {formik.errors.phone}
                    </div>
                    }
                  </div>
                  <div className="flex items-center justify-between">
                      <button 
                          type="submit"
                          className="bg-martinique hover:opacity-80 transition duration-300 
                          ease-in-out text-white font-bold py-2 px-4 rounded 
                          focus:outline-none focus:shadow-outline"
                          disabled={formik.isSubmitting}
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
  