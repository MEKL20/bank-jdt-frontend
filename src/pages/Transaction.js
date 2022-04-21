import {useState, useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

function Transaction() {
    const [customer, setCustomer] = useState([]);
    const [balance, setBalance] = useState();
    const [destination, setDestination] = useState();
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    const fetchCustomer = () => {
      axios.get('https://bank-root-api.herokuapp.com/Customer/get/' + localStorage.getItem("username"), {
          headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
          }
      })
          .then((res) => {
              console.log(res);
              setCustomer(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
    };

    const topup = (e) => {
      e.preventDefault()
      const data = {
          balance
      }
      axios.post(`https://bank-root-api.herokuapp.com/saving/${localStorage.getItem("username")}/topup`, data, {
          headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
          }
      })
      .then((res) => {
          Swal.fire({
              title: 'TopUp Success',
              icon: 'success',
              text:res.data.message,
              confirmButtonText: 'Ok'
          }).then(() => window.location.reload())
      })
      .catch(err => {
          console.log(err.response)
          Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
              confirmButtonText: 'Ok'
          })
      })
    }

    const transfer = (e) => {
      e.preventDefault()
      const data = {
          balance,
          accountSaving: destination
      }
      axios.post(`https://bank-root-api.herokuapp.com/saving/${localStorage.getItem("username")}/transfer`, data, {
          headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
          }
      })
      .then((res) => {
          Swal.fire({
              title: 'Transfer Success',
              text:res.data.message,
              icon: 'success',
              confirmButtonText: 'Ok'
          }).then(() => window.location.reload())
      })
      .catch(err => {
          console.log(err.response)
          Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
              confirmButtonText: 'Ok'
          })
      })
    }

    const withdraw = (e) => {
      e.preventDefault()
      const data = {
          balance
      }
      axios.post(`https://bank-root-api.herokuapp.com/saving/${localStorage.getItem("username")}/withdraw`, data, {
          headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
          }
      })
      .then((res) => {
          Swal.fire({
              title: 'Withdraw Success',
              text:res.data.message,
              icon: 'success',
              confirmButtonText: 'Ok'
          }).then(() => window.location.reload())
      })
      .catch(err => {
          console.log(err.response)
          Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
              confirmButtonText: 'Ok'
          })
      })
    }

    useEffect(() => {
      fetchCustomer();
    }, []);

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
                font-bold hover:opacity-80 transition duration-300 ease-in-out"
                onClick={handleLogout}
              >
              Logout
              </button>
            </div>
           </div> 
        </header>
        {/* End header */}

        <div className="container flex mx-auto my-32">
          <div className="flex flex-col justify-center basis-1/3 bg-white shadow-md">
            <h1 className="text-center">
              {customer.name}
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
                <a href="/transactionhistory" className="font-semibold mb-1">
                Transaction History
                </a>
                <a href="/deposito" className="font-semibold mb-1">
                Deposit
                </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center basis-2/3 bg-white shadow-md">
            <div className="container m-1">
              <center>
                Transaction
              </center>
            </div>
            <div className="container bg-white shadow-md border m-1">
                <center>Top Up</center>
                <form onSubmit={topup}>
                  <input type="number" placeholder="Amount" name="balance" 
                  className="border m-1 rounded" onChange={e => setBalance(e.target.value)}/><br/>
                  <button type="submit" className="shadow-md bg-martinique text-white p-1 m-1 rounded">Submit</button>
                </form>
            </div>
            <div className="container bg-white shadow-md border m-1">
                <center>Transfer</center>
                <form onSubmit={transfer}>
                  <input type="number" placeholder="Account Destination" name="destination" 
                  className="border m-1 rounded" onChange={e => setDestination(e.target.value)}/><br/>
                  <input type="number" placeholder="Amount" name="balance" 
                  className="border m-1 rounded" onChange={e => setBalance(e.target.value)}/><br/>
                  <button type="submit" className="shadow-md bg-martinique text-white p-1 m-1 rounded">Submit</button>
                </form>
            </div>
            <div className="container bg-white shadow-md border m-1">
                <center>Withdraw</center>
                <form onSubmit={withdraw}>
                  <input type="number" placeholder="Amount" name="balance" 
                  className="border m-1 rounded" onChange={e => setBalance(e.target.value)}/><br/>
                  <button type="submit" className="shadow-md bg-martinique text-white p-1 m-1 rounded">Submit</button>
                </form>
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
  