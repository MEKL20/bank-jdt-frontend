import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2';

function Deposito() {
    const [customer, setCustomer] = useState([]);
    const [deposits, setDeposits] = useState([]);
    const [amount, setAmount] = useState()
    const [period, setPeriod] = useState()
    const [accountDeposit, setAccountDeposit] = useState()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
        return new Date(dateString).toUTCString(undefined, options)
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

    const fetchDeposits = () => {
        axios.get('https://bank-root-api.herokuapp.com/Deposit/' + localStorage.getItem("username") + '/getByUsername', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res);
                setDeposits(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addDeposit = (e) => {
        e.preventDefault()
        const data = {
            balance: amount,
            period
        }
        axios.post(`https://bank-root-api.herokuapp.com/Deposit/${localStorage.getItem("username")}/add`, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
        .then((res) => {
            Swal.fire({
                title: 'Deposit Success',
                text: `${amount} for ${period} Month`,
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => window.location.reload())
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

    const withdrawDeposit = (e) => {
        e.preventDefault()
        axios.put(`https://bank-root-api.herokuapp.com/Deposit/${accountDeposit}/withdraw`, null, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
        .then((res) => {
            console.log(res)
            Swal.fire({
                title: 'Withdraw Success',
                text: res.data.Message,
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => window.location.reload())
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

    useEffect(() => {
        fetchCustomer();
        fetchDeposits();
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
                        <center>Deposits List</center> <br/>
                        {deposits.slice(0,5).map((deposit, index) => (
                            <div key={index}>
                                <p>
                                    <br/>
                                    Account : {deposit.accountDeposit} <br/>
                                    Created : {formatDate(deposit.createdAt)}<br/>
                                    Expired : {formatDate(deposit.expiredAt)}<br/>
                                    Period : {deposit.period} Month<br/>
                                    Balance : {deposit.balance} <br/>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="container bg-white shadow-md border m-1">
                        <center>add deposit</center>
                        <form onSubmit={addDeposit}>
                            <input type="number" placeholder="Amount" name="balance" 
                            className="border m-1 rounded" onChange={e => setAmount(e.target.value)}/><br/>
                            <input type="radio" value="3" name="period" 
                            className="m-1" onChange={e => setPeriod(e.target.value)}/>Deposit 3 Month Profit 2% <br/>
                            <input type="radio" value="6" name="period" 
                            className="m-1" onChange={e => setPeriod(e.target.value)}/>Deposit 6 Month Profit 4%<br/>
                            <input type="radio" value="9" name="period" 
                            className="m-1" onChange={e => setPeriod(e.target.value)}/>Deposit 9 Month Profit 6%<br/>
                            <input type="radio" value="12" name="period" 
                            className="m-1" onChange={e => setPeriod(e.target.value)}/>Deposit 12 Month Profit 8%<br/>
                            <button type="submit" className="shadow-md bg-martinique text-white p-1 m-1 rounded">Submit</button>
                        </form>
                    </div>
                    <div className="container bg-white shadow-md border m-1">
                        <center>withdraw deposit</center>
                        <form onSubmit={withdrawDeposit}>
                            <input type="number" placeholder="Account Deposit" name="account_deposit" 
                            className="border m-1 rounded" onChange={e => setAccountDeposit(e.target.value)}/><br/>
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

export default Deposito;