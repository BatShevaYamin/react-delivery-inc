// InvoicesList.js
import React, { useEffect, useState } from 'react';
import { getAllCustomers, setCustomersToLocalStorage } from '../services/customerService';
import GenericTable from './shared/GenericTable';
import '../styles/invoice.css';
import { buildInvoice } from '../services/invoiceService';

const InvoicesList = () => {

    const [customers, setCustomers] = useState([]);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Assuming getAllCustomers is an asynchronous function that returns a promise
            const allCustomers = await getAllCustomers(); // Invoke the function to get the customers
            setCustomers(allCustomers);
            console.log("cust", customers);
            // Ensure customers is an array and has data before proceeding
            if (Array.isArray(allCustomers) && allCustomers.length > 0) {
                //Clean invoices
                setInvoices([]);
                allCustomers.forEach(customer => {
                    setInvoices(prevInvoices => [
                        ...prevInvoices,
                        buildInvoice(customer.id)
                    ]);
                });
            }
        };

        fetchData();
    }, []);

    const columns = [
        { key: 'price', header: 'Price' },
        { key: 'id', header: 'PackageID' },
        { key: 'weight', header: 'Weight' },
    ];

    return (
        <div>
            {invoices.map((invoice) => (
                <>
                <div className="invoice-container">
                    <div className="invoice-header">
                        <h3>Hi {invoice.customerName}</h3>
                    </div>

                    <div className="invoice-body">
                        <div className="invoice-row">
                            <p><b>Date:</b>{invoice.date}</p>
                        </div>
                        <div className="invoice-row">
                            <p><b>Invoice No.</b> {invoice.randomId}</p>
                        </div>
                        <div className="invoice-row">
                        <p><b>Customer:</b> {invoice.customerName}</p>
                        </div>
                        <GenericTable data={invoice.packages} columns={columns} />
                        <div className="invoice-row">
                            <p className="total">Total Price: {invoice.totalPrice}</p>
                            <p className="total">Total Weight: {invoice.totalWeight}</p>
                        </div>
                    </div>

                    <div className="invoice-footer">
                        <p>Thank you for your business!</p>
                    </div>
                   
                </div>
                <br></br>
                <br></br>
                </>
            ))}
        </div>
    );
};

export default InvoicesList;
