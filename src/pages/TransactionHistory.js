import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function TransactionHistory() {
    const [customer, setCustomer] = useState([]);
    const [reportings, setReportings] = useState([]);
    const navigate = useNavigate()

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

    const fetchReportings = () => {
        axios.get('https://bank-root-api.herokuapp.com/reporting/' + localStorage.getItem("username"), {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res);
                setReportings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchCustomer();
        fetchReportings();
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
                            Transaction History
                        </center>
                    </div>
                    <div className="container bg-white shadow-md border m-1">
                        {reportings.map((reporting) => (
                            <p>
                                <br/>
                                Date : {formatDate(reporting.createdAt)}<br/>
                                Activity : {reporting.activity} <br/>
                                Source : {reporting.source} <br/>
                                Destination : {reporting.destination} <br/>
                                Amount : {reporting.amount} <br/>
                                Balance : {reporting.balance} <br/>
                            </p>
                        ))}
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

export default TransactionHistory;
  